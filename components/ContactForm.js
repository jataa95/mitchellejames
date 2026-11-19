"use client";

import { useActionState } from "react";
import { sendEnquiry } from "@/app/actions";
import { artist } from "@/data/site";

const TYPES = ["Commission", "Buy a painting", "Exhibition / press", "Something else"];

function Field({ label, error, children }) {
  return (
    <label className="group block">
      <span className="text-sm font-semibold text-white/50 transition-colors group-focus-within:text-gold">{label}</span>
      {children}
      {error && <span className="mt-2 block text-sm text-gold">{error}</span>}
    </label>
  );
}

const input =
  "mt-2 block w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-xl text-white placeholder:text-white/25 transition-colors focus:border-gold focus:outline-none focus:ring-0";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendEnquiry, { status: "idle" });
  const v = state.values ?? {};
  const e = state.errors ?? {};

  if (state.status === "sent") {
    return (
      <div className="pop-in flex min-h-[420px] flex-col justify-center">
        <p className="display text-6xl md:text-7xl">Thank you.</p>
        <p className="mt-6 max-w-md text-lg text-white/70">
          Your message is on its way. Mitchelle will get back to you soon — usually within a few days.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-10" noValidate>
      {/* Honeypot for bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <fieldset>
        <legend className="text-sm font-semibold text-white/50">I&rsquo;m interested in</legend>
        <div className="mt-4 flex flex-wrap gap-3">
          {TYPES.map((t, i) => (
            <label key={t} className="cursor-pointer">
              <input type="radio" name="type" value={t} defaultChecked={(v.type ?? TYPES[0]) === t} className="peer sr-only" />
              <span
                className="block rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-white peer-checked:border-gold peer-checked:bg-gold peer-checked:text-ink peer-focus-visible:ring-2 peer-focus-visible:ring-gold"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-10 md:grid-cols-2">
        <Field label="Your name" error={e.name}>
          <input name="name" required defaultValue={v.name} autoComplete="name" placeholder="Ada Okafor" className={input} />
        </Field>
        <Field label="Email" error={e.email}>
          <input name="email" type="email" required defaultValue={v.email} autoComplete="email" placeholder="you@example.com" className={input} />
        </Field>
      </div>

      <Field label="Budget (optional)">
        <input name="budget" defaultValue={v.budget} placeholder="e.g. £2,000 – £5,000" className={input} />
      </Field>

      <Field label="Tell Mitchelle about it" error={e.message}>
        <textarea
          name="message"
          required
          rows={4}
          defaultValue={v.message}
          placeholder="Who or what should be painted, the size you have in mind, where it will hang…"
          className={`${input} resize-none`}
        />
      </Field>

      {(state.status === "error" || state.status === "unconfigured") && (
        <p className="pop-in border-l-2 border-gold pl-4 text-white/80" role="alert">
          {state.status === "error" ? "Something went wrong sending your message. " : "The form isn't connected yet. "}
          Please message Mitchelle directly on{" "}
          <a href={artist.instagram} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
            Instagram
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group relative inline-flex items-center gap-3 overflow-hidden bg-white px-8 py-5 text-sm font-semibold uppercase tracking-tight text-ink disabled:opacity-60"
      >
        <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 ease-out group-hover:translate-x-0" aria-hidden />
        <span className="relative">{pending ? "Sending…" : "Send enquiry"}</span>
        <span className="relative transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </button>
    </form>
  );
}
