export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
};

// Intentionally empty: populate with real client quotes before this section
// goes live. Left blank rather than filled with placeholder testimonials
// attributed to people who didn't say them — the section simply doesn't
// render until there's genuine content here.
export const VIRTUAL_CFO_TESTIMONIALS: Testimonial[] = [];
