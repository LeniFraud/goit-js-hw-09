var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector(".form"),u=document.querySelector("button"),{elements:{delay:l,step:f,amount:c}}=i;function d(e,n){return new Promise(((t,o)=>{const r=Math.random()>.3;setTimeout((()=>{r&&t(`✅ Fulfilled promise ${e} in ${n}ms`),o(`❌ Rejected promise ${e} in ${n}ms`)}),n)}))}function a(e){r.Notify.success(e)}function s(e){r.Notify.failure(e)}u.addEventListener("click",(function(e){e.preventDefault();for(let e=1,n=Number(l.value);e<=Number(c.value);e+=1,n+=Number(f.value))d(e,n).then(a).catch(s)}));
//# sourceMappingURL=03-promises.3ca40633.js.map