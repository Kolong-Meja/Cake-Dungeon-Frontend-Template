import { k as attr, l as bind_props, e as pop, m as ensure_array_like, j as escape_html, p as push } from "../../chunks/index2.js";
import { N as NavBar, F as Footer } from "../../chunks/Footer.js";
import { C as CakeDungeonLogo } from "../../chunks/Cake Dungeon-Logo.js";
import { S as Section } from "../../chunks/Section.js";
const Cake = "/_app/immutable/assets/Cake.Bvg2Pn9H.jpg";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  NavBar($$payload);
  $$payload.out += `<!----> <header id="header" class="bg-auto bg-fixed bg-center font-bodoni min-h-screen max-w-full md:bg-cover"><div class="container mx-auto"><div class="py-14 px-10 max-w-full md:py-24 md:px-20"><div class="flex flex-col items-center space-y-20"><img id="logo"${attr("src", CakeDungeonLogo)} alt="cake" class="rounded-full w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem]" loading="lazy"> <div class="flex flex-col justify-center items-center space-y-4"><h1 class="text-6xl font-bold text-gray-50 text-center md:text-7xl lg:text-8xl">Cake Dungeon</h1> <p class="text-xl font-semibold text-gray-50 text-center md:text-2xl lg:text-3xl">󠁐#Explore all cakes flavors</p></div></div></div></div></header>  `;
  Section($$payload, {
    bgColor: "bg-lighter-cream",
    responsiveDesign: true,
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<div class="show-on-scroll py-10 px-6 flex flex-col justify-center items-center h-screen space-y-6 md:flex-row md:space-x-10 md:py-12 md:px-8"><div class="flex flex-col items-center space-y-6 p-3 lg:items-start"><h1 class="text-3xl font-bold text-brown-900 uppercase text-center md:text-4xl lg:text-5xl lg:text-start">Welcome to cake dungeon</h1> <p class="text-xl font-normal leading-relaxed text-center text-brown-900 md:text-2xl lg:text-start">Indulge in a delightful journey where every bite is an experience to savor. Welcome to a
				haven for cake enthusiasts, where exquisite flavors and delectable treats await you. Meet a
				community of fellow cake lovers, eager to share in the joy of every mouthful. Embark on this
				sweet adventure and let your taste buds revel in the richness of our creations. Enjoy the
				journey and stay blissfully satisfied.</p> <a${attr("href", "#")} class="p-2.5 text-xs font-medium text-white bg-brown-400 rounded-full hover:bg-brown-600 focus:ring-4 focus:outline-none focus:ring-brown-400 transition-all duration-300 ease-in-out md:rounded-lg md:text-sm md:p-3"><span class="font-bodoni text-gray-50 text-lg text-center">Start Explore</span></a></div> <img${attr("src", Cake)} alt="cake" class="hidden rounded-lg w-[36rem] h-[36rem] lg:block" loading="lazy"></div> <div class="show-on-scroll py-10 px-6 md:py-12 md:px-8"></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->  `;
  Section($$payload, {
    bgColor: "bg-lighter-cream",
    responsiveDesign: true,
    children: ($$payload2, $$slotProps) => {
      const each_array = ensure_array_like(data.categories);
      $$payload2.out += `<div class="show-on-scroll flex flex-col justify-center items-center py-10 px-6 space-y-8 md:space-y-12 md:py-12 md:px-8 lg:space-y-16"><h1 class="text-3xl font-bold text-brown-900 uppercase text-center md:text-4xl lg:text-5xl">Categories choices</h1> <div class="grid grid-rows-3 grid-flow-col gap-4 md:gap-6 lg:gap-8 lg:grid-rows-1 lg:grid-cols-3 lg:grid-flow-row"><!--[-->`;
      for (let $$index = 0; $$index < each_array.length; $$index++) {
        const category = each_array[$$index];
        $$payload2.out += `<div class="max-w-xs h-full bg-brown-50 bg-center border-0 rounded-lg md:max-w-md"><img${attr("src", category.image)}${attr("alt", category.name)} loading="lazy"> <div class="p-5"><a${attr("href", "#")}><h5 class="mb-2 text-lg font-bold tracking-tight text-brown-900 uppercase md:text-xl lg:text-2xl">${escape_html(category.title)}</h5></a> <p class="mb-3 font-normal text-brown-900">Cake Dungeon offers <span class="font-bold underline">${escape_html(category.title)}</span> variants
							that are unique and delicious to your taste buds. What are you waiting for? Come on, order
							now!</p> <a${attr("href", "#")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-brown-50 bg-brown-400 rounded-lg hover:bg-cocoa focus:ring-4 focus:outline-none focus:ring-brown-400 transition-all duration-300 ease-in-out">Order Now <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div></div>`;
      }
      $$payload2.out += `<!--]--></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->  `;
  Section($$payload, {
    bgColor: "bg-lighter-cream",
    fontFamily: "font-lato",
    responsiveDesign: true,
    children: ($$payload2, $$slotProps) => {
      const each_array_1 = ensure_array_like(data.cakes);
      $$payload2.out += `<div class="show-on-scroll py-10 px-6 flex flex-col mx-auto space-y-6 justify-center h-screen carousel md:space-y-10 md:py-12 md:px-8"><h1 class="text-brown-900 font-bodoni font-bold text-3xl uppercase text-center md:text-4xl lg:text-5xl">Our Best Cakes</h1> <div class="flex flex-row items-center justify-center gap-2 md:gap-4"><div class="cursor-pointer carousel-left-btn"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-circle-fill w-[2rem] h-[2rem] text-brown-400 md:w-[2.5rem] md:h-[2.5rem] lg:w-[3rem] lg:h-[3rem]" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"></path></svg></div> <div class="flex flex-row max-w-full h-full rounded-lg overflow-x-hidden carousel-viewport"><!--[-->`;
      for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
        const cake = each_array_1[$$index_1];
        $$payload2.out += `<div class="flex flex-col justify-center items-center w-full p-2 gap-2 shrink-0 text-center md:w-6/12 md:p-3 md:gap-3 lg:w-4/12 lg:p-4 lg:gap-4"><img${attr("src", cake.image)} alt="chocolate" class="w-56 h-56 md:w-64 md:h-64 md:rounded-full" loading="lazy"> <span class="text-lg font-bold text-brown-900 md:text-xl lg:text-xl">${escape_html(cake.name)}</span> <span class="text-2xl font-normal text-brown-900 md:text-3xl lg:text-3xl">${escape_html(new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(cake.price))}</span></div>`;
      }
      $$payload2.out += `<!--]--></div> <div class="cursor-pointer carousel-right-btn"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle-fill w-[2rem] h-[2rem] text-brown-400 md:w-[2.5rem] md:h-[2.5rem] lg:w-[3rem] lg:h-[3rem]" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"></path></svg></div></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->  `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
