import { v as value_or_fallback, k as attr, f as slot, l as bind_props } from "./index2.js";
import { d as default_slot } from "./misc.js";
function Section($$payload, $$props) {
  let bgColor = value_or_fallback($$props["bgColor"], () => "bg-cream-200");
  let fontFamily = value_or_fallback($$props["fontFamily"], () => "font-bodoni");
  let responsiveDesign = value_or_fallback($$props["responsiveDesign"], () => false);
  let componentClass = responsiveDesign ? `${bgColor} ${fontFamily} min-h-screen max-w-full` : `${bgColor} ${fontFamily}`;
  $$payload.out += `<section${attr("class", componentClass)}><div class="container mx-auto"><!---->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!----></div></section>`;
  bind_props($$props, { bgColor, fontFamily, responsiveDesign });
}
export {
  Section as S
};
