import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_CYIZs9jS.mjs';
import 'kleur/colors';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const SITE_TITLE = "SofiDev | Links";
const SITE_DESCRIPTION = "Frontend Developer. JavaScript Specialist";

const $$Astro = createAstro("https://links.itssofi.dev/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "../img/Logo1.png" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/../../img/gatita.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta http-equiv="Permissions-Policy" content="interest-cohort=()"><!-- Font preloads --><!-- Google fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Fira+Code:wght@400;600&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- css librerias/ cdn --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer"><!-- Iconify CDN -->`;
}, "/home/sofidev/laboratorio/sofidev-links/src/components/BaseHead.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/home/sofidev/laboratorio/sofidev-links/src/layouts/Layout.astro", void 0);

const userData = [
  {
    userName: "Sofia Osorio",
    userDesc: "Web Developer",
    userPic: "https://github.com/SofiDevO.png",
    userPicDark: "/img/sofi_funko.jpg",
  },
];

const socialLinks = [
  {
    socialName: "LinkedIn",
    socialUl: "https://www.linkedin.com/in/sofidev/",
    socialIcon: "mingcute:linkedin-fill",
  },
  {
    socialName: "GitHub",
    socialUl: "https://github.com/SofiDevO",
    socialIcon: "fa6-brands:github-alt",
  },
  {
    socialName: "Instagram",
    socialUl: "https://www.instagram.com/itssofidev/",
    socialIcon: "ri:instagram-fill",
  },
  {
    socialName: "Twich",
    socialUl: "https://www.twitch.tv/sofidev",
    socialIcon: "ph:twitch-logo-duotone",
  },
  {
    socialName: "X",
    socialUl: "https://twitter.com/itssofidev",
    socialIcon: "prime:twitter",
  },
];

const userLinks = [
  {
    title: "Mi Portfolio",
    link: "https://itssofi.dev/",
    icon: "ant-design:code-filled",
  },
  {
    title: "Mi Blog",
    link: "https://itssofi.dev/blog",
    icon: "carbon:blog",
  },
  {
    title: "Canal de SofiDev",
    link: "https://www.youtube.com/channel/UC36_js-krsAHAEAWpEDhHtw",
    icon: "mingcute:youtube-fill",
  },

  {
    title: "Únete a Discord",
    link: "https://discord.gg/VYDj8pvfE4",
    icon: "ic:outline-discord",
  },
  {
    title: "MERCH",
    link: "https://sofidev.myspreadshop.com/",
    icon: "map:clothing-store",
  },
];

const $$Boton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="botones" data-astro-cid-ijvpcczv> ${userLinks.map((data) => renderTemplate`<a${addAttribute(data.link, "href")} class="boton" data-astro-prefetch target="_blank" rel="nofollow noreferrer noopener" data-astro-cid-ijvpcczv> ${" "} ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-ijvpcczv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": data.icon, "width": "25", "height": "25", "class": "iconify", "data-astro-cid-ijvpcczv": true })} <span data-astro-cid-ijvpcczv>${data.title}</span> ` })} </a>`)} </section> `;
}, "/home/sofidev/laboratorio/sofidev-links/src/components/Boton.astro", void 0);

