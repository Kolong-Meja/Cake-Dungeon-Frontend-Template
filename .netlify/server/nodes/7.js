import * as universal from '../entries/pages/articles/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/articles/+page.ts";
export const imports = ["_app/immutable/nodes/7.BibZ9Dvk.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.Bm5kQDFO.js","_app/immutable/chunks/Section.CzGKjMQh.js","_app/immutable/chunks/misc.C3iQt_Ws.js","_app/immutable/chunks/props.DSfI25jD.js","_app/immutable/chunks/lifecycle.hbFRYD-q.js"];
export const stylesheets = [];
export const fonts = [];
