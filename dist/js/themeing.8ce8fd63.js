(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["themeing"],{"0dea":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Themeing")]),n("span",{staticClass:"byline"},[n("router-link",{attrs:{to:"/"}},[t._v("Back")])],1),n("h2",[t._v("Fetching a theme asynchronously")]),t._m(0),n("UIFormControlGroup",{scopedSlots:t._u([{key:"label",fn:function(){return[n("UIFormLabel",[t._v("App theme")])]},proxy:!0}])},[n("UIFormSelect",{model:{value:t.activeTheme,callback:function(e){t.activeTheme=e},expression:"activeTheme"}},t._l(t.themes,function(e,a){return n("option",{key:a,domProps:{value:e.value}},[t._v("\n        "+t._s(e.label)+"\n      ")])}),0)],1),n("h2",[t._v("How does it work?")]),t._m(1),t._m(2),t._m(3)],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    The dropdown below fetches a pre-defined "),n("code",[t._v("ts")]),t._v(" file containing theme-related\n    variables.\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    A VueX store module called "),n("code",[t._v("app")]),t._v(" is set up to store a theme name, and allow\n    components to dispatch "),n("a",{attrs:{href:"https://vuex.vuejs.org/guide/actions.html"}},[t._v("actions")]),t._v(" that\n    will update the theme reference.\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    The "),n("code",[t._v("App.vue")]),t._v(" file simply listen to changes in the theme. When a change is\n    detected, the compoent will then asynchronously and dynamically load the relevant\n    "),n("code",[t._v(".ts")]),t._v(" file.\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    The theme's "),n("code",[t._v(".ts")]),t._v(" file exports a module containing a key-value pair of CSS\n    variable names and their corresponding values. This dictionary is enumerated to set\n    all CSS variables contained inside it.\n  ")])}],r=n("db0c"),o=n.n(r),i=(n("ac6a"),n("d225")),u=n("b0b4"),s=n("308d"),l=n("6bb5"),f=n("4e2b"),d=n("9ab4"),b=n("60a3"),h=n("b19e"),v=n("21ce"),p=n("3414"),m=n("9f9f"),_=n("ac1a"),O=function(t){function e(){return Object(i["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(u["a"])(e,[{key:"activeTheme",get:function(){return _["a"].theme},set:function(t){_["a"].setTheme(t)}},{key:"themes",get:function(){var t=[];return o()(h["ThemeName"]).forEach(function(e){t.push({label:h["ThemeLabel"][e],value:e})}),t}}]),e}(b["d"]);O=d["a"]([Object(b["a"])({name:"Themeing",components:{UIFormControlGroup:v["a"],UIFormLabel:p["a"],UIFormSelect:m["a"]}})],O);var j=O,y=j,g=n("2877"),w=Object(g["a"])(y,a,c,!1,null,null,null);e["default"]=w.exports},"1fca":function(t,e,n){},"21ce":function(t,e,n){"use strict";var a,c,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-control-group",class:t.rootCssClassObject},[t.$slots.label?n("div",{staticClass:"form-control-group__label"},[t._t("label")],2):t._e(),t.$slots.default?n("div",{staticClass:"form-control-group__control"},[t._t("default")],2):t._e()])},o=[],i=n("d225"),u=n("b0b4"),s=n("308d"),l=n("6bb5"),f=n("4e2b"),d=n("9ab4"),b=n("60a3"),h=n("f19a");(function(t){t["FULL"]="full",t["NORMAL"]="normal"})(a||(a={})),function(t){t["GRID"]="grid",t["STACKED"]="stacked"}(c||(c={}));var v=function(t){function e(){return Object(i["a"])(this,e),Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(u["a"])(e,[{key:"rootCssClassObject",get:function(){return{"width--normal":this.width===a.NORMAL,"width--full":this.width===a.FULL,"layout--grid":this.layout===c.GRID,"layout--stacked":this.layout===c.STACKED}}}]),e}(b["d"]);d["a"]([Object(b["c"])({type:String,default:a.NORMAL,validator:Object(h["b"])(a)})],v.prototype,"width",void 0),d["a"]([Object(b["c"])({type:String,default:c.GRID,validator:Object(h["b"])(c)})],v.prototype,"layout",void 0),v=d["a"]([Object(b["a"])({name:"UIFormControlGroup"})],v);var p=v,m=p,_=(n("9575"),n("2877")),O=Object(_["a"])(m,r,o,!1,null,"0c4029ad",null);e["a"]=O.exports},"25d0":function(t,e,n){},"2fdb":function(t,e,n){"use strict";var a=n("5ca1"),c=n("d2c8"),r="includes";a(a.P+a.F*n("5147")(r),"String",{includes:function(t){return!!~c(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"32a6":function(t,e,n){var a=n("241e"),c=n("c3a1");n("ce7e")("keys",function(){return function(t){return c(a(t))}})},3414:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"form-label"},[t._t("default")],2)},c=[],r=n("d225"),o=n("308d"),i=n("6bb5"),u=n("4e2b"),s=n("9ab4"),l=n("60a3"),f=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(l["d"]);f=s["a"]([Object(l["a"])({name:"UIFormLabel"})],f);var d=f,b=d,h=(n("e853"),n("2877")),v=Object(h["a"])(b,a,c,!1,null,"753a6afa",null);e["a"]=v.exports},5147:function(t,e,n){var a=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,!"/./"[t](e)}catch(c){}}return!0}},6762:function(t,e,n){"use strict";var a=n("5ca1"),c=n("c366")(!0);a(a.P,"Array",{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"7d6d":function(t,e,n){var a=n("63b6"),c=n("13c8")(!1);a(a.S,"Object",{values:function(t){return c(t)}})},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},"8bc6":function(t,e,n){},9575:function(t,e,n){"use strict";var a=n("25d0"),c=n.n(a);c.a},"9e1c":function(t,e,n){n("7d6d"),t.exports=n("584a").Object.values},"9f9f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{staticClass:"form-select",domProps:{value:t.value},on:{input:t.onInput}},[t._t("default")],2)},c=[],r=n("d225"),o=n("b0b4"),i=n("308d"),u=n("6bb5"),s=n("4e2b"),l=n("9ab4"),f=n("60a3"),d=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(o["a"])(e,[{key:"onInput",value:function(){return this.$el.value}}]),e}(f["d"]);l["a"]([Object(f["c"])({type:String})],d.prototype,"value",void 0),l["a"]([Object(f["b"])("input")],d.prototype,"onInput",null),d=l["a"]([Object(f["a"])({name:"UIFormSelect"})],d);var b=d,h=b,v=(n("a53e"),n("2877")),p=Object(v["a"])(h,a,c,!1,null,"756cc42c",null);e["a"]=p.exports},a4bb:function(t,e,n){t.exports=n("8aae")},a53e:function(t,e,n){"use strict";var a=n("1fca"),c=n.n(a);c.a},aae3:function(t,e,n){var a=n("d3f4"),c=n("2d95"),r=n("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==c(t))}},d2c8:function(t,e,n){var a=n("aae3"),c=n("be13");t.exports=function(t,e,n){if(a(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(c(t))}},db0c:function(t,e,n){t.exports=n("9e1c")},e853:function(t,e,n){"use strict";var a=n("8bc6"),c=n.n(a);c.a},f19a:function(t,e,n){"use strict";function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1/0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return Math.max(e,Math.min(t,n))}n("6762"),n("2fdb");var c=n("a4bb"),r=n.n(c);function o(t){var e=r()(t).map(function(e){return t[e]});return function(t){return e.includes(t)}}function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i})}}]);
//# sourceMappingURL=themeing.8ce8fd63.js.map