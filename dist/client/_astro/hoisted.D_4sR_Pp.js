import"https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";import"https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js";const a=typeof localStorage<"u"&&localStorage.getItem("theme")?localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a==="light"?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark");window.localStorage.setItem("theme",a);const d=()=>{const e=document.documentElement;e.classList.toggle("dark");const t=e.classList.contains("dark");localStorage.setItem("theme",t?"dark":"light")};document.getElementById("themeToggle").addEventListener("click",d);const m="&api_key=wmbjfv0ybbzjsaceaojxrbm9aaelzzq2bbe7mgws",u=async e=>{const t=`${m}`,c=`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${e}`)}&api_key=${t}`;try{const n=await fetch(c);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const s=await n.json();if(s.items&&s.items.length>0)return s.items;throw new Error("No videos found in the feed.")}catch(n){throw console.error("Error fetching videos:",n),n}},h="UC36_js-krsAHAEAWpEDhHtw",g=(e,t)=>{const i=e.getAttribute("vnum"),s=`https://youtube.com/embed/${t[i].link.split("v=")[1]}?controls=1&autoplay=1`;e.setAttribute("src",s)},p=async e=>{try{const t=await u(h);g(e,t)}catch(t){console.error("Error loading video:",t)}},r=document.getElementsByClassName("latestVideoEmbed");r.length>0&&p(r[0]);const o=document.querySelector(".kofi__tooltip"),l=document.querySelector(".kofi__link");l.addEventListener("mouseover",e=>{o.classList.add("tooltip__animation"),o.textContent="Invítame un café ❤️"});l.addEventListener("mouseleave",e=>{o.classList.remove("tooltip__animation"),o.textContent=""});window.onscroll=function(){v()};function v(){document.body.scrollTop>3||document.documentElement.scrollTop>3?(o.classList.add("tooltip__animation"),o.textContent="Invítame un café ❤️"):(o.textContent="Será la próxima Supongo 🥹",setTimeout(()=>{o.textContent="",o.classList.remove("tooltip__animation")},4e3))}
