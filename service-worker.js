importScripts("precache-manifest.93d03dddd8762def553b420861e082a6.js", "workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=ReadableStream,o=r(1),a=r(2);importScripts("openpgp/openpgp.min.js");const s=o.createReadableStreamWrapper(ReadableStream),u=o.createReadableStreamWrapper(i);function c(e){const t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];return[...crypto.getRandomValues(new Uint32Array(e))].map(e=>t[e%t.length]).join("")}const d={};self.addEventListener("message",e=>{if(e.data)switch(e.data.type){case"skip-waiting":self.skipWaiting();break;case"enroll-download-info":{const t=e.data.downloadInfo;if(!("url"in t))return void console.error("downloadInfo.url is missing");if(!("filename"in t))return void console.error("downloadInfo.filename is missing");if(!("protection"in t))return void console.error("downloadInfo.protection is missing");if(!("type"in t.protection))return void console.error("downloadInfo.protection.type is missing");if(!("decryptErrorMessage"in t))return void console.error("downloadInfo.decryptErrorMessage is missing");const r=function(){for(;;){const e=c(128);if(!(e in d))return e}}();d[r]=t,e.ports[0].postMessage({downloadInfoId:r});break}}}),self.addEventListener("fetch",e=>{const t=new URL(e.request.url);if("/sw-download-support"===t.pathname)e.respondWith(new Response(new i({start(e){e.enqueue(new Uint8Array([79,75])),e.close()}})));else if("/sw-download"===t.pathname){const r=decodeURIComponent(t.hash.substring(1));if(!(r in d))return void console.error(`download-info ID ${r} not found`);const i=d[r];delete d[r];const o=i.url;let c=i.filename;const f=i.protection,l=i.decryptErrorMessage,h=(()=>{switch(f.type){case"raw":return;case"string":return f.key;case"uint8array":return a.base64ToUint8Array(f.key)}})();e.respondWith((()=>n(void 0,void 0,void 0,(function*(){const e=yield fetch(o),t=new Headers([...e.headers.entries()]);c=encodeURIComponent(c).replace(/['()]/g,escape).replace(/\*/g,"%2A"),t.set("Content-Disposition","attachment; filename*=UTF-8''"+c);let r=e.body;if(void 0!==h)try{openpgp.config.allow_unauthenticated_stream=!0,r=(yield openpgp.decrypt({message:yield openpgp.message.read(s(e.body)),passwords:[h],format:"binary"})).data}catch(e){return new Response(l,{status:400})}return new Response(u(r),{headers:t})})))())}}),workbox.core.clientsClaim(),self.__precacheManifest=[].concat(self.__precacheManifest||[]),workbox.precaching.precacheAndRoute(self.__precacheManifest,{})},function(e,t,r){"use strict";r.r(t),r.d(t,"createReadableStreamWrapper",(function(){return h})),r.d(t,"createWrappingReadableSource",(function(){return p})),r.d(t,"createWritableStreamWrapper",(function(){return m})),r.d(t,"createWrappingWritableSink",(function(){return w})),r.d(t,"createTransformStreamWrapper",(function(){return W})),r.d(t,"createWrappingTransformer",(function(){return S}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function o(e){if(!e)throw new TypeError("Assertion failed")}function a(){}function s(e){return"object"==typeof e&&null!==e||"function"==typeof e}function u(e){if("function"!=typeof e)return!1;var t=!1;try{new e({start:function(){t=!0}})}catch(e){}return t}function c(e){return!!s(e)&&"function"==typeof e.getReader}function d(e){return!!s(e)&&"function"==typeof e.getWriter}function f(e){return!!s(e)&&(!!c(e.readable)&&!!d(e.writable))}function l(e){try{return e.getReader({mode:"byob"}).releaseLock(),!0}catch(e){return!1}}function h(e){o(function(e){return!!u(e)&&!!c(new e)}(e));var t=function(e){try{return new e({type:"bytes"}),!0}catch(e){return!1}}(e);return function(r,n){var i=(void 0===n?{}:n).type;if("bytes"!==(i=_(i))||t||(i=void 0),r.constructor===e&&("bytes"!==i||l(r)))return r;var o=p(r,{type:i});return new e(o)}}function p(e,t){var r=(void 0===t?{}:t).type;return o(c(e)),o(!1===e.locked),"bytes"===(r=_(r))?new b(e):new g(e)}function _(e){var t=String(e);if("bytes"===t)return t;if(void 0===e)return e;throw new RangeError("Invalid type is specified")}var y=function(){function e(e){this._underlyingReader=void 0,this._readerMode=void 0,this._readableStreamController=void 0,this._pendingRead=void 0,this._underlyingStream=e,this._attachDefaultReader()}return e.prototype.start=function(e){this._readableStreamController=e},e.prototype.cancel=function(e){return o(void 0!==this._underlyingReader),this._underlyingReader.cancel(e)},e.prototype._attachDefaultReader=function(){if("default"!==this._readerMode){this._detachReader();var e=this._underlyingStream.getReader();this._readerMode="default",this._attachReader(e)}},e.prototype._attachReader=function(e){var t=this;o(void 0===this._underlyingReader),this._underlyingReader=e;var r=this._underlyingReader.closed;r&&r.then((function(){return t._finishPendingRead()})).then((function(){e===t._underlyingReader&&t._readableStreamController.close()}),(function(r){e===t._underlyingReader&&t._readableStreamController.error(r)})).catch(a)},e.prototype._detachReader=function(){void 0!==this._underlyingReader&&(this._underlyingReader.releaseLock(),this._underlyingReader=void 0,this._readerMode=void 0)},e.prototype._pullWithDefaultReader=function(){var e=this;this._attachDefaultReader();var t=this._underlyingReader.read().then((function(t){var r=t.value,n=t.done,i=e._readableStreamController;n?e._tryClose():i.enqueue(r)}));return this._setPendingRead(t),t},e.prototype._tryClose=function(){try{this._readableStreamController.close()}catch(e){}},e.prototype._setPendingRead=function(e){var t,r=this,n=function(){r._pendingRead===t&&(r._pendingRead=void 0)};this._pendingRead=t=e.then(n,n)},e.prototype._finishPendingRead=function(){var e=this;if(this._pendingRead){var t=function(){return e._finishPendingRead()};return this._pendingRead.then(t,t)}},e}(),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.pull=function(){return this._pullWithDefaultReader()},t}(y);function v(e){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}var b=function(e){function t(t){var r=this,n=l(t);return(r=e.call(this,t)||this)._supportsByob=n,r}return i(t,e),Object.defineProperty(t.prototype,"type",{get:function(){return"bytes"},enumerable:!0,configurable:!0}),t.prototype._attachByobReader=function(){if("byob"!==this._readerMode){o(this._supportsByob),this._detachReader();var e=this._underlyingStream.getReader({mode:"byob"});this._readerMode="byob",this._attachReader(e)}},t.prototype.pull=function(){if(this._supportsByob){var e=this._readableStreamController.byobRequest;if(void 0!==e)return this._pullWithByobRequest(e)}return this._pullWithDefaultReader()},t.prototype._pullWithByobRequest=function(e){var t=this;this._attachByobReader();var r=new Uint8Array(e.view.byteLength),n=this._underlyingReader.read(r).then((function(r){var n,i,o,a=r.value,s=r.done;t._readableStreamController;s?(t._tryClose(),e.respond(0)):(n=a,i=e.view,o=v(n),v(i).set(o,0),e.respond(a.byteLength))}));return this._setPendingRead(n),n},t}(y);function m(e){return o(function(e){return!!u(e)&&!!d(new e)}(e)),function(t){if(t.constructor===e)return t;var r=w(t);return new e(r)}}function w(e){o(d(e)),o(!1===e.locked);var t=e.getWriter();return new R(t)}var R=function(){function e(e){var t=this;this._writableStreamController=void 0,this._pendingWrite=void 0,this._state="writable",this._storedError=void 0,this._underlyingWriter=e,this._errorPromise=new Promise((function(e,r){t._errorPromiseReject=r})),this._errorPromise.catch(a)}return e.prototype.start=function(e){var t=this;this._writableStreamController=e,this._underlyingWriter.closed.then((function(){t._state="closed"})).catch((function(e){return t._finishErroring(e)}))},e.prototype.write=function(e){var t=this,r=this._underlyingWriter;if(null===r.desiredSize)return r.ready;var n=r.write(e);n.catch((function(e){return t._finishErroring(e)})),r.ready.catch((function(e){return t._startErroring(e)}));var i=Promise.race([n,this._errorPromise]);return this._setPendingWrite(i),i},e.prototype.close=function(){var e=this;return void 0===this._pendingWrite?this._underlyingWriter.close():this._finishPendingWrite().then((function(){return e.close()}))},e.prototype.abort=function(e){if("errored"!==this._state)return this._underlyingWriter.abort(e)},e.prototype._setPendingWrite=function(e){var t,r=this,n=function(){r._pendingWrite===t&&(r._pendingWrite=void 0)};this._pendingWrite=t=e.then(n,n)},e.prototype._finishPendingWrite=function(){var e=this;if(void 0===this._pendingWrite)return Promise.resolve();var t=function(){return e._finishPendingWrite()};return this._pendingWrite.then(t,t)},e.prototype._startErroring=function(e){var t=this;if("writable"===this._state){this._state="erroring",this._storedError=e;var r=function(){return t._finishErroring(e)};void 0===this._pendingWrite?r():this._finishPendingWrite().then(r,r),this._writableStreamController.error(e)}},e.prototype._finishErroring=function(e){"writable"===this._state&&this._startErroring(e),"erroring"===this._state&&(this._state="errored",this._errorPromiseReject(this._storedError))},e}();function W(e){return o(function(e){return!!u(e)&&!!f(new e)}(e)),function(t){if(t.constructor===e)return t;var r=S(t);return new e(r)}}function S(e){o(f(e));var t=e.readable,r=e.writable;o(!1===t.locked),o(!1===r.locked);var n,i=t.getReader();try{n=r.getWriter()}catch(e){throw i.releaseLock(),e}return new P(i,n)}var P=function(){function e(e,t){var r=this;this._transformStreamController=void 0,this._onRead=function(e){var t=e.done,n=e.value;if(!t)return r._transformStreamController.enqueue(n),r._reader.read().then(r._onRead)},this._onError=function(e){r._flushReject(e),r._transformStreamController.error(e),r._reader.cancel(e).catch(a),r._writer.abort(e).catch(a)},this._onTerminate=function(){r._flushResolve(),r._transformStreamController.terminate();var e=new TypeError("TransformStream terminated");r._writer.abort(e).catch(a)},this._reader=e,this._writer=t,this._flushPromise=new Promise((function(e,t){r._flushResolve=e,r._flushReject=t}))}return e.prototype.start=function(e){this._transformStreamController=e,this._reader.read().then(this._onRead).then(this._onTerminate,this._onError);var t=this._reader.closed;t&&t.then(this._onTerminate,this._onError)},e.prototype.transform=function(e){return this._writer.write(e)},e.prototype.flush=function(){var e=this;return this._writer.close().then((function(){return e._flushPromise}))},e}()},function(e,t,r){"use strict";function n(e){var t=atob(e);return Uint8Array.from([].map.call(t,(function(e){return e.charCodeAt(0)})))}Object.defineProperty(t,"__esModule",{value:!0}),t.base64ToUint8Array=n,t.default=n}]);
