!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},c={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in c){var t=c[e];delete c[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){c[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,c;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return c}),(function(e){return c=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},c=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var c={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=c[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),c[e]=t),t}})),o("iE7OH").register(JSON.parse('{"ctFO8":"favorite-cocktails.e8dbe93d.js","ee16w":"sprite.bd4c784d.svg","jqc6J":"index.1dbdcc4f.js"}'));var i,a=o("cexwo");i=o("aNJCr").getBundleURL("ctFO8")+o("iE7OH").resolve("ee16w");var l=document.querySelector(".cocktails-list"),s="favoriteCocktails",d=JSON.parse(localStorage.getItem(s)),u=document.querySelector(".empty-search");function f(e,n){var r=e.map((function(e){return r=(n=e)._id,c=n.drinkThumb,o=n.drink,a=n.description,'<li class="cocktails-item" id="'.concat(r,'">\n                    <img class="cocktails-image" src="').concat(c,'" alt="foto ').concat(o,'" />\n                    <h3 class="cocktails-name">').concat(o,'</h3>\n                    <p class="cocktails-description">').concat(a,'</p>\n                    <div class="cocktails-buttons">\n                    <button class="cocktails-button" data-id="').concat(r,'">learn more</button>\n                    <button class="cocktails-button-favorite trash-btn">\n                    <svg class="icon-trash" width="18" height="18">\n                      <use href="').concat(t(i),'#icon-trash-mobile-white"></use>\n                    </svg>\n                    </button>\n                    </div>\n          </li>');var n,r,c,o,a})).join("");n.innerHTML=r,document.querySelectorAll(".cocktails-button").forEach((function(e){e.addEventListener("click",a.getCardInfo)})),d.length>0&&(u.style.display="none"),0===d.length&&(l.style.display="none",u.style.display="block")}console.log(d),f(d,l),l.addEventListener("click",(function(e){var t=e.target;if(t.classList.contains("trash-btn")){var n=t.closest(".cocktails-item").getAttribute("data-id"),r=d.findIndex((function(e){return e._id===n}));d.splice(r,1),localStorage.setItem(s,JSON.stringify(d)),f(d,l)}}));var h=document.querySelector(".js-burger-list-link"),m=document.querySelector(".burger-dropdown"),g=document.querySelector(".header-list-link-icon"),k=document.querySelector(".js-header-list-link"),y=document.querySelector(".js-header-dropdown"),p=!1;function v(){event.preventDefault(),"block"===m.style.display?m.style.display="none":m.style.display="block"}function b(){y.style.display="none",p=!1}h.addEventListener("click",v),g.addEventListener("click",v),k.addEventListener("click",(function(){event.preventDefault(),p?b():(y.style.display="block",p=!0)})),document.addEventListener("click",(function(e){!p||k.contains(e.target)||y.contains(e.target)||b()}));var S=document.getElementById("switch-theme-slider"),E=document.getElementById("burger-switch-theme-slider"),w=document.querySelector("html");"dark"===localStorage.getItem("theme")&&(w.dataset.theme="dark",S.checked=!0,E.checked=!0),S.onchange=function(){this.checked?(localStorage.setItem("theme","dark"),w.dataset.theme="dark",E.checked=!0):(localStorage.setItem("theme","light"),w.dataset.theme="light",E.checked=!1)},E.onchange=function(){this.checked?(localStorage.setItem("theme","dark"),w.dataset.theme="dark",S.checked=!0):(localStorage.setItem("theme","light"),w.dataset.theme="light",S.checked=!1)};var q=document.querySelector(".header-open-modal-btn"),L=document.querySelector(".burger-close-modal-btn"),x=document.querySelector(".burger-backdrop"),O=document.querySelector(".burger-modal");function _(){x.style.display="none",O.style.display="none"}document.querySelector(".js-burger-list-link").addEventListener("click",(function(e){e.preventDefault()})),q.addEventListener("click",(function(){x.style.display="block",O.style.display="block"})),L.addEventListener("click",_),document.addEventListener("keydown",(function(e){"Escape"===e.key&&_()}))}();
//# sourceMappingURL=favorite-cocktails.e8dbe93d.js.map