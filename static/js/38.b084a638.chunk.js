(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[38],{166:function(t,n,r){"use strict";r.r(n),r.d(n,"ion_progress_bar",(function(){return s}));var i=r(24),e=r(3),a=r(225),o=r(226),s=function(){function t(t){Object(i.l)(this,t),this.type="determinate",this.reversed=!1,this.value=0,this.buffer=1}return t.prototype.render=function(){var t,n=this,r=n.color,o=n.type,s=n.reversed,m=n.value,b=n.buffer,u=e.b.getBoolean("_testing"),l=Object(i.e)(this);return Object(i.i)(i.a,{role:"progressbar","aria-valuenow":"determinate"===o?m:null,"aria-valuemin":"0","aria-valuemax":"1",class:Object.assign({},Object(a.a)(r),(t={},t[l]=!0,t["progress-bar-"+o]=!0,t["progress-paused"]=u,t["progress-bar-reversed"]="rtl"===document.dir?!s:s,t))},"indeterminate"===o?c():f(m,b))},Object.defineProperty(t,"style",{get:function(){return':host{--background:rgba(var(--ion-color-primary-rgb,56,128,255),0.2);--progress-background:var(--ion-color-primary,#3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;direction:ltr;overflow:hidden}:host(.ion-color){--progress-background:var(--ion-color-base);--buffer-background:rgba(var(--ion-color-base-rgb),0.2)}:host(.progress-bar-indeterminate){background:var(--buffer-background)}.buffer-circles,.indeterminate-bar-primary,.indeterminate-bar-secondary,.progress,.progress-buffer-bar,.progress-buffer-bar:before,.progress-indeterminate{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.progress,.progress-buffer-bar{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s linear;transition:-webkit-transform .15s linear;transition:transform .15s linear;transition:transform .15s linear,-webkit-transform .15s linear}.progress,.progress-indeterminate{background:var(--progress-background);z-index:2}.progress-buffer-bar{background:#fff;z-index:1}.progress-buffer-bar:before{background:var(--buffer-background);content:""}.indeterminate-bar-primary{top:0;right:0;bottom:0;left:-145.166611%;-webkit-animation:primary-indeterminate-translate 2s linear infinite;animation:primary-indeterminate-translate 2s linear infinite}.indeterminate-bar-primary .progress-indeterminate{-webkit-animation:primary-indeterminate-scale 2s linear infinite;animation:primary-indeterminate-scale 2s linear infinite;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary{top:0;right:0;bottom:0;left:-54.888891%;-webkit-animation:secondary-indeterminate-translate 2s linear infinite;animation:secondary-indeterminate-translate 2s linear infinite}.indeterminate-bar-secondary .progress-indeterminate{-webkit-animation:secondary-indeterminate-scale 2s linear infinite;animation:secondary-indeterminate-scale 2s linear infinite;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles{background:radial-gradient(ellipse at center,var(--buffer-background) 0,var(--buffer-background) 30%,transparent 0) repeat-x 5px;background-size:10px 10px;z-index:0;-webkit-animation:buffering .45s linear infinite;animation:buffering .45s linear infinite}:host(.progress-bar-reversed) .progress,:host(.progress-bar-reversed) .progress-buffer-bar{-webkit-transform-origin:right top;transform-origin:right top}:host(.progress-bar-reversed) .buffer-circles,:host(.progress-bar-reversed) .indeterminate-bar-primary,:host(.progress-bar-reversed) .indeterminate-bar-secondary,:host(.progress-bar-reversed) .progress-indeterminate{animation-direction:reverse}:host(.progress-paused) .buffer-circles,:host(.progress-paused) .indeterminate-bar-primary,:host(.progress-paused) .indeterminate-bar-secondary{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.701732,.495819);animation-timing-function:cubic-bezier(.5,0,.701732,.495819);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.611057%);transform:translateX(200.611057%)}}@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.661479);transform:scaleX(.661479)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.661479);transform:scaleX(.661479)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}to{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.515058,.409685);animation-timing-function:cubic-bezier(.15,0,.515058,.409685);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);-webkit-transform:translateX(37.651913%);transform:translateX(37.651913%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);-webkit-transform:translateX(84.386165%);transform:translateX(84.386165%)}to{-webkit-transform:translateX(160.277782%);transform:translateX(160.277782%)}}@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);-webkit-transform:scaleX(.457104);transform:scaleX(.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);-webkit-transform:scaleX(.457104);transform:scaleX(.457104)}44.15%{-webkit-animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}:host{height:3px}'},enumerable:!0,configurable:!0}),t}(),c=function(){return[Object(i.i)("div",{class:"indeterminate-bar-primary"},Object(i.i)("span",{class:"progress-indeterminate"})),Object(i.i)("div",{class:"indeterminate-bar-secondary"},Object(i.i)("span",{class:"progress-indeterminate"}))]},f=function(t,n){var r=Object(o.c)(0,t,1),e=Object(o.c)(0,n,1);return[Object(i.i)("div",{class:"progress",style:{transform:"scaleX("+r+")"}}),1!==e&&Object(i.i)("div",{class:"buffer-circles"}),Object(i.i)("div",{class:"progress-buffer-bar",style:{transform:"scaleX("+e+")"}})]}},225:function(t,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return o})),r.d(n,"c",(function(){return e})),r.d(n,"d",(function(){return c}));var i=r(2),e=function(t,n){return null!==n.closest(t)},a=function(t){var n;return"string"===typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0},o=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},s=/^[a-z][a-z0-9+\-.]*:/,c=function(t,n,r){return i.a(void 0,void 0,void 0,(function(){var e;return i.c(this,(function(i){return null!=t&&"#"!==t[0]&&!s.test(t)&&(e=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,e.push(t,r)]):[2,!1]}))}))}},226:function(t,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return c})),r.d(n,"c",(function(){return s})),r.d(n,"d",(function(){return u})),r.d(n,"e",(function(){return l})),r.d(n,"f",(function(){return a})),r.d(n,"g",(function(){return e})),r.d(n,"h",(function(){return b})),r.d(n,"i",(function(){return f})),r.d(n,"j",(function(){return m})),r.d(n,"k",(function(){return o}));var i=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},e=function(t){return!!t.shadowRoot&&!!t.attachShadow},a=function(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null},o=function(t,n,r,i,a){if(t||e(n)){var o=n.querySelector("input.aux-input");o||((o=n.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),n.appendChild(o)),o.disabled=a,o.name=r,o.value=i||""}},s=function(t,n,r){return Math.max(t,Math.min(n,r))},c=function(t,n){if(!t){var r="ASSERT: "+n;throw console.error(r),new Error(r)}},f=function(t){return t.timeStamp||Date.now()},m=function(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var r=n[0];return{x:r.clientX,y:r.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},b=function(t){var n="rtl"===document.dir;switch(t){case"start":return n;case"end":return!n;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},u=function(t,n){var r=t._original||t;return{_original:t,emit:l(r.emit.bind(r),n)}},l=function(t,n){var r;return void 0===n&&(n=0),function(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];clearTimeout(r),r=setTimeout.apply(void 0,[t,n].concat(i))}}}}]);
//# sourceMappingURL=38.b084a638.chunk.js.map