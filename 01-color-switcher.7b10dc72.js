!function(){var t=null,n={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};n.startBtn.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),n.startBtn.disabled=!0})),n.stopBtn.addEventListener("click",(function(){clearInterval(t),n.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.7b10dc72.js.map
