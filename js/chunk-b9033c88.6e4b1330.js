(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9033c88"],{"0e8f":function(t,e,n){"use strict";n("20f6");var s=n("e8f2");e["a"]=Object(s["a"])("flex")},1681:function(t,e,n){},"1ba6":function(t,e,n){"use strict";function s(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return{tsType:[],runtimeType:{base:"tuple",elements:t.map((function(t){return t.runtimeType}))}}}Object.defineProperty(e,"__esModule",{value:!0}),e.tuple=s},"210b":function(t,e,n){},"2bfd":function(t,e,n){},"434c":function(t,e,n){"use strict";function s(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function i(t){return{tsType:t,runtimeType:{base:"literal",value:t}}}function a(t){return{tsType:void 0,runtimeType:{base:"optional",element:t.runtimeType}}}function r(t){return{tsType:[],runtimeType:{base:"array",element:t.runtimeType}}}function o(t){for(var e={},n=0,s=Object.entries(t);n<s.length;n++){var i=s[n],a=i[0],r=i[1];e[a]=r.runtimeType}return{tsType:{},runtimeType:{base:"object",keyValues:e}}}function l(t,e){switch(t){case"null":return null===e;case"boolean":return"boolean"===typeof e;case"number":return"number"===typeof e;case"string":return"string"===typeof e;default:switch(t.base){case"literal":return e===t.value;case"optional":return void 0===e||l(t.element,e);case"union":return t.elements.some((function(t){return l(t,e)}));case"array":return e instanceof Array&&e.every((function(e){return l(t.element,e)}));case"tuple":return e instanceof Array&&t.elements.length===e.length&&t.elements.every((function(t,n){return l(t,e[n])}));case"object":return null!==e&&"object"===typeof e&&Object.entries(t.keyValues).every((function(t){var n=t[0],s=t[1];return l(s,e[n])}))}}throw new Error("Unexpected error in isValid(): "+t+", "+e)}function c(t,e){return l(t.runtimeType,e)?e:void 0}function u(t,e){return c(t,JSON.parse(e))}Object.defineProperty(e,"__esModule",{value:!0}),s(n("6aea")),s(n("1ba6")),e.nul={tsType:null,runtimeType:"null"},e.bool={tsType:!1,runtimeType:"boolean"},e.num={tsType:0,runtimeType:"number"},e.str={tsType:"",runtimeType:"string"},e.literal=i,e.opt=a,e.arr=r,e.obj=o,e.isValid=l,e.validate=c,e.validatingParse=u},"4b85":function(t,e,n){},"4ed3":function(t,e,n){},"6aea":function(t,e,n){"use strict";function s(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return{tsType:null,runtimeType:{base:"union",elements:t.map((function(t){return t.runtimeType}))}}}Object.defineProperty(e,"__esModule",{value:!0}),e.union=s},"7e58":function(t,e,n){},"8a79":function(t,e,n){"use strict";var s=n("23e7"),i=n("06cf").f,a=n("50c4"),r=n("5a34"),o=n("1d80"),l=n("ab13"),c=n("c430"),u="".endsWith,d=Math.min,h=l("endsWith"),p=!c&&!h&&!!function(){var t=i(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!p&&!h},{endsWith:function(t){var e=String(o(this));r(t);var n=arguments.length>1?arguments[1]:void 0,s=a(e.length),i=void 0===n?s:d(a(n),s),l=String(t);return u?u.call(e,l,i):e.slice(i-l.length,i)===l}})},a722:function(t,e,n){"use strict";n("20f6");var s=n("e8f2");e["a"]=Object(s["a"])("layout")},bf8f:function(t,e,n){"use strict";var s=n("ff79"),i=n.n(s);i.a},c28b:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":"","offset-md3":"",md6:""}},[n("v-card",{staticStyle:{padding:"1em","margin-bottom":"1em"}},[n("div",{staticStyle:{"text-align":"center"}},[n("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.sendOrGet,callback:function(e){t.sendOrGet=e},expression:"sendOrGet"}},[n("v-btn",{attrs:{text:"",value:"send"}},[t._v(" "+t._s(t.strings["send"])+" "),n("v-icon",{attrs:{right:"",dark:""}},[t._v(t._s(t.icons.mdiUpload))])],1),n("v-btn",{attrs:{text:"",value:"get"}},[t._v(" "+t._s(t.strings["get"])+" "),n("v-icon",{attrs:{right:"",dark:""}},[t._v(t._s(t.icons.mdiDownload))])],1)],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"send"===t.sendOrGet,expression:"sendOrGet === 'send'"}]},[n("div",{class:"d-flex justify-end"},[n("v-switch",{attrs:{inset:""},scopedSlots:t._u([{key:"label",fn:function(){return[n("v-icon",{staticClass:"icon-and-text-margin"},[t._v(t._s(t.icons.mdiText))]),t._v(" "+t._s(t.strings["text_mode"])+" ")]},proxy:!0}]),model:{value:t.isTextMode,callback:function(e){t.isTextMode=e},expression:"isTextMode"}})],1),t.isTextMode?t._e():n("file-pond",{attrs:{"label-idle":t.filePondLabelIdle,"allow-multiple":!0,"allow-paste":!0},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}}),t.isTextMode?n("v-textarea",{attrs:{label:t.strings["text_placeholder"],clearable:"","clear-icon":t.icons.mdiCloseCircle,outlined:""},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}}):t._e()],1),n("v-combobox",{ref:"server_url_ref",staticClass:"readable-font",staticStyle:{"margin-bottom":"0.8em"},attrs:{label:t.strings["server_url"],items:t.serverUrlHistory,clearable:""},on:{change:function(e){return t.onUpdateServerUrl()},blur:function(e){return t.attachProtocolToUrl()}},scopedSlots:t._u([{key:"item",fn:function(e){e.index;var s=e.item;return[n("span",{staticClass:"readable-font"},[t._v(t._s(s))]),n("div",{staticClass:"flex-grow-1"}),n("v-list-item-action",{on:{click:function(t){t.stopPropagation()}}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteServerUrl(s)}}},[n("v-icon",[t._v(t._s(t.icons.mdiDelete))])],1)],1)]}}]),model:{value:t.serverUrl,callback:function(e){t.serverUrl=e},expression:"serverUrl"}}),n("v-combobox",{ref:"secret_path_ref",staticClass:"ma-0 pa-0 readable-font",attrs:{label:t.strings["secret_path"],items:t.secretPathHistory,placeholder:t.strings["secret_path_placeholder"],clearable:""},scopedSlots:t._u([{key:"item",fn:function(e){e.index;var s=e.item;return[n("span",{staticClass:"readable-font"},[t._v(t._s(s))]),n("div",{staticClass:"flex-grow-1"}),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteSecretPath(s)}}},[n("v-icon",[t._v(t._s(t.icons.mdiDelete))])],1)],1)]}}]),model:{value:t.secretPath,callback:function(e){t.secretPath=e},expression:"secretPath"}}),"send"===t.sendOrGet&&0!==t.suggestedSecretPaths.length?n("div",{staticStyle:{"text-align":"right","margin-bottom":"1.5em"}},t._l(t.suggestedSecretPaths,(function(e){return n("v-chip",{key:e,staticClass:"ma-0 readable-font",staticStyle:{"font-size":"1em"},attrs:{label:"",outlined:""},on:{click:function(n){t.secretPath=e}}},[t._v(" "+t._s(e)+" ")])})),1):t._e(),n("v-col",{staticClass:"pa-0"},[n("v-row",{staticClass:"ma-0",staticStyle:{"padding-top":"0.4em"},attrs:{align:"center"}},[n("v-switch",{staticClass:"ma-0 pa-0",attrs:{"input-value":"passwordless"===t.protectionType,inset:"",color:"blue"},on:{change:t.onEnablePasswordlessProtection},scopedSlots:t._u([{key:"label",fn:function(){return[n("v-icon",{staticClass:"icon-and-text-margin",attrs:{color:"passwordless"===t.protectionType?"blue":""}},[t._v(t._s(t.icons.mdiShieldHalfFull))]),t._v(" "+t._s(t.strings["passwordless_protection"])+" ")]},proxy:!0}])})],1),n("v-row",{staticClass:"ma-0",staticStyle:{"padding-top":"0.5em"},attrs:{align:"center"}},[n("v-switch",{staticClass:"ma-0 pa-0",attrs:{"input-value":"password"===t.protectionType,inset:"",color:"blue"},on:{change:t.onEnablePasswordProtection},scopedSlots:t._u([{key:"label",fn:function(){return[n("v-icon",{staticClass:"icon-and-text-margin",attrs:{color:"password"===t.protectionType?"blue":""}},[t._v(t._s(t.icons.mdiKey))]),t._v(" "+t._s("password"===t.protectionType?"":t.strings["protect_with_password"])+" ")]},proxy:!0}])}),"password"===t.protectionType?n("v-text-field",{staticClass:"pa-0",staticStyle:{"margin-left":"0.5em"},attrs:{type:t.showsPassword?"text":"password",label:t.strings["password"],"append-icon":t.showsPassword?t.icons.mdiEye:t.icons.mdiEyeOff,"single-line":""},on:{"click:append":function(e){t.showsPassword=!t.showsPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}):t._e()],1)],1),n("div",{staticStyle:{"margin-top":"1.2em"}},["send"===t.sendOrGet?n("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){return t.send()}}},[t._v(" "+t._s(t.strings["send"])+" "),n("v-icon",{attrs:{right:"",dark:""}},[t._v(t._s(t.icons.mdiUpload))])],1):t._e(),"get"===t.sendOrGet?n("v-layout",[n("v-flex",{attrs:{xs6:""}},[n("v-btn",{attrs:{color:"light-blue",dark:"",block:""},on:{click:function(e){return t.view()}}},[t._v(" "+t._s(t.strings["view"])+" "),n("v-icon",{attrs:{right:"",dark:""}},[t._v(t._s(t.icons.mdiFileFind))])],1)],1),n("v-flex",{attrs:{xs6:""}},[n("v-btn",{attrs:{color:"blue",dark:"",block:""},on:{click:function(e){return t.get()}}},[t._v(" "+t._s(t.strings["download"])+" "),n("v-icon",{attrs:{right:"",dark:""}},[t._v(t._s(t.icons.mdiDownload))])],1)],1)],1):t._e()],1)],1),n("div",{staticStyle:{padding:"0.5em"}},[n("v-expansion-panels",{attrs:{multiple:""},model:{value:t.expandedPanelIds,callback:function(e){t.expandedPanelIds=e},expression:"expandedPanelIds"}},[t._l(t.expandedPanels,(function(e){return["data_uploader"===e.type?[n("DataUploader",{key:"upload-"+e.props.uploadNo,attrs:{props:e.props}})]:t._e(),"data_viewer"===e.type?[n("DataViewer",{key:"view-"+e.props.viewNo,attrs:{props:e.props}})]:t._e(),"data_downloader"===e.type?[n("DataDownloader",{key:"download-"+e.props.downloadNo,attrs:{props:e.props}})]:t._e()]}))],2)],1)],1),n("v-snackbar",{attrs:{color:"error",top:""},model:{value:t.showsSnackbar,callback:function(e){t.showsSnackbar=e},expression:"showsSnackbar"}},[t._v(" "+t._s(t.snackbarMessage)+" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.showsSnackbar=!1}}},[n("v-icon",[t._v(t._s(t.icons.mdiClose))])],1)],1)],1)},i=[],a=(n("99af"),n("4de4"),n("a630"),n("caad"),n("c975"),n("a15b"),n("d81d"),n("fb6a"),n("a434"),n("ace4"),n("d3b7"),n("ac1f"),n("25f0"),n("8a79"),n("2532"),n("3ca3"),n("466d"),n("fb2c"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("ddb0"),n("2b3d"),n("2909")),r=n("d4ec"),o=n("bee2"),l=n("99de"),c=n("7e84"),u=n("262e"),d=(n("96cf"),n("1da1")),h=n("9ab4"),p=n("60a3"),f=n("434c"),v=n("94ed"),m=n("c106"),g=n("7a2d"),b=n("1579"),y=n("7dda"),w={pipingServerUrls:["https://ppng.io","https://piping.glitch.me","https://ppng.herokuapp.com"]},S=w,x=function(){return n.e("chunk-2d0ccfb8").then(n.t.bind(null,"4ff6",7)).then((function(t){return t.default}))},k=function(){return Promise.all([n.e("chunk-2852a8b2"),n.e("chunk-c93e2486")]).then(n.bind(null,"e3be"))},I=function(){return Promise.all([n.e("chunk-2852a8b2"),n.e("chunk-70699b8d"),n.e("chunk-6dc76e56")]).then(n.bind(null,"d700"))},_=function(){return Promise.all([n.e("chunk-2852a8b2"),n.e("chunk-2d2073a3")]).then(n.bind(null,"a042"))};Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n("4ed3"));case 1:case"end":return t.stop()}}),t)})))();var P=function(){return n.e("chunk-1c070a76").then(n.t.bind(null,"1501",7)).then((function(t){return t.default()}))},O=S.pipingServerUrls;function T(t){return new URL(t).href}function C(t,e){var n=window.localStorage.getItem(e);if(null!==n)return Object(f["validatingParse"])(t,n)}var j={nonConfusing:["a","b","c","d","e","f","h","i","j","k","m","n","p","r","s","t","u","v","w","x","y","z","2","3","4","5","6","7","8"],alphanum:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]};function D(t,e){var n=window.crypto.getRandomValues(new Uint32Array(t));return Array.from(n).map((function(t){return e[t%e.length]})).join("")}function U(){return new URL(window.location.toString()).searchParams.get("text")}var V=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.sendOrGet="send",t.serverUrl=O[0],t.secretPath="",t.isTextMode=null!==U(),t.inputText=function(){var t=U();return null===t?"":t}(),t.files=[],t.serverUrlHistory=[],t.secretPathHistory=[],t.protectionType="raw",t.password="",t.showsPassword=!1,t.randomStrs=[""],t.progressSetting={show:!1,loadedBytes:0,totalBytes:void 0},t.uploadCount=0,t.viewCount=0,t.downloadCount=0,t.expandedPanels=[],t.expandedPanelIds=[],t.showsSnackbar=!1,t.snackbarMessage="",t.icons={mdiUpload:v["s"],mdiDownload:v["k"],mdiDelete:v["i"],mdiFileFind:v["o"],mdiCloseCircle:v["g"],mdiClose:v["f"],mdiEye:v["l"],mdiEyeOff:v["m"],mdiKey:v["p"],mdiShieldHalfFull:v["q"],mdiText:v["r"]},t.shouldBeRemoved={latestServerUrl:t.serverUrl,latestSecretPath:t.secretPath},t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"onServerUrl",value:function(){this.shouldBeRemoved.latestServerUrl=this.serverUrl}},{key:"onSecretPath",value:function(){null!==this.secretPath&&void 0!==this.secretPath||(this.secretPath=""),this.shouldBeRemoved.latestSecretPath=this.secretPath}},{key:"onUpdateServerUrl",value:function(){window.localStorage.setItem(m["a"].selectedServerUrl,this.serverUrl)}},{key:"updateRandomStrs",value:function(){this.randomStrs[0]=D(3,j.nonConfusing)}},{key:"onEnablePasswordProtection",value:function(t){this.protectionType=t?"password":"raw"}},{key:"onEnablePasswordlessProtection",value:function(t){this.protectionType=t?"passwordless":"raw"}},{key:"mounted",value:function(){var t=this;this.updateRandomStrs();var e=window.localStorage.getItem(m["a"].selectedServerUrl);null!==e&&(this.serverUrl=e),this.$refs.server_url_ref.$el.querySelector("input").addEventListener("keyup",(function(e){t.shouldBeRemoved.latestServerUrl=e.target.value})),this.$refs.secret_path_ref.$el.querySelector("input").addEventListener("keyup",(function(e){t.shouldBeRemoved.latestSecretPath=e.target.value}));var n=C(Object(f["arr"])(f["str"]),m["a"].serverUrlHistory);this.serverUrlHistory=void 0===n?O.slice():n;var s=C(Object(f["arr"])(f["str"]),m["a"].secretPathHistory);void 0!==s&&(this.secretPathHistory=s)}},{key:"applyLatestServerUrlAndSecretPath",value:function(){this.serverUrl=this.shouldBeRemoved.latestServerUrl,this.secretPath=this.shouldBeRemoved.latestSecretPath}},{key:"send",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.applyLatestServerUrlAndSecretPath(),this.isTextMode||0!==this.files.length){t.next=4;break}return this.showSnackbar(this.strings["error_file_not_selected"]),t.abrupt("return");case 4:if(""!==this.secretPath){t.next=7;break}return this.showSnackbar(this.strings["error_secret_path_not_specified"]),t.abrupt("return");case 7:if("password"!==this.protectionType||""!==this.password){t.next=10;break}return this.showSnackbar(this.strings["password_is_required"]),t.abrupt("return");case 10:e=this.isTextMode?this.inputText:this.files.map((function(t){return t.file})),this.uploadCount++,this.expandedPanels.unshift({type:"data_uploader",props:{uploadNo:this.uploadCount,data:e,serverUrl:this.serverUrl,secretPath:this.secretPath,protection:this.protection}}),this.expandedPanelIds.push(this.expandedPanels.length-1),g["a"].recordsServerUrlHistory&&!this.serverUrlHistory.map(T).includes(T(this.serverUrl))&&(this.serverUrlHistory.push(this.serverUrl),window.localStorage.setItem(m["a"].serverUrlHistory,JSON.stringify(this.serverUrlHistory))),g["a"].recordsSecretPathHistory&&(this.addSecretPath(),window.localStorage.setItem(m["a"].secretPathHistory,JSON.stringify(this.secretPathHistory)));case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"addSecretPath",value:function(){var t=this.secretPathHistory.indexOf(this.secretPath);-1!==t&&this.secretPathHistory.splice(t,1),this.secretPathHistory.unshift(this.secretPath)}},{key:"get",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.applyLatestServerUrlAndSecretPath(),""!==this.secretPath){t.next=4;break}return this.showSnackbar(this.strings["error_secret_path_not_specified"]),t.abrupt("return");case 4:return t.next=6,x();case 6:if(t.sent,"password"!==this.protectionType||""!==this.password){t.next=10;break}return this.showSnackbar(this.strings["password_is_required"]),t.abrupt("return");case 10:this.downloadCount++,this.expandedPanels.unshift({type:"data_downloader",props:{downloadNo:this.downloadCount,serverUrl:this.serverUrl,secretPath:this.secretPath,protection:this.protection}}),this.expandedPanelIds.push(this.expandedPanels.length-1);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"view",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.applyLatestServerUrlAndSecretPath(),""!==this.secretPath){t.next=4;break}return this.showSnackbar(this.strings["error_secret_path_not_specified"]),t.abrupt("return");case 4:if(!this.enablePasswordProtection||""!==this.password){t.next=7;break}return this.showSnackbar(this.strings["password_is_required"]),t.abrupt("return");case 7:this.viewCount++,this.expandedPanels.unshift({type:"data_viewer",props:{viewNo:this.viewCount,serverUrl:this.serverUrl,secretPath:this.secretPath,protection:this.protection}}),this.expandedPanelIds.push(this.expandedPanels.length-1);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"showSnackbar",value:function(t){this.showsSnackbar=!0,this.snackbarMessage=t}},{key:"attachProtocolToUrl",value:function(){var t=this;setTimeout((function(){null===t.serverUrl.match(/^https?:\/\//)&&(t.serverUrl="https://".concat(t.serverUrl))}),100)}},{key:"deleteServerUrl",value:function(t){this.serverUrlHistory=this.serverUrlHistory.filter((function(e){return e!==t})),window.localStorage.setItem(m["a"].serverUrlHistory,JSON.stringify(this.serverUrlHistory))}},{key:"deleteSecretPath",value:function(t){this.secretPathHistory=this.secretPathHistory.filter((function(e){return e!==t})),window.localStorage.setItem(m["a"].secretPathHistory,JSON.stringify(this.secretPathHistory))}},{key:"strings",get:function(){return Object(b["a"])(g["a"].language)}},{key:"filePondLabelIdle",get:function(){return 0===this.files.length?"<img src='img/file-icon.svg' style='width: 2em'><br>".concat(this.strings["drop_a_file_here_or_browse"]):this.strings["drop_a_file_here_or_browse"]}},{key:"enablePasswordProtection",get:function(){return"password"===this.protectionType}},{key:"protection",get:function(){switch(this.protectionType){case"raw":case"passwordless":return{type:this.protectionType};case"password":return{type:this.protectionType,password:this.password}}}},{key:"suggestedSecretPaths",get:function(){var t=this,e=function(){if(!t.isTextMode&&0===t.files.length||t.isTextMode&&""===t.inputText)return[];if(t.isTextMode)return[].concat(Object(a["a"])(t.randomStrs.map((function(t){return"".concat(t,".txt")}))),Object(a["a"])(t.randomStrs));if(1===t.files.length){var e=t.files[0].filename,n=Object(y["baseAndExt"])(e),s=n.ext;return[e].concat(Object(a["a"])(t.randomStrs.map((function(t){return"".concat(t).concat(s)}))),Object(a["a"])(t.randomStrs))}return t.files.length>1?t.secretPath.endsWith(".zip")?[]:[].concat(Object(a["a"])(""===t.secretPath?[]:["".concat(t.secretPath,".zip")]),Object(a["a"])(t.randomStrs.map((function(t){return"".concat(t,".zip")}))),Object(a["a"])(t.randomStrs)):t.randomStrs}();return e.filter((function(e){return t.secretPath!==e}))}}]),e}(p["d"]);Object(h["a"])([Object(p["e"])("serverUrl")],V.prototype,"onServerUrl",null),Object(h["a"])([Object(p["e"])("secretPath")],V.prototype,"onSecretPath",null),V=Object(h["a"])([Object(p["a"])({components:{DataUploader:k,DataViewer:I,DataDownloader:_,FilePond:P}})],V);var B=V,H=B,M=(n("bf8f"),n("2877")),F=n("6544"),A=n.n(F),N=n("8336"),$=n("5530"),R=(n("7e58"),n("604c")),E=R["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return R["a"].options.computed.classes.call(this)}},methods:{genData:R["a"].options.methods.genData}}),L=n("a9ad"),G=n("58df"),z=Object(G["a"])(E,L["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object($["a"])({},E.options.computed.classes.call(this),{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var t=this.setTextColor(this.color,Object($["a"])({},E.options.methods.genData.call(this)));return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}}),q=n("b0af"),W=n("cc20"),J=(n("4160"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("5319"),n("2ca0"),n("159b"),n("ade3")),K=(n("4b85"),n("2b0e")),Y=n("d9f7"),Q=n("80d2"),X=["sm","md","lg","xl"],Z=function(){return X.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),tt=function(){return X.reduce((function(t,e){return t["offset"+Object(Q["v"])(e)]={type:[String,Number],default:null},t}),{})}(),et=function(){return X.reduce((function(t,e){return t["order"+Object(Q["v"])(e)]={type:[String,Number],default:null},t}),{})}(),nt={col:Object.keys(Z),offset:Object.keys(tt),order:Object.keys(et)};function st(t,e,n){var s=t;if(null!=n&&!1!==n){if(e){var i=e.replace(t,"");s+="-".concat(i)}return"col"!==t||""!==n&&!0!==n?(s+="-".concat(n),s.toLowerCase()):s.toLowerCase()}}var it=new Map,at=K["default"].extend({name:"v-col",functional:!0,props:Object($["a"])({cols:{type:[Boolean,String,Number],default:!1}},Z,{offset:{type:[String,Number],default:null}},tt,{order:{type:[String,Number],default:null}},et,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,s=e.data,i=e.children,a=(e.parent,"");for(var r in n)a+=String(n[r]);var o=it.get(a);return o||function(){var t,e;for(e in o=[],nt)nt[e].forEach((function(t){var s=n[t],i=st(e,t,s);i&&o.push(i)}));var s=o.some((function(t){return t.startsWith("col-")}));o.push((t={col:!s||!n.cols},Object(J["a"])(t,"col-".concat(n.cols),n.cols),Object(J["a"])(t,"offset-".concat(n.offset),n.offset),Object(J["a"])(t,"order-".concat(n.order),n.order),Object(J["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),it.set(a,o)}(),t(n.tag,Object(Y["a"])(s,{class:o}),i)}}),rt=(n("7db0"),n("b0c0"),n("2bfd"),n("b974")),ot=(n("498a"),n("8654")),lt=Object($["a"])({},rt["b"],{offsetY:!0,offsetOverflow:!0,transition:!1}),ct=rt["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:rt["a"].options.props.menuProps.type,default:function(){return lt}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object($["a"])({},rt["a"].options.computed.classes.call(this),{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){return t.filter(e,String(t.internalSearch),String(t.getText(e)))}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=rt["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object($["a"])({},lt,{},t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=rt["a"].options.computed.listData.call(this);return t.props=Object($["a"])({},t.props,{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===Q["q"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===Q["q"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==Q["q"].backspace&&t!==Q["q"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){if(!this.readonly){var t=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===t){var e=this.selectedItems[this.selectedIndex];if(!this.getDisabled(e)){var n=this.selectedIndex===t?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===n?this.setValue(this.multiple?[]:void 0):this.selectItem(e),this.selectedIndex=n}}else this.selectedIndex=t}},clearableCallback:function(){this.internalSearch=void 0,rt["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=ot["a"].options.methods.genInput.call(this);return t.data=Object(Y["a"])(t.data,{attrs:{"aria-activedescendant":Object(Q["k"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(Q["k"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=rt["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?rt["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;rt["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){rt["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){rt["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){rt["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],n=this.getText(e);t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}}),ut=ct.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return rt["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=ct.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var n=this,s=rt["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(s.componentOptions.listeners=Object($["a"])({},s.componentOptions.listeners,{dblclick:function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}})),s},onChipInput:function(t){rt["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&ct.options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;rt["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===Q["q"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===Q["q"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();ct.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():ct.options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){rt["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var n=this.internalValue.slice();n.splice(e,1),this.setValue(n)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(t){if(this.multiple&&!this.searchIsDirty){var e=t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(t.preventDefault(),rt["a"].options.methods.selectItem.call(this,e))}}}}),dt=(n("0481"),n("4069"),n("210b"),n("d9bd")),ht=R["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object($["a"])({},R["a"].options.computed.classes.call(this),{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(dt["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(dt["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(t,e){var n=this.getValue(t,e),s=this.getValue(t,e+1);t.isActive=this.toggleMethod(n),t.nextIsActive=this.toggleMethod(s)}}}),pt=n("0e8f"),ft=n("132d"),vt=n("a722"),mt=n("1800"),gt=["sm","md","lg","xl"],bt=["start","end","center"];function yt(t,e){return gt.reduce((function(n,s){return n[t+Object(Q["v"])(s)]=e(),n}),{})}var wt=function(t){return[].concat(bt,["baseline","stretch"]).includes(t)},St=yt("align",(function(){return{type:String,default:null,validator:wt}})),xt=function(t){return[].concat(bt,["space-between","space-around"]).includes(t)},kt=yt("justify",(function(){return{type:String,default:null,validator:xt}})),It=function(t){return[].concat(bt,["space-between","space-around","stretch"]).includes(t)},_t=yt("alignContent",(function(){return{type:String,default:null,validator:It}})),Pt={align:Object.keys(St),justify:Object.keys(kt),alignContent:Object.keys(_t)},Ot={align:"align",justify:"justify",alignContent:"align-content"};function Tt(t,e,n){var s=Ot[t];if(null!=n){if(e){var i=e.replace(t,"");s+="-".concat(i)}return s+="-".concat(n),s.toLowerCase()}}var Ct=new Map,jt=K["default"].extend({name:"v-row",functional:!0,props:Object($["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:wt}},St,{justify:{type:String,default:null,validator:xt}},kt,{alignContent:{type:String,default:null,validator:It}},_t),render:function(t,e){var n=e.props,s=e.data,i=e.children,a="";for(var r in n)a+=String(n[r]);var o=Ct.get(a);return o||function(){var t,e;for(e in o=[],Pt)Pt[e].forEach((function(t){var s=n[t],i=Tt(e,t,s);i&&o.push(i)}));o.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(J["a"])(t,"align-".concat(n.align),n.align),Object(J["a"])(t,"justify-".concat(n.justify),n.justify),Object(J["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),Ct.set(a,o)}(),t(n.tag,Object(Y["a"])(s,{staticClass:"row",class:o}),i)}}),Dt=(n("ca71"),n("f2e7")),Ut=n("fe6c"),Vt=Object(G["a"])(L["a"],Dt["a"],Object(Ut["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(dt["d"])("auto-height",this)},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper",attrs:{role:"alert"}}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),Bt=n("b73d"),Ht=(n("1681"),Object(G["a"])(ot["a"])),Mt=Ht.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object($["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},ot["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=ot["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){ot["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),Ft=Object(M["a"])(H,s,i,!1,null,"6b5d9742",null);e["default"]=Ft.exports;A()(Ft,{VBtn:N["a"],VBtnToggle:z,VCard:q["a"],VChip:W["a"],VCol:at,VCombobox:ut,VExpansionPanels:ht,VFlex:pt["a"],VIcon:ft["a"],VLayout:vt["a"],VListItemAction:mt["a"],VRow:jt,VSnackbar:Vt,VSwitch:Bt["a"],VTextField:ot["a"],VTextarea:Mt})},ca71:function(t,e,n){},e8f2:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("99af"),n("4de4"),n("a15b"),n("b64b"),n("2ca0"),n("498a");var s=n("2b0e");function i(t){return s["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var s=n.props,i=n.data,a=n.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var r=i.attrs;if(r){i.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,a)}})}},fb2c:function(t,e,n){var s=n("74e8");s("Uint32",(function(t){return function(e,n,s){return t(this,e,n,s)}}))},ff79:function(t,e,n){}}]);
//# sourceMappingURL=chunk-b9033c88.6e4b1330.js.map