import { f as slot } from "../../../chunks/index2.js";
import { N as NavBar, F as Footer } from "../../../chunks/Footer.js";
import { d as default_slot } from "../../../chunks/misc.js";
function _layout($$payload, $$props) {
  NavBar($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
