import * as universal from '../entries/pages/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/5.BP11kmGM.js","_app/immutable/chunks/Cake Dungeon-Logo.AMU7H04n.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js","_app/immutable/chunks/custom-element.Bm5kQDFO.js","_app/immutable/chunks/Section.CzGKjMQh.js","_app/immutable/chunks/misc.C3iQt_Ws.js","_app/immutable/chunks/props.DSfI25jD.js","_app/immutable/chunks/lifecycle.hbFRYD-q.js","_app/immutable/chunks/index-client.BemH0CZy.js","_app/immutable/chunks/Red Velvet Cake.DMilP7s3.js","_app/immutable/chunks/Cakes.Cn1UKoIw.js"];
export const stylesheets = [];
export const fonts = [];
