(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[86],{148:function(t,o,i){"use strict";i.r(o),i.d(o,"ion_img",(function(){return n}));var e=i(24),n=(i(3),function(){function t(t){var o=this;Object(e.l)(this,t),this.onLoad=function(){o.ionImgDidLoad.emit()},this.onError=function(){o.ionError.emit()},this.ionImgWillLoad=Object(e.d)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(e.d)(this,"ionImgDidLoad",7),this.ionError=Object(e.d)(this,"ionError",7)}return t.prototype.srcChanged=function(){this.addIO()},t.prototype.componentDidLoad=function(){this.addIO()},t.prototype.addIO=function(){var t=this;void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver((function(o){o[0].isIntersecting&&(t.load(),t.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return t.load()}),200))},t.prototype.load=function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()},t.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.render=function(){return Object(e.i)(e.a,{class:Object(e.e)(this)},Object(e.i)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(e.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:!0,configurable:!0}),t}())}}]);
//# sourceMappingURL=86.85c65811.chunk.js.map