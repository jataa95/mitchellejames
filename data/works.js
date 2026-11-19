// Titles marked `workingTitle: true` are placeholders — swap in the real titles,
// sizes and media when Mitchelle confirms them.
const d = (src, w, h, alt) => ({ src, width: w, height: h, alt });

export const works = [
  {
    slug: "gold-standard",
    index: 1,
    title: "Gold Standard",
    workingTitle: true,
    medium: "Painting on canvas", // TODO: confirm medium & size
    theme: "Wealth, ownership",
    year: "2026", // TODO: confirm
    statement:
      "A portrait about who holds Africa's gold. The bullion doesn't leave — she keeps it, wears it, owns it.",
    story: [
      "A woman stands full-length in a sea-green robe and a kente-patterned sash, a gold bar cradled in her hand, against a rose ground thick with bullion and leaves.",
      "Gold is mined across the continent, yet too often its value leaves before it is ever felt at home. The painting asks a simple question: what does it look like when Africa keeps the wealth of its own ground?",
    ],
    image: d("/works/gold-standard.jpg", 788, 1350, "Gold Standard — a woman in a sea-green robe holding a gold bar against a pink ground of gold bars and leaves"),
    hero: d("/works/gold-standard-studio.jpg", 1440, 1440, "Gold Standard on an easel in a bright room"),
    details: [
      d("/details/gold-face.jpg", 300, 300, "Detail: the sitter's face and cowrie necklace"),
      d("/details/gold-hands.jpg", 300, 300, "Detail: hand holding a gold bar"),
      d("/details/gold-sash.jpg", 320, 360, "Detail: the kente-patterned sash"),
      d("/details/gold-feet.jpg", 370, 340, "Detail: a blue sneaker stepping on gold"),
    ],
  },
  {
    slug: "talent-greenhouse",
    index: 2,
    title: "The Talent Greenhouse",
    workingTitle: true,
    medium: "Painting on canvas", // TODO: confirm medium & size
    theme: "Inheritance, creativity",
    year: "2026", // TODO: confirm
    statement:
      "Talent isn't discovered. It is planted, tended and passed down — from the hands of elders to the next generation of painters.",
    story: [
      "Gourd-bodied painters in red berets ride vines through a blazing amber field, palettes in hand, seeds sprouting around them.",
      "The heads of elders rise out of the canvas in thick, sculpted paint. The vines tie every young painter back to them — creativity as something a community grows on purpose.",
    ],
    image: d("/works/talent-greenhouse.jpg", 652, 1108, "The Talent Greenhouse — gourd-bodied painters riding vines through an amber field"),
    hero: d("/artist/mitchelle-studio.jpg", 1440, 1920, "Mitchelle James standing beside The Talent Greenhouse on an easel"),
    details: [
      d("/details/talent-painter.jpg", 300, 300, "Detail: a small painter in a red beret"),
      d("/details/talent-elder.jpg", 340, 310, "Detail: an elder's head in sculpted paint"),
      d("/details/talent-seed.jpg", 310, 290, "Detail: a seedling inside a ring"),
      d("/details/talent-heads.jpg", 340, 300, "Detail: textured heads among the vines"),
    ],
  },
  {
    slug: "gourd-bearers",
    index: 3,
    title: "Gourd Bearers",
    workingTitle: true,
    medium: "Study, painting on canvas", // TODO: confirm medium & size
    theme: "Memory, vessels",
    year: "2025", // TODO: confirm
    statement:
      "The first appearance of the gourd figures — the calabash as vessel, body and carrier of memory, each holding a brush like a flame.",
    story: [
      "An earlier, looser study: calabash figures with torch-like brushes drift between rings of burnt orange and floating seed pods.",
      "These figures return, sharper and brighter, in The Talent Greenhouse. Here they are still finding their shape.",
    ],
    image: d("/works/gourd-study.jpg", 1440, 1920, "Gourd Bearers — calabash figures with flaming brushes on a burnt-orange ground"),
    hero: d("/works/gourd-study.jpg", 1440, 1920, "Gourd Bearers"),
    details: [
      d("/details/gourd-figure.jpg", 750, 700, "Detail: a pale blue gourd figure"),
      d("/details/gourd-torch.jpg", 540, 600, "Detail: a figure raising a flaming brush"),
    ],
  },
];

export const getWork = (slug) => works.find((w) => w.slug === slug);
