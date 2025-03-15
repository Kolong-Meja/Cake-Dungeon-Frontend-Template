import { m as ensure_array_like, k as attr, j as escape_html, e as pop, p as push } from "./index2.js";
import { C as CakeDungeonLogo } from "./Cake Dungeon-Logo.js";
import { S as Section } from "./Section.js";
const pages = {
  links: [
    {
      id: 1,
      url: "/about",
      title: "About"
    },
    {
      id: 2,
      url: "/shop",
      title: "Shop"
    },
    {
      id: 3,
      url: "/articles",
      title: "Articles"
    },
    {
      id: 4,
      url: "/login",
      title: "Sign In"
    }
  ]
};
function NavBar($$payload, $$props) {
  push();
  const each_array = ensure_array_like(pages.links);
  const each_array_1 = ensure_array_like(pages.links);
  $$payload.out += `<nav id="navbar" class="bg-cream-500 z-10 w-full"><div class="flex justify-between p-5 mx-3"><a${attr("href", "/")}><img id="logo"${attr("src", CakeDungeonLogo)} alt="Faisal Logo" title="Cake Dungeon Online Store" class="rounded-full w-10 h-10"></a> <div class="block self-center lg:hidden"><button id="mobile-menu-button" class="text-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-50"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg></button></div> <ul class="hidden lg:flex space-x-6"><!--[-->`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const link = each_array[$$index];
    $$payload.out += `<li class="list-none self-center"><a${attr("href", `${link.url}`)} class="link"><span class="nav-text font-bodoni font-semibold text-md text-gray-50 hover:text-brown-700 transition-all duration-300 ease-in-out"${attr("title", link.title)}>${escape_html(link.title)}</span></a></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div id="mobile-menu" class="lg:hidden"><ul class="flex flex-col space-y-4 p-5"><!--[-->`;
  for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
    const link = each_array_1[$$index_1];
    $$payload.out += `<li class="list-none"><a${attr("href", `${link.url}`)} class="link"><span class="nav-text font-bodoni font-semibold text-md text-gray-50 hover:text-brown-700 transition-all duration-300 ease-in-out"${attr("title", link.title)}>${escape_html(link.title)}</span></a></li>`;
  }
  $$payload.out += `<!--]--></ul></div></nav>`;
  pop();
}
function Footer($$payload) {
  Section($$payload, {
    bgColor: "bg-cream-900",
    fontFamily: "font-bodoni",
    responsiveDesign: true,
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<div class="py-10 px-6 md:py-12 md:px-8"><div class="grid grid-rows-3 grid-flow-col gap-8 md:gap-16"><div class="flex flex-col p-2 space-y-6 justify-center items-center md:justify-between md:flex-row"><a${attr("href", "/")}><img id="logo"${attr("src", CakeDungeonLogo)} alt="Faisal Logo" title="Cake Dungeon Online Store" class="rounded-full w-[5rem] h-[5rem]"></a> <h1 class="text-2xl font-semibold text-gray-50 text-center md:text-3xl md:text-end lg:text-4xl lg:text-end">#Taste Better, Heart More Comfortable</h1></div> <div class="grid grid-cols-1 gap-8 p-3 md:grid-cols-2 md:gap-10 lg:gap-12 lg:grid-cols-4"><div class="flex flex-col space-y-6 font-lato"><h1 class="text-2xl font-semibold uppercase text-gray-50">Social Media</h1> <div class="flex space-x-5"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-instagram w-[1.5rem] h-[1.5rem] text-gray-50 self-center" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-threads w-[1.5rem] h-[1.5rem] text-gray-50 self-center" viewBox="0 0 16 16"><path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook w-[1.5rem] h-[1.5rem] text-gray-50 self-center" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter-x w-[1.5rem] h-[1.5rem] text-gray-50 self-center" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg></div></div> <div class="flex flex-col space-y-3 font-lato md:space-y-6"><h1 class="text-xl font-semibold uppercase text-gray-50 md:text-2xl">Marketplace</h1> <ul class="space-y-2 text-gray-50"><li class="text-lg"><a${attr("href", "#")} class="font-normal hover:text-cream-200 transition-all duration-300 ease-in-out">Tokopedia</a></li> <li class="text-lg"><a${attr("href", "#")} class="font-normal hover:text-cream-200 transition-all duration-300 ease-in-out">GoFood</a></li> <li class="text-lg"><a${attr("href", "#")} class="font-normal hover:text-cream-200 transition-all duration-300 ease-in-out">Grab Food</a></li> <li class="text-lg"><a${attr("href", "#")} class="font-normal hover:text-cream-200 transition-all duration-300 ease-in-out">Whatsapp</a></li></ul></div> <div class="flex flex-col space-y-3 font-lato md:space-y-6"><h1 class="text-xl font-semibold uppercase text-gray-50 md:text-2xl">Informations</h1> <ul class="space-y-2 text-gray-50"><li class="text-lg"><a${attr("href", "#")} class="font-normal hover:text-cream-200 transition-all duration-300 ease-in-out">Terms &amp; Condition</a></li> <li class="text-lg"><a${attr("href", "#")} class="font-normal hover:text-cream-200 transition-all duration-300 ease-in-out">FAQ &amp; Help</a></li> <li class="text-lg"><a${attr("href", "#")} class="font-normal hover:text-cream-200 transition-all duration-300 ease-in-out">Privacy Policy</a></li> <li class="text-lg"><a${attr("href", "#")} class="font-normal hover:text-cream-200 transition-all duration-300 ease-in-out">About Us</a></li></ul></div> <div class="flex flex-col space-y-3 font-lato md:space-y-6"><h1 class="text-xl font-semibold uppercase text-gray-50 md:text-2xl">Operational Hours</h1> <ul class="space-y-2 text-gray-50"><li class="text-lg font-normal">Monday - Friday: 07:30 - 21:30 (GTM+7)</li> <li class="text-lg font-normal">Saturday - Sunday: 08:00 - 21:00 (GTM+7)</li></ul></div></div> <div class="flex flex-col justify-end items-center font-lato p-3 mt-8 md:flex-row md:justify-between md:items-end md:mt-12"><p class="text-gray-50 text-base order-2 text-center md:text-lg md:order-1 md:text-start">Copyright © 2024 Cake dungeon. All rights reserved.</p> <div class="space-x-5 mb-4 order-1 md:mb-0 md:order-2"><a${attr("href", "#")} class="text-gray-50 text-base font-normal hover:text-cream-200 transition-all duration-300 ease-in-out md:text-lg">Privacy Policy</a> <a${attr("href", "#")} class="text-gray-50 text-base font-normal hover:text-cream-200 transition-all duration-300 ease-in-out md:text-lg">Terms of Use</a></div></div></div></div>`;
    },
    $$slots: { default: true }
  });
}
export {
  Footer as F,
  NavBar as N
};
