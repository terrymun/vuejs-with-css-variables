(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],l=0,h=[];l<c.length;l++)o=c[l],i[o]&&h.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(h.length)h.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function c(e){return u.p+"js/"+({"icon-styling":"icon-styling",theme0:"theme0",theme1:"theme1",theme2:"theme2",theme4:"theme4",themeing:"themeing"}[e]||e)+"."+{"icon-styling":"bffe0145",theme0:"4a2d369f",theme1:"4d621d05",theme2:"335fe238",theme4:"6bec35bc",themeing:"3d091914"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"icon-styling":1,themeing:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({"icon-styling":"icon-styling",theme0:"theme0",theme1:"theme1",theme2:"theme2",theme4:"theme4",themeing:"themeing"}[e]||e)+"."+{"icon-styling":"e2efd99c",theme0:"31d6cfe0",theme1:"31d6cfe0",theme2:"31d6cfe0",theme4:"31d6cfe0",themeing:"c9689648"}[e]+".css",i=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return t()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){s=h[c],l=s.getAttribute("data-href");if(l===r||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var h=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62");r["default"].use(o["a"]),t["a"]=new o["a"].Store({})},"51e2":function(e,t,n){var r={"./dark.ts":["7c89","theme0"],"./light.ts":["ead3","theme1"],"./summer.ts":["ae86","theme2"],"./theme.types.ts":["b19e"],"./twilight.ts":["1da1","theme4"]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="51e2",e.exports=o},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},ac1a:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n("d225"),o=n("b0b4"),i=n("308d"),a=n("6bb5"),c=n("4e2b"),u=n("9ab4"),s=n("6fc5"),l=n("b19e"),h=n("0613"),f=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(i["a"])(this,Object(a["a"])(t).apply(this,arguments)),e.theme=l["ThemeName"].LIGHT,e}return Object(c["a"])(t,e),Object(o["a"])(t,[{key:"setTheme",value:function(e){return e}},{key:"SET_THEME",value:function(e){this.theme=e}}]),t}(s["d"]);u["a"]([Object(s["a"])({commit:"SET_THEME"})],f.prototype,"setTheme",null),u["a"]([s["c"]],f.prototype,"SET_THEME",null),f=u["a"]([Object(s["b"])({dynamic:!0,store:h["a"],name:"App"})],f);var m=Object(s["e"])(f)},b19e:function(e,t,n){"use strict";var r,o,i;n.r(t),n.d(t,"ThemeName",function(){return r}),n.d(t,"ThemeLabel",function(){return o}),n.d(t,"ThemePropertiesDictionary",function(){return i}),function(e){e["LIGHT"]="light",e["DARK"]="dark",e["SUMMER"]="summer",e["TWILIGHT"]="twilight"}(r||(r={})),function(e){e["light"]="Light",e["dark"]="Dark",e["summer"]="Summer",e["twilight"]="Twilight"}(o||(o={})),function(e){e["appBackgroundColor"]="--app-background-color",e["appExternalIcon"]="--app-external-icon",e["appInputBorderColor"]="--app-input-border-color",e["appLinkColor"]="--app-link-color",e["appTextColor"]="--app-text-color"}(i||(i={}))},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{style:e.rootCssStyleObject,attrs:{id:"app"}},[n("router-view")],1)},i=[],a=n("2d1f"),c=n.n(a),u=(n("ac6a"),n("96cf"),n("3b8d")),s=n("d225"),l=n("b0b4"),h=n("308d"),f=n("6bb5"),m=n("4e2b"),p=n("9ab4"),d=n("60a3"),b=n("b19e"),g=n("ac1a"),v=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(h["a"])(this,Object(f["a"])(t).apply(this,arguments)),e.isThemeReady=!1,e}return Object(m["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){var e=this;this.setTheme().then(function(){e.isThemeReady=!0})}},{key:"onThemeChange",value:function(){this.setTheme()}},{key:"setTheme",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",n("51e2")("./".concat(this.theme,".ts")).then(function(e){var n=e.default;c()(b["ThemePropertiesDictionary"]).forEach(function(e){var r=e[0],o=e[1];t.$el.style.setProperty(o,n[r])})}));case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"theme",get:function(){return g["a"].theme}},{key:"rootCssStyleObject",get:function(){var e={};return this.isThemeReady&&(e.opacity="1"),e}}]),t}(d["d"]);p["a"]([Object(d["e"])("theme")],v.prototype,"onThemeChange",null),v=p["a"]([Object(d["a"])({name:"App"})],v);var y=v,O=y,T=(n("5c0b"),n("2877")),j=Object(T["a"])(O,o,i,!1,null,null,null),w=j.exports,k=n("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h1",[e._v("VueJS + CSS variables")]),n("span",{staticClass:"byline"},[e._v("By Terry Mun")]),n("p",[e._v("\n    This is the home page that collects all the links to subpages demonstrationg how CSS\n    variables can be used in the context of VueJS.\n  ")]),n("ul",[n("li",[n("router-link",{attrs:{to:"/icon-styling"}},[e._v("Icon Styling")])],1),n("li",[n("router-link",{attrs:{to:"/themeing"}},[e._v("Themeing")])],1)])])},S=[],_=function(e){function t(){return Object(s["a"])(this,t),Object(h["a"])(this,Object(f["a"])(t).apply(this,arguments))}return Object(m["a"])(t,e),t}(d["d"]);_=p["a"]([Object(d["a"])({name:"Home"})],_);var C=_,x=C,P=Object(T["a"])(x,E,S,!1,null,null,null),A=P.exports;r["default"].use(k["a"]);var N=new k["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:A},{path:"/icon-styling",name:"icon-styling",component:function(){return n.e("icon-styling").then(n.bind(null,"f975"))}},{path:"/themeing",name:"themeing",component:function(){return n.e("themeing").then(n.bind(null,"0dea"))}}]}),L=n("0613"),M=n("9483");Object(M["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,new r["default"]({router:N,store:L["a"],render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.b90a6813.js.map