(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[1],{222:function(n,o,t){"use strict";t.r(o),t.d(o,"startFocusVisible",(function(){return i}));var e=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],i=function(){var n=[],o=!0,t=document,i=function(o){n.forEach((function(n){return n.classList.remove("ion-focused")})),o.forEach((function(n){return n.classList.add("ion-focused")})),n=o},s=function(){o=!1,i([])};t.addEventListener("keydown",(function(n){(o=e.includes(n.key))||i([])})),t.addEventListener("focusin",(function(n){if(o&&n.composedPath){var t=n.composedPath().filter((function(n){return!!n.classList&&n.classList.contains("ion-focusable")}));i(t)}})),t.addEventListener("focusout",(function(){t.activeElement===t.body&&i([])})),t.addEventListener("touchstart",s),t.addEventListener("mousedown",s)}}}]);
//# sourceMappingURL=1.0c77801d.chunk.js.map