(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27989818"],{"8f8f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-list",[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("img",{attrs:{src:r("9b19"),alt:"Piping UI"}})]),a("v-list-item-content",[a("v-list-item-title",[e._v("Piping UI")]),a("v-list-item-subtitle",[e._v(e._s(e.strings["version"]))]),a("a",{attrs:{href:"https://github.com/nwtgck/piping-ui-web",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}}),e._v(" "+e._s(e.strings["view_on_github"])+" ")],1)],1)],1)],1),a("v-divider"),a("v-list-item",[a("v-list-item-action",[a("v-select",{attrs:{items:e.availableLanguages,label:e.strings["language"],"item-text":"str","item-value":"lang",outlined:""},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}})],1)],1),a("v-list-item",[a("v-list-item-title",[e._v(e._s(e.strings["dark_theme"]))]),a("v-list-item-action",[a("v-switch",{model:{value:e.enableDarkTheme,callback:function(t){e.enableDarkTheme=t},expression:"enableDarkTheme"}})],1)],1),a("v-list-item",[a("v-list-item-title",[e._v(e._s(e.strings["record_server_url"]))]),a("v-list-item-action",[a("v-switch",{model:{value:e.recordsServerUrlHistory,callback:function(t){e.recordsServerUrlHistory=t},expression:"recordsServerUrlHistory"}})],1)],1),a("v-list-item",[a("v-list-item-title",[e._v(e._s(e.strings["record_secret_path"]))]),a("v-list-item-action",[a("v-switch",{model:{value:e.recordsSecretPathHistory,callback:function(t){e.recordsSecretPathHistory=t},expression:"recordsSecretPathHistory"}})],1)],1),a("v-list-item",{on:{click:function(t){return e.input(!0)}}},[a("v-list-item-title",[e._v(e._s(e.strings["open_source_licenses"]))])],1)],1)],1)},i=[],s=(r("d3b7"),r("25f0"),r("d4ec")),n=r("bee2"),l=r("99de"),o=r("7e84"),c=r("262e"),u=r("9ab4"),v=r("60a3"),g=r("7a2d"),m=r("c106"),d=r("1579"),b=r("3f5a"),h=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(l["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.enableDarkTheme=!1,e.availableLanguages=[{lang:"en",str:"English"},{lang:"ja",str:"日本語"}],e}return Object(c["a"])(t,e),Object(n["a"])(t,[{key:"input",value:function(e){}},{key:"mounted",value:function(){this.enableDarkTheme=Object(b["a"])();var e=window.localStorage.getItem(m["a"].recordsServerUrlHistory);null!==e&&(g["a"].recordsServerUrlHistory="true"===e);var t=window.localStorage.getItem(m["a"].recordsSecretPathHistory);null!==t&&(g["a"].recordsSecretPathHistory="true"===t)}},{key:"onEnableDarkTheme",value:function(){this.$vuetify.theme.dark=this.enableDarkTheme,window.localStorage.setItem(m["a"].darkTheme,this.enableDarkTheme.toString())}},{key:"strings",get:function(){return Object(d["a"])(g["a"].language)}},{key:"language",set:function(e){g["a"].language=e,window.localStorage.setItem(m["a"].language,e)},get:function(){return g["a"].language}},{key:"recordsServerUrlHistory",get:function(){return g["a"].recordsServerUrlHistory},set:function(e){g["a"].recordsServerUrlHistory=e,window.localStorage.setItem(m["a"].recordsServerUrlHistory,e+"")}},{key:"recordsSecretPathHistory",get:function(){return g["a"].recordsSecretPathHistory},set:function(e){g["a"].recordsSecretPathHistory=e,window.localStorage.setItem(m["a"].recordsSecretPathHistory,e+"")}}]),t}(v["d"]);Object(u["a"])([Object(v["c"])()],h.prototype,"value",void 0),Object(u["a"])([Object(v["b"])()],h.prototype,"input",null),Object(u["a"])([Object(v["e"])("enableDarkTheme")],h.prototype,"onEnableDarkTheme",null),h=Object(u["a"])([v["a"]],h);var f=h,k=f,p=r("2877"),y=r("6544"),S=r.n(y),w=r("b0af"),_=r("ce7e"),H=r("8860"),j=r("da13"),O=r("1800"),I=r("8270"),T=r("5d23"),D=r("b974"),P=r("b73d"),U=Object(p["a"])(k,a,i,!1,null,null,null);t["default"]=U.exports;S()(U,{VCard:w["a"],VDivider:_["a"],VList:H["a"],VListItem:j["a"],VListItemAction:O["a"],VListItemAvatar:I["a"],VListItemContent:T["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VSelect:D["a"],VSwitch:P["a"]})},"9b19":function(e,t,r){e.exports=r.p+"img/logo.d8a94741.svg"}}]);
//# sourceMappingURL=chunk-27989818.b7a26de5.js.map