"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[652],{379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],f=i[u]||0,l="".concat(u," ").concat(f);i[u]=f+1;var v=t(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==v)n[v].references++,n[v].updater(p);else{var d=o(p,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:d,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);t.update(e);return function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),u=0;u<i.length;u++){var f=t(i[u]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},131:(e,n,t)=>{t.d(n,{ZW:()=>d});try{self["workbox:window:6.5.3"]&&_()}catch(r){}function r(e,n){return new Promise((function(t){var r=new MessageChannel;r.port1.onmessage=function(e){t(e.data)},e.postMessage(n,[r.port2])}))}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.3"]&&_()}catch(r){}var s=function(){var e=this;this.promise=new Promise((function(n,t){e.resolve=n,e.reject=t}))};function c(e,n){var t=location.href;return new URL(e,t).href===new URL(n,t).href}var u=function(e,n){this.type=e,Object.assign(this,n)};function f(e,n,t){return t?n?n(e):e:(e&&e.then||(e=Promise.resolve(e)),n?e.then(n):e)}function l(){}var v={type:"SKIP_WAITING"};function p(e,n){if(!n)return e&&e.then?e.then(l):Promise.resolve()}var d=function(e){var n,t;function i(n,t){var r,o;return void 0===t&&(t={}),(r=e.call(this)||this).nn={},r.tn=0,r.rn=new s,r.en=new s,r.on=new s,r.un=0,r.an=new Set,r.cn=function(){var e=r.fn,n=e.installing;r.tn>0||!c(n.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=n,e.removeEventListener("updatefound",r.cn)):(r.hn=n,r.an.add(n),r.rn.resolve(n)),++r.tn,n.addEventListener("statechange",r.ln)},r.ln=function(e){var n=r.fn,t=e.target,o=t.state,i=t===r.vn,a={sw:t,isExternal:i,originalEvent:e};!i&&r.mn&&(a.isUpdate=!0),r.dispatchEvent(new u(o,a)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&n.waiting===t&&r.dispatchEvent(new u("waiting",a))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(t))},r.dn=function(e){var n=r.hn,t=n!==navigator.serviceWorker.controller;r.dispatchEvent(new u("controlling",{isExternal:t,originalEvent:e,sw:n,isUpdate:r.mn})),t||r.on.resolve(n)},r.gn=(o=function(e){var n=e.data,t=e.ports,o=e.source;return f(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new u("message",{data:n,originalEvent:e,ports:t,sw:o}))}))},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(o.apply(this,e))}catch(e){return Promise.reject(e)}}),r.sn=n,r.nn=t,navigator.serviceWorker.addEventListener("message",r.gn),r}t=e,(n=i).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var a,l,d=i.prototype;return d.register=function(e){var n=(void 0===e?{}:e).immediate,t=void 0!==n&&n;try{var r=this;return function(e,n){var t=e();return t&&t.then?t.then(n):n()}((function(){if(!t&&"complete"!==document.readyState)return p(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),f(r.bn(),(function(e){r.fn=e,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var n=r.fn.waiting;return n&&c(n.scriptURL,r.sn.toString())&&(r.hn=n,Promise.resolve().then((function(){r.dispatchEvent(new u("waiting",{sw:n,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(e){return Promise.reject(e)}},d.update=function(){try{return this.fn?p(this.fn.update()):void 0}catch(e){return Promise.reject(e)}},d.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},d.messageSW=function(e){try{return f(this.getSW(),(function(n){return r(n,e)}))}catch(e){return Promise.reject(e)}},d.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&r(this.fn.waiting,v)},d.pn=function(){var e=navigator.serviceWorker.controller;return e&&c(e.scriptURL,this.sn.toString())?e:void 0},d.bn=function(){try{var e=this;return function(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}((function(){return f(navigator.serviceWorker.register(e.sn,e.nn),(function(n){return e.un=performance.now(),n}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},a=i,(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&o(a.prototype,l),i}(function(){function e(){this.Pn=new Map}var n=e.prototype;return n.addEventListener=function(e,n){this.Sn(e).add(n)},n.removeEventListener=function(e,n){this.Sn(e).delete(n)},n.dispatchEvent=function(e){e.target=this;for(var n,t=a(this.Sn(e.type));!(n=t()).done;)(0,n.value)(e)},n.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},e}())}}]);
//# sourceMappingURL=652.bundle.js.map