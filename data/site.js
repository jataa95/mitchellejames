// Central place for the artist's details — edit here and the whole site updates.
export const artist = {
  name: "Mitchelle James",
  handle: "mitchyj_ev_art",
  role: "Painter",
  tagline: "An artist of, for and from Africa",
  instagram: "https://www.instagram.com/mitchyj_ev_art/",
  // TODO: replace with the real Facebook page URL for "Mitchyj Ev Art".
  facebook: null,
  // TODO: add a contact email if Mitchelle wants enquiries outside Instagram.
  email: null,
};

export const press = [
  {
    outlet: "THISDAY",
    title: "Fela-inspired painting",
    date: "Feb 2026",
    // TODO: paste the full article URL (it is linked from the Instagram bio).
    url: "https://www.thisdaylive.com/",
  },
];

export const contactHref = (a = artist) => (a.email ? `mailto:${a.email}` : a.instagram);
