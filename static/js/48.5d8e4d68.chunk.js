(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[48],{144:function(n,e,t){"use strict";t.r(e),t.d(e,"ion_loading",(function(){return f}));var i=t(2),o=t(18),r=t(3),a=t(10),s=t(12),d=t(207),c=t(209),l=function(n){var e=Object(a.a)(),t=Object(a.a)(),i=Object(a.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),i.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,i])},u=function(n){var e=Object(a.a)(),t=Object(a.a)(),i=Object(a.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.3,0),i.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,i])},p=function(n){var e=Object(a.a)(),t=Object(a.a)(),i=Object(a.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),i.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,i])},m=function(n){var e=Object(a.a)(),t=Object(a.a)(),i=Object(a.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.32,0),i.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,i])},f=function(){function n(n){var e=this;Object(o.l)(this,n),this.presented=!1,this.mode=Object(o.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){e.dismiss(void 0,s.a)},Object(s.e)(this.el),this.didPresent=Object(o.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(o.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(o.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(o.d)(this,"ionLoadingDidDismiss",7)}return n.prototype.componentWillLoad=function(){if(void 0===this.spinner){var n=Object(o.e)(this);this.spinner=r.b.get("loadingSpinner",r.b.get("spinner","ios"===n?"lines":"crescent"))}},n.prototype.present=function(){return i.a(this,void 0,void 0,(function(){var n=this;return i.c(this,(function(e){switch(e.label){case 0:return[4,Object(s.f)(this,"loadingEnter",l,p,void 0)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return n.dismiss()}),this.duration+10)),[2]}}))}))},n.prototype.dismiss=function(n,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.g)(this,n,e,"loadingLeave",u,m)},n.prototype.onDidDismiss=function(){return Object(s.h)(this.el,"ionLoadingDidDismiss")},n.prototype.onWillDismiss=function(){return Object(s.h)(this.el,"ionLoadingWillDismiss")},n.prototype.render=function(){var n,e=this.message,t=this.spinner,i=Object(o.e)(this);return Object(o.i)(o.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign({},Object(d.b)(this.cssClass),(n={},n[i]=!0,n["loading-translucent"]=this.translucent,n))},Object(o.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(o.i)("div",{class:"loading-wrapper",role:"dialog"},t&&Object(o.i)("div",{class:"loading-spinner"},Object(o.i)("ion-spinner",{name:t})),e&&Object(o.i)("div",{class:"loading-content",innerHTML:Object(c.a)(e)})))},Object.defineProperty(n.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"},enumerable:!0,configurable:!0}),n}()},207:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"d",(function(){return d}));var i=t(2),o=function(n,e){return null!==e.closest(n)},r=function(n){var e;return"string"===typeof n&&n.length>0?((e={"ion-color":!0})["ion-color-"+n]=!0,e):void 0},a=function(n){var e={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return e[n]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,d=function(n,e,t){return i.a(void 0,void 0,void 0,(function(){var o;return i.c(this,(function(i){return null!=n&&"#"!==n[0]&&!s.test(n)&&(o=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,o.push(n,t)]):[2,!1]}))}))}},209:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var i=function(n){try{if("string"!==typeof n||""===n)return n;var e=document.createDocumentFragment(),t=document.createElement("div");e.appendChild(t),t.innerHTML=n,s.forEach((function(n){for(var t=e.querySelectorAll(n),i=t.length-1;i>=0;i--){var a=t[i];a.parentNode?a.parentNode.removeChild(a):e.removeChild(a);for(var s=r(a),d=0;d<s.length;d++)o(s[d])}}));for(var i=r(e),a=0;a<i.length;a++)o(i[a]);var d=document.createElement("div");d.appendChild(e);var c=d.querySelector("div");return null!==c?c.innerHTML:d.innerHTML}catch(l){return console.error(l),""}},o=function n(e){if(!e.nodeType||1===e.nodeType){for(var t=e.attributes.length-1;t>=0;t--){var i=e.attributes.item(t),o=i.name;if(a.includes(o.toLowerCase())){var s=i.value;null!=s&&s.toLowerCase().includes("javascript:")&&e.removeAttribute(o)}else e.removeAttribute(o)}var d=r(e);for(t=0;t<d.length;t++)n(d[t])}},r=function(n){return null!=n.children?n.children:n.childNodes},a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=48.5d8e4d68.chunk.js.map