const $$Kofi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<article class="kofi__container" data-astro-cid-foz7otzg> <a class="kofi__link" href="https://ko-fi.com/S6S5IFKIG" target="_blank" rel="noopener noreferrer" data-astro-cid-foz7otzg> <img class="kofi__img" src="/img/kofi.webp" alt="kofi-button" data-astro-cid-foz7otzg> </a> <span class="kofi__tooltip" data-astro-cid-foz7otzg></span> </article> `;
}, "/home/sofidev/laboratorio/sofidev-links/src/components/Kofi.astro", void 0);

const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<header class="header" data-astro-cid-oemx5le4> <button id="themeToggle" data-astro-cid-oemx5le4> <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-oemx5le4> <path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-oemx5le4></path> <g class="moon" fill="#00ffee" fill-opacity="0" data-astro-cid-oemx5le4><path class="moon" d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z" data-astro-cid-oemx5le4><animate class="moon" id="lineMdMoonLoop0" fill="freeze" attributeName="fill-opacity" begin="0.7s;lineMdMoonLoop0.begin+6s" dur="0.4s" values="0;1" data-astro-cid-oemx5le4></animate><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+2.2s" dur="0.4s" values="1;0" data-astro-cid-oemx5le4></animate></path><path class="moon" d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z" data-astro-cid-oemx5le4><animate class="moon" fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+3s" dur="0.4s" values="0;1" data-astro-cid-oemx5le4></animate><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+5.2s" dur="0.4s" values="1;0" data-astro-cid-oemx5le4></animate></path><path class="moon" d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z" data-astro-cid-oemx5le4><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+0.4s" dur="0.4s" values="0;1" data-astro-cid-oemx5le4></animate><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+2.8s" dur="0.4s" values="1;0" data-astro-cid-oemx5le4></animate></path><path class="moon" d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z" data-astro-cid-oemx5le4><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+3.4s" dur="0.4s" values="0;1" data-astro-cid-oemx5le4></animate><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+5.6s" dur="0.4s" values="1;0" data-astro-cid-oemx5le4></animate></path></g><path class="moon" fill="none" stroke="#00ffee" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" data-astro-cid-oemx5le4><animate class="moon" fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" data-astro-cid-oemx5le4></animate></path> </svg> ${renderComponent($$result, "Kofi", $$Kofi, { "data-astro-cid-oemx5le4": true })} </button>  </header>`;
}, "/home/sofidev/laboratorio/sofidev-links/src/components/ThemeIcon.astro", void 0);

const $$LatestYoutube = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<div class="vid__container" data-astro-cid-uwx3sass> <h2 class="vid__title" data-astro-cid-uwx3sass>≥ My latest Video ❤️</h2> <img class="heart__loader" src="./img/loadcat.gif" alt="loader" data-astro-cid-uwx3sass> <iframe class="latestVideoEmbed" vnum="0" frameborder="0" allowfullscreen id="ytchannel" data-astro-cid-uwx3sass></iframe> </div> `;
}, "/home/sofidev/laboratorio/sofidev-links/src/components/LatestYoutube.astro", void 0);

const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="social" data-astro-cid-zamss57n> ${socialLinks.map((icono) => renderTemplate`<a class="social__btn"${addAttribute(icono.socialUl, "href")} target="_blank" rel="nofollow noreferrer noopener" data-astro-prefetch data-astro-cid-zamss57n> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": icono.socialIcon, "width": "25", "height": "25", "class": "iconify", "data-astro-cid-zamss57n": true })} <span data-astro-cid-zamss57n>${icono.socialName}</span> </a>`)} </div> `;
}, "/home/sofidev/laboratorio/sofidev-links/src/components/SocialLinks.astro", void 0);

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="profile__banner" data-astro-cid-b3uuc2c6> <div id="img__container" class="img__container photo" data-astro-cid-b3uuc2c6></div> ${userData.map((data) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-b3uuc2c6": true }, { "default": ($$result2) => renderTemplate` <h1 data-astro-cid-b3uuc2c6>${data.userName}</h1> <p data-astro-cid-b3uuc2c6>${data.userDesc}</p> ` })}`)} ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "data-astro-cid-b3uuc2c6": true })} </div> `;
}, "/home/sofidev/laboratorio/sofidev-links/src/components/Profile.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ThemeIcon", $$ThemeIcon, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Profile", $$Profile, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Boton", $$Boton, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "LatestYoutube", $$LatestYoutube, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "/home/sofidev/laboratorio/sofidev-links/src/pages/index.astro", void 0);

const $$file = "/home/sofidev/laboratorio/sofidev-links/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
