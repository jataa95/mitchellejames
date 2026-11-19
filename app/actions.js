"use server";

// Sends contact-form enquiries by email through Resend (https://resend.com).
// Set these environment variables (e.g. in Vercel → Project → Settings):
//   RESEND_API_KEY       – your Resend API key
//   CONTACT_TO_EMAIL     – where enquiries should arrive (Mitchelle's inbox)
//   CONTACT_FROM_EMAIL   – optional; a sender on a domain verified in Resend.
//                          Defaults to Resend's test sender.

const TYPES = ["Commission", "Buy a painting", "Exhibition / press", "Something else"];

const clean = (v, max) => String(v ?? "").trim().slice(0, max);
const escape = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export async function sendEnquiry(prevState, formData) {
  // Honeypot: real people never fill this hidden field.
  if (clean(formData.get("company"), 200)) return { status: "sent" };

  const values = {
    name: clean(formData.get("name"), 120),
    email: clean(formData.get("email"), 200),
    type: clean(formData.get("type"), 40),
    budget: clean(formData.get("budget"), 80),
    message: clean(formData.get("message"), 5000),
  };

  const errors = {};
  if (!values.name) errors.name = "Please add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please add a valid email.";
  if (!TYPES.includes(values.type)) values.type = "Something else";
  if (values.message.length < 10) errors.message = "Tell Mitchelle a little more (10+ characters).";
  if (Object.keys(errors).length) return { status: "invalid", errors, values };

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    console.warn("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set; enquiry not sent.");
    return { status: "unconfigured", values };
  }

  const rows = [
    ["Name", values.name],
    ["Email", values.email],
    ["Enquiry", values.type],
    ["Budget", values.budget || "—"],
  ];
  const html = `
    <h2>New enquiry from the website</h2>
    <table cellpadding="6">${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escape(v)}</td></tr>`).join("")}</table>
    <p style="white-space:pre-wrap">${escape(values.message)}</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Website <onboarding@resend.dev>",
        to: [to],
        reply_to: values.email,
        subject: `${values.type} enquiry from ${values.name}`,
        html,
      }),
    });
    if (!res.ok) {
      console.error("Contact form: Resend responded", res.status, await res.text());
      return { status: "error", values };
    }
  } catch (err) {
    console.error("Contact form: send failed", err);
    return { status: "error", values };
  }

  return { status: "sent" };
}
