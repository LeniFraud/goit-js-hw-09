const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,n(),d=setInterval(n,1e3)})),t.addEventListener("click",(function(){clearInterval(d),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.1b3cf3b8.js.map
