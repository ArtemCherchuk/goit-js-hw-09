!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),a=null;e.addEventListener("click",(function(){document.querySelector("button[data-stop]").disabled=!0,a=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.style.backgroundColor=e}),1e3),document.querySelector("button[data-start]").disabled=!0,document.querySelector("button[data-stop]").disabled=!1})),o.addEventListener("click",(function(){clearInterval(a),document.querySelector("button[data-start]").disabled=!1,document.querySelector("button[data-stop]").disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.1a3c8e81.js.map