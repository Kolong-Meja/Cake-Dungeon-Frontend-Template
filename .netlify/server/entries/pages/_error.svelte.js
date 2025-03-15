import { g as getContext, h as store_get, j as escape_html, u as unsubscribe_stores, e as pop, p as push } from "../../chunks/index2.js";
import "../../chunks/exports.js";
import "devalue";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="bg-light-cream font-lato min-h-screen max-w-full"><div class="flex h-screen justify-center items-center"><div class="flex flex-col space-y-4">`;
  if (store_get($$store_subs ??= {}, "$page", page).status === 404) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1 class="text-gray-900 text-3xl font-semibold md:text-4xl lg:text-5xl">${escape_html(store_get($$store_subs ??= {}, "$page", page).status)} ${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</h1> <p class="text-gray-900 text-base font-normal md:text-lg"><span class="underline underline-offset-2 font-semibold">${escape_html(store_get($$store_subs ??= {}, "$page", page).url.pathname)}</span> path is
					not exist.</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (store_get($$store_subs ??= {}, "$page", page).status === 500) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1 class="text-gray-900 text-5xl font-semibold md:text-4xl lg:text-5xl">${escape_html(store_get($$store_subs ??= {}, "$page", page).status)} ${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</h1> <p class="text-gray-900 text-base font-normal md:text-lg">There's an issue with our server. Please wait until we fix it.</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
