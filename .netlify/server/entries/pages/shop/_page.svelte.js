import { n as rest_props, p as push, s as setContext, v as value_or_fallback, o as element, f as slot, q as spread_attributes, l as bind_props, e as pop, t as sanitize_props, g as getContext, w as copy_payload, x as assign_payload, y as spread_props, k as attr, z as sanitize_slots, A as stringify, j as escape_html, m as ensure_array_like } from "../../../chunks/index2.js";
import { S as Section } from "../../../chunks/Section.js";
import { twMerge, twJoin } from "tailwind-merge";
import { d as default_slot } from "../../../chunks/misc.js";
import * as dom from "@floating-ui/dom";
import { w as writable } from "../../../chunks/index.js";
const bgColors = {
  gray: "bg-gray-50 dark:bg-gray-800",
  red: "bg-red-50 dark:bg-gray-800",
  yellow: "bg-yellow-50 dark:bg-gray-800 ",
  green: "bg-green-50 dark:bg-gray-800 ",
  indigo: "bg-indigo-50 dark:bg-gray-800 ",
  purple: "bg-purple-50 dark:bg-gray-800 ",
  pink: "bg-pink-50 dark:bg-gray-800 ",
  blue: "bg-blue-50 dark:bg-gray-800 ",
  light: "bg-gray-50 dark:bg-gray-700",
  dark: "bg-gray-50 dark:bg-gray-800",
  default: "bg-white dark:bg-gray-800",
  dropdown: "bg-white dark:bg-gray-700",
  navbar: "bg-white dark:bg-gray-900",
  navbarUl: "bg-gray-50 dark:bg-gray-800",
  form: "bg-gray-50 dark:bg-gray-700",
  primary: "bg-primary-50 dark:bg-gray-800 ",
  orange: "bg-orange-50 dark:bg-orange-800",
  none: ""
};
function Frame($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "node",
    "use",
    "options",
    "role",
    "transition",
    "params",
    "open"
  ]);
  push();
  const noop = () => {
  };
  setContext("background", true);
  let tag = value_or_fallback($$props["tag"], () => $$restProps.href ? "a" : "div");
  let color = value_or_fallback($$props["color"], () => "default");
  let rounded = value_or_fallback($$props["rounded"], () => false);
  let border = value_or_fallback($$props["border"], () => false);
  let shadow = value_or_fallback($$props["shadow"], () => false);
  let node = value_or_fallback($$props["node"], () => void 0);
  let use = value_or_fallback($$props["use"], () => noop);
  let options = value_or_fallback($$props["options"], () => ({}));
  let role = value_or_fallback($$props["role"], () => void 0);
  let transition = value_or_fallback($$props["transition"], () => void 0);
  let params = value_or_fallback($$props["params"], () => ({}));
  let open = value_or_fallback($$props["open"], () => true);
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  color = color ?? "default";
  setContext("color", color);
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$sanitized_props.class);
  if (transition && open) {
    $$payload.out += "<!--[-->";
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes({ role, ...$$restProps, class: divClass })}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, default_slot($$props), {}, null);
        $$payload.out += `<!---->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
    if (open) {
      $$payload.out += "<!--[-->";
      element(
        $$payload,
        tag,
        () => {
          $$payload.out += `${spread_attributes({ role, ...$$restProps, class: divClass })}`;
        },
        () => {
          $$payload.out += `<!---->`;
          slot($$payload, default_slot($$props), {}, null);
          $$payload.out += `<!---->`;
        }
      );
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    tag,
    color,
    rounded,
    border,
    shadow,
    node,
    use,
    options,
    role,
    transition,
    params,
    open
  });
  pop();
}
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "pill",
    "outline",
    "size",
    "href",
    "type",
    "color",
    "shadow",
    "tag",
    "checked",
    "disabled"
  ]);
  push();
  const group = getContext("group");
  let pill = value_or_fallback($$props["pill"], () => false);
  let outline = value_or_fallback($$props["outline"], () => false);
  let size = value_or_fallback($$props["size"], () => group ? "sm" : "md");
  let href = value_or_fallback($$props["href"], () => void 0);
  let type = value_or_fallback($$props["type"], () => "button");
  let color = value_or_fallback($$props["color"], () => group ? outline ? "dark" : "alternative" : "primary");
  let shadow = value_or_fallback($$props["shadow"], () => false);
  let tag = value_or_fallback($$props["tag"], () => "button");
  let checked = value_or_fallback($$props["checked"], () => void 0);
  let disabled = value_or_fallback($$props["disabled"], () => false);
  const colorClasses = {
    alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700",
    blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
    purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
    red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
    none: ""
  };
  const colorCheckedClasses = {
    alternative: "text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",
    blue: "text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",
    dark: "text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",
    green: "text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",
    light: "text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",
    primary: "text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",
    purple: "text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",
    red: "text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",
    yellow: "text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",
    none: ""
  };
  const coloredFocusClasses = {
    alternative: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    blue: "focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
    dark: "focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
    green: "focus-within:ring-green-300 dark:focus-within:ring-green-800",
    light: "focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
    primary: "focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
    purple: "focus-within:ring-purple-300 dark:focus-within:ring-purple-900",
    red: "focus-within:ring-red-300 dark:focus-within:ring-red-900",
    yellow: "focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
    none: ""
  };
  const coloredShadowClasses = {
    alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    light: "shadow-gray-500/50 dark:shadow-gray-800/80",
    primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
    none: ""
  };
  const outlineClasses = {
    alternative: "text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
    primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
    none: ""
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  buttonClass = twMerge("text-center font-medium", group ? "focus-within:ring-2" : "focus-within:ring-4", group && "focus-within:z-10", group || "focus-within:outline-none", "inline-flex items-center justify-center " + sizeClasses[size], outline && checked && "border dark:border-gray-900", outline && checked && colorCheckedClasses[color], outline && !checked && outlineClasses[color], !outline && checked && colorCheckedClasses[color], !outline && !checked && colorClasses[color], color === "alternative" && (group && !checked ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-600"), outline && color === "dark" && (group ? checked ? "bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600" : "dark:text-white border-gray-800 dark:border-white" : "dark:text-gray-400 dark:border-gray-700"), coloredFocusClasses[color], hasBorder() && group && "[&:not(:first-child)]:-ms-px", group ? pill && "first:rounded-s-full last:rounded-e-full" || "first:rounded-s-lg last:rounded-e-lg" : pill && "rounded-full" || "rounded-lg", shadow && "shadow-lg", shadow && coloredShadowClasses[color], disabled && "cursor-not-allowed opacity-50", $$sanitized_props.class);
  if (href && !disabled) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      href,
      ...$$restProps,
      class: buttonClass,
      role: "button"
    })}><!---->`;
    slot($$payload, default_slot($$props), {}, null);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (tag === "button") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button${spread_attributes({
        type,
        ...$$restProps,
        disabled,
        class: buttonClass
      })}><!---->`;
      slot($$payload, default_slot($$props), {}, null);
      $$payload.out += `<!----></button>`;
    } else {
      $$payload.out += "<!--[!-->";
      element(
        $$payload,
        tag,
        () => {
          $$payload.out += `${spread_attributes({ ...$$restProps, class: buttonClass })}`;
        },
        () => {
          $$payload.out += `<!---->`;
          slot($$payload, default_slot($$props), {}, null);
          $$payload.out += `<!---->`;
        }
      );
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    pill,
    outline,
    size,
    href,
    type,
    color,
    shadow,
    tag,
    checked,
    disabled
  });
  pop();
}
function Popper($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly",
    "middlewares"
  ]);
  push();
  let middleware;
  let activeContent = value_or_fallback($$props["activeContent"], () => false);
  let arrow = value_or_fallback($$props["arrow"], () => true);
  let offset = value_or_fallback($$props["offset"], () => 8);
  let placement = value_or_fallback($$props["placement"], () => "top");
  let trigger = value_or_fallback($$props["trigger"], () => "hover");
  let triggeredBy = value_or_fallback($$props["triggeredBy"], () => void 0);
  let reference = value_or_fallback($$props["reference"], () => void 0);
  let strategy = value_or_fallback($$props["strategy"], () => "absolute");
  let open = value_or_fallback($$props["open"], () => false);
  let yOnly = value_or_fallback($$props["yOnly"], () => false);
  let middlewares = value_or_fallback($$props["middlewares"], () => [dom.flip(), dom.shift()]);
  let referenceEl;
  let floatingEl;
  let arrowEl;
  const px = (n) => n != null ? `${n}px` : "";
  let arrowSide;
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function updatePosition() {
    dom.computePosition(referenceEl, floatingEl, { placement, strategy, middleware }).then(({
      x,
      y,
      middlewareData,
      placement: placement2,
      strategy: strategy2
    }) => {
      floatingEl.style.position = strategy2;
      floatingEl.style.left = yOnly ? "0" : px(x);
      floatingEl.style.top = px(y);
      if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
        arrowEl.style.left = px(middlewareData.arrow.x);
        arrowEl.style.top = px(middlewareData.arrow.y);
        arrowSide = oppositeSideMap[placement2.split("-")[0]];
        arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - ($$sanitized_props.border ? 1 : 0));
      }
    });
  }
  function init(node, _referenceEl) {
    floatingEl = node;
    let cleanup = dom.autoUpdate(_referenceEl, floatingEl, updatePosition);
    return {
      update(_referenceEl2) {
        cleanup();
        cleanup = dom.autoUpdate(_referenceEl2, floatingEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }
  let arrowClass;
  placement && (referenceEl = referenceEl);
  middleware = [
    ...middlewares,
    dom.offset(+offset),
    arrowEl
  ];
  arrowClass = twJoin("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit", $$sanitized_props.border && arrowSide === "bottom" && "border-b border-e", $$sanitized_props.border && arrowSide === "top" && "border-t border-s ", $$sanitized_props.border && arrowSide === "right" && "border-t border-e ", $$sanitized_props.border && arrowSide === "left" && "border-b border-s ");
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (!referenceEl) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (referenceEl) {
      $$payload2.out += "<!--[-->";
      Frame($$payload2, spread_props([
        {
          use: init,
          options: referenceEl,
          get open() {
            return open;
          },
          set open($$value) {
            open = $$value;
            $$settled = false;
          },
          role: "tooltip",
          tabindex: activeContent ? -1 : void 0
        },
        $$restProps,
        {
          children: ($$payload3, $$slotProps) => {
            $$payload3.out += `<!---->`;
            slot($$payload3, default_slot($$props), {}, null);
            $$payload3.out += `<!----> `;
            if (arrow) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<div${attr("class", arrowClass)}></div>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        }
      ]));
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    activeContent,
    arrow,
    offset,
    placement,
    trigger,
    triggeredBy,
    reference,
    strategy,
    open,
    yOnly,
    middlewares
  });
  pop();
}
function Dropdown($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activeUrl",
    "open",
    "containerClass",
    "classContainer",
    "headerClass",
    "classHeader",
    "footerClass",
    "classFooter",
    "activeClass",
    "classActive",
    "arrow",
    "trigger",
    "placement",
    "color",
    "shadow",
    "rounded"
  ]);
  push();
  let containerCls, headerCls, ulCls, footerCls;
  const activeUrlStore = writable("");
  let activeUrl = value_or_fallback($$props["activeUrl"], () => "");
  let open = value_or_fallback($$props["open"], () => false);
  let containerClass = value_or_fallback($$props["containerClass"], () => "divide-y z-50");
  let classContainer = value_or_fallback($$props["classContainer"], () => void 0);
  let headerClass = value_or_fallback($$props["headerClass"], () => "py-1 overflow-hidden rounded-t-lg");
  let classHeader = value_or_fallback($$props["classHeader"], () => void 0);
  let footerClass = value_or_fallback($$props["footerClass"], () => "py-1 overflow-hidden rounded-b-lg");
  let classFooter = value_or_fallback($$props["classFooter"], () => void 0);
  let activeClass = value_or_fallback($$props["activeClass"], () => "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900");
  let classActive = value_or_fallback($$props["classActive"], () => void 0);
  let arrow = value_or_fallback($$props["arrow"], () => false);
  let trigger = value_or_fallback($$props["trigger"], () => "click");
  let placement = value_or_fallback($$props["placement"], () => "bottom");
  let color = value_or_fallback($$props["color"], () => "dropdown");
  let shadow = value_or_fallback($$props["shadow"], () => true);
  let rounded = value_or_fallback($$props["rounded"], () => true);
  let activeCls = twMerge(activeClass, classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  activeUrlStore.set(activeUrl);
  containerCls = twMerge(containerClass, classContainer);
  headerCls = twMerge(headerClass, classHeader);
  ulCls = twMerge("py-1", $$sanitized_props.class);
  footerCls = twMerge(footerClass, classFooter);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Popper($$payload2, spread_props([
      { activeContent: true },
      $$restProps,
      {
        trigger,
        arrow,
        placement,
        shadow,
        rounded,
        color,
        class: containerCls,
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$payload3, $$slotProps) => {
          if ($$slots.header) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div${attr("class", headerCls)}><!---->`;
            slot($$payload3, $$props.$$slots?.["header"], {}, null);
            $$payload3.out += `<!----></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--> <ul${attr("class", ulCls)}><!---->`;
          slot($$payload3, default_slot($$props), {}, null);
          $$payload3.out += `<!----></ul> `;
          if ($$slots.footer) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div${attr("class", footerCls)}><!---->`;
            slot($$payload3, $$props.$$slots?.["footer"], {}, null);
            $$payload3.out += `<!----></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      }
    ]));
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    activeUrl,
    open,
    containerClass,
    classContainer,
    headerClass,
    classHeader,
    footerClass,
    classFooter,
    activeClass,
    classActive,
    arrow,
    trigger,
    placement,
    color,
    shadow,
    rounded
  });
  pop();
}
function Wrapper($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["tag", "show", "use"]);
  let tag = value_or_fallback($$props["tag"], () => "div");
  let show = $$props["show"];
  let use = value_or_fallback($$props["use"], () => () => {
  });
  if (show) {
    $$payload.out += "<!--[-->";
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes({ ...$$restProps })}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, default_slot($$props), {}, null);
        $$payload.out += `<!---->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, default_slot($$props), {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { tag, show, use });
}
function DropdownItem($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["defaultClass", "href", "activeClass"]);
  push();
  let active, liClass;
  let defaultClass = value_or_fallback($$props["defaultClass"], () => "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600");
  let href = value_or_fallback($$props["href"], () => void 0);
  let activeClass = value_or_fallback($$props["activeClass"], () => void 0);
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$sanitized_props.class);
  Wrapper($$payload, {
    tag: "li",
    show: wrap,
    use: init,
    children: ($$payload2, $$slotProps) => {
      const $$tag = href ? "a" : "button";
      element(
        $$payload2,
        $$tag,
        () => {
          $$payload2.out += `${spread_attributes({
            href,
            type: href ? void 0 : "button",
            role: href ? "link" : "button",
            ...$$restProps,
            class: liClass
          })}`;
        },
        () => {
          $$payload2.out += `<!---->`;
          slot($$payload2, default_slot($$props), {}, null);
          $$payload2.out += `<!---->`;
        }
      );
    },
    $$slots: { default: true }
  });
  bind_props($$props, { defaultClass, href, activeClass });
  pop();
}
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
function Input($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "type",
    "value",
    "size",
    "defaultClass",
    "color",
    "floatClass"
  ]);
  push();
  let _size;
  let type = value_or_fallback($$props["type"], () => "text");
  let value = value_or_fallback($$props["value"], () => void 0);
  let size = value_or_fallback($$props["size"], () => void 0);
  let defaultClass = value_or_fallback($$props["defaultClass"], () => "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right");
  let color = value_or_fallback($$props["color"], () => "base");
  let floatClass = value_or_fallback($$props["floatClass"], () => "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400");
  const borderClasses = {
    base: "border border-gray-300 dark:border-gray-600",
    tinted: "border border-gray-300 dark:border-gray-500",
    green: "border border-green-500 dark:border-green-400",
    red: "border border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "ps-9", md: "ps-10", lg: "ps-11" };
  const rightPadding = { sm: "pe-9", md: "pe-10", lg: "pe-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  _size = size || clampSize(group?.size) || "md";
  {
    const _color = color === "base" && background ? "tinted" : color;
    inputClass = twMerge([
      defaultClass,
      inputPadding[_size],
      $$slots.left && leftPadding[_size] || $$slots.right && rightPadding[_size],
      ringClasses[color],
      colorClasses[_color],
      borderClasses[_color],
      textSizes[_size],
      group || "rounded-lg",
      group && "first:rounded-s-lg last:rounded-e-lg",
      group && "[&:not(:first-child)]:-ms-px",
      $$sanitized_props.class
    ]);
  }
  Wrapper($$payload, {
    class: "relative w-full",
    show: $$slots.left || $$slots.right,
    children: ($$payload2, $$slotProps) => {
      if ($$slots.left) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div${attr("class", `${stringify(twMerge(floatClass, $$sanitized_props.classLeft))} start-0 ps-2.5 pointer-events-none`)}><!---->`;
        slot($$payload2, $$props.$$slots?.["left"], {}, null);
        $$payload2.out += `<!----></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> <!---->`;
      slot(
        $$payload2,
        default_slot($$props),
        {
          get props() {
            return { ...$$restProps, class: inputClass };
          }
        },
        () => {
          $$payload2.out += `<input${spread_attributes({
            ...$$restProps,
            value,
            ...{ type },
            class: inputClass
          })}>`;
        }
      );
      $$payload2.out += `<!----> `;
      if ($$slots.right) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div${attr("class", `${stringify(twMerge(floatClass, $$sanitized_props.classRight))} end-0 pe-2.5`)}><!---->`;
        slot($$payload2, $$props.$$slots?.["right"], {}, null);
        $$payload2.out += `<!----></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, {
    type,
    value,
    size,
    defaultClass,
    color,
    floatClass
  });
  pop();
}
function ChevronDownOutline($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "size",
    "role",
    "color",
    "withEvents",
    "title",
    "strokeWidth",
    "desc",
    "ariaLabel"
  ]);
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = value_or_fallback($$props["size"], () => ctx.size || "md");
  let role = value_or_fallback($$props["role"], () => ctx.role || "img");
  let color = value_or_fallback($$props["color"], () => ctx.color || "currentColor");
  let withEvents = value_or_fallback($$props["withEvents"], () => ctx.withEvents || false);
  let title = value_or_fallback($$props["title"], () => ({}));
  let strokeWidth = value_or_fallback($$props["strokeWidth"], () => ctx.strokeWidth || "2");
  let desc = value_or_fallback($$props["desc"], () => ({}));
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let ariaLabel = value_or_fallback($$props["ariaLabel"], () => "chevron down outline");
  if (title.id || desc.id) {
    hasDescription = true;
  } else {
    hasDescription = false;
  }
  if (withEvents) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<svg${spread_attributes(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color,
        ...$$restProps,
        class: twMerge("shrink-0", sizes[size ?? "md"], $$sanitized_props.class),
        role,
        "aria-label": ariaLabel,
        "aria-describedby": hasDescription ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      void 0,
      3
    )}>`;
    if (title.id && title.title) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
    if (desc.id && desc.desc) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="m8 10 4 4 4-4"></path></svg>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg${spread_attributes(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color,
        ...$$restProps,
        class: twMerge("shrink-0", sizes[size ?? "md"], $$sanitized_props.class),
        role,
        "aria-label": ariaLabel,
        "aria-describedby": hasDescription ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      void 0,
      3
    )}>`;
    if (title.id && title.title) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
    if (desc.id && desc.desc) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="m8 10 4 4 4-4"></path></svg>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    size,
    role,
    color,
    withEvents,
    title,
    strokeWidth,
    desc,
    ariaLabel
  });
  pop();
}
function SearchOutline($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "size",
    "role",
    "color",
    "withEvents",
    "title",
    "strokeWidth",
    "desc",
    "ariaLabel"
  ]);
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = value_or_fallback($$props["size"], () => ctx.size || "md");
  let role = value_or_fallback($$props["role"], () => ctx.role || "img");
  let color = value_or_fallback($$props["color"], () => ctx.color || "currentColor");
  let withEvents = value_or_fallback($$props["withEvents"], () => ctx.withEvents || false);
  let title = value_or_fallback($$props["title"], () => ({}));
  let strokeWidth = value_or_fallback($$props["strokeWidth"], () => ctx.strokeWidth || "2");
  let desc = value_or_fallback($$props["desc"], () => ({}));
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let ariaLabel = value_or_fallback($$props["ariaLabel"], () => "search outline");
  if (title.id || desc.id) {
    hasDescription = true;
  } else {
    hasDescription = false;
  }
  if (withEvents) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<svg${spread_attributes(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color,
        ...$$restProps,
        class: twMerge("shrink-0", sizes[size ?? "md"], $$sanitized_props.class),
        role,
        "aria-label": ariaLabel,
        "aria-describedby": hasDescription ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      void 0,
      3
    )}>`;
    if (title.id && title.title) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
    if (desc.id && desc.desc) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round"${attr("stroke-width", strokeWidth)} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path></svg>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg${spread_attributes(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color,
        ...$$restProps,
        class: twMerge("shrink-0", sizes[size ?? "md"], $$sanitized_props.class),
        role,
        "aria-label": ariaLabel,
        "aria-describedby": hasDescription ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      void 0,
      3
    )}>`;
    if (title.id && title.title) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
    if (desc.id && desc.desc) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round"${attr("stroke-width", strokeWidth)} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path></svg>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    size,
    role,
    color,
    withEvents,
    title,
    strokeWidth,
    desc,
    ariaLabel
  });
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let defaultItemsClass = "grid grid-cols-1 grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full";
  let defaultCardClass = "flex flex-col items-start bg-gray-50 border border-gray-200";
  let defaultCardImageClass = "w-full h-64 object-cover p-2.5";
  Section($$payload, {
    bgColor: "bg-lighter-cream",
    fontFamily: "font-lato",
    responsiveDesign: true,
    children: ($$payload2, $$slotProps) => {
      const each_array = ensure_array_like(data.cakes);
      $$payload2.out += `<div class="flex flex-col items-center py-12 px-8 space-y-12"><div class="flex flex-col justify-center items-center space-y-3"><h1 class="text-brown-900 text-2xl font-bold uppercase text-center md:text-3xl lg:text-4xl">All Products in our Shop</h1> <p class="text-brown-900 text-base text-center font-normal leading-relaxed md:text-lg lg:text-xl">Integer cursus molestie neque vel commodo. Maecenas a pulvinar erat, nec dictum mi. Cras sed
				dolor finibus, imperdiet odio sed, molestie nunc. Morbi vel tincidunt magna, a congue lorem.
				Phasellus accumsan turpis vitae mi rutrum lobortis. Mauris faucibus fringilla enim</p></div> <div class="w-full flex flex-col justify-between items-center space-y-4 md:flex-row md:space-y-0"><div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-full md:w-auto"><form action="/search" class="flex-1 w-full md:w-96"><div class="relative"><div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">`;
      SearchOutline($$payload2, { class: "w-4 h-4" });
      $$payload2.out += `<!----></div> `;
      Input($$payload2, {
        id: "search-navbar",
        color: "base",
        class: "pl-10 w-full",
        placeholder: "Search cake..."
      });
      $$payload2.out += `<!----></div></form> `;
      Button($$payload2, {
        color: "primary",
        class: "text-base font-bold text-gray-50",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!---->Sort By`;
          ChevronDownOutline($$payload3, { class: "pl-2 text-gray-50", size: "lg" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Dropdown($$payload2, {
        class: "w-48 overflow-y-auto py-1 h-48",
        children: ($$payload3, $$slotProps2) => {
          DropdownItem($$payload3, {
            class: "flex items-center text-base font-normal gap-2",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<span>Featured</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownItem($$payload3, {
            class: "flex items-center text-base font-normal gap-2",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<span>Newest Arrivals</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownItem($$payload3, {
            class: "flex items-center text-base font-normal gap-2",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<span>Lower Price</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownItem($$payload3, {
            class: "flex items-center text-base font-normal gap-2",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<span>Highest Price</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownItem($$payload3, {
            class: "flex items-center text-base font-normal gap-2",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<span>Best Selling</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownItem($$payload3, {
            class: "flex items-center text-base font-normal gap-2",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<span>Alphabetically, A-Z</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownItem($$payload3, {
            class: "flex items-center text-base font-normal gap-2",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<span>Alphabetically, Z-A</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div class="hidden md:flex md:flex-row md:space-x-4"><span class="text-gray-900 text-base font-semibold">View As</span> <button id="list-view-btn" class="outline-none text-gray-300 focus:outline-none focus:ring-0 focus:text-cream-700 transition-all duration-300 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list-ul w-6 h-6 self-center" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path></svg></button> <button id="grid-view-btn" class="outline-none text-gray-300 focus:outline-none focus:ring-0 focus:text-cream-700 transition-all duration-300 ease-in-out"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-grid w-6 h-6 self-center" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"></path></svg></button></div></div> <div${attr("class", defaultItemsClass)}><!--[-->`;
      for (let $$index = 0; $$index < each_array.length; $$index++) {
        const cake = each_array[$$index];
        $$payload2.out += `<div${attr("class", defaultCardClass)}><img${attr("src", cake.image)}${attr("alt", cake.name)}${attr("class", defaultCardImageClass)} loading="lazy"> <div class="flex flex-col leading-normal p-3 space-y-4"><div class="flex flex-col space-y-2 w-full"><a${attr("href", "#")}><p class="text-lg font-normal tracking-tight text-brown-900">${escape_html(cake.name)}</p></a> <p class="text-brown-900 text-xl font-bold">${escape_html(new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(cake.price))}</p></div> <button class="bg-cream-700 text-gray-50 text-base font-bold rounded-lg p-2 w-6.12">Add to Cart</button></div></div>`;
      }
      $$payload2.out += `<!--]--></div></div>`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
