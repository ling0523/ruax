!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Ruax=t():e.Ruax=t()}(self,(function(){return(()=>{"use strict";var e={579:(e,t,s)=>{var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaults={},this.beforeRequest=function(){},this.beforeResponse=function(){}}return o(e,[{key:"_getValidationConfig",value:function(e){if("object"!=(void 0===e?"undefined":a(e))&&(e={},Object.assign(e,this.defaults)),"string"!=typeof e.baseUrl&&(e.baseUrl=this.defaults.baseUrl),"string"!=typeof e.url&&(e.url=this.defaults.url),"object"!=a(e.data))e.data=this.defaults.data;else{var t=e.data;e.data={},Object.assign(e.data,this.defaults.data),Object.assign(e.data,t)}if(("string"!=typeof e.type||"POST"!=e.type.toLocaleUpperCase()&&"GET"!=e.type.toLocaleUpperCase())&&(e.type=this.defaults.type),("number"!=typeof e.timeout||isNaN(e.timeout))&&(e.timeout=this.defaults.timeout),("string"!=typeof e.dataType||"STRING"!=e.dataType.toLocaleUpperCase()&&"XML"!=e.dataType.toLocaleUpperCase()&&"HTML"!=e.dataType.toLocaleUpperCase()&&"JSON"!=e.dataType.toLocaleUpperCase()&&"BLOB"!=e.dataType.toLocaleUpperCase()&&"JSONP"!=e.dataType.toLocaleUpperCase())&&(e.dataType=this.defaults.dataType),"string"!=typeof e.jsonpCallback&&(e.jsonpCallback=this.defaults.jsonpCallback),"object"!=a(e.headers))e.headers=this.defaults.headers;else{var s=e.headers;e.headers={},Object.assign(e.headers,this.defaults.headers),Object.assign(e.headers,s)}return"string"!=typeof e.contentType&&!1!==e.contentType&&(e.contentType=this.defaults.contentType),"boolean"!=typeof e.processData&&(e.processData=this.defaults.processData),"boolean"!=typeof e.cache&&(e.cache=this.defaults.cache),"boolean"!=typeof e.async&&(e.async=this.defaults.async),"boolean"!=typeof e.withCredentials&&(e.withCredentials=this.defaults.withCredentials),"function"!=typeof e.beforeSend&&(e.beforeSend=this.defaults.beforeSend),"function"!=typeof e.complete&&(e.complete=this.defaults.complete),"function"!=typeof e.onProgress&&(e.onProgress=this.defaults.onProgress),"function"!=typeof e.cancelRequest&&(e.cancelRequest=this.defaults.cancelRequest),"function"!=typeof e.beforeRequest&&(e.beforeRequest=this.defaults.beforeRequest),"function"!=typeof e.beforeResponse&&(e.beforeResponse=this.defaults.beforeResponse),e}},{key:"_setDefaults",value:function(){"object"!=a(this.defaults)&&(this.defaults={}),"string"!=typeof this.defaults.baseUrl&&(this.defaults.baseUrl=""),"string"!=typeof this.defaults.url&&(this.defaults.url=""),"object"!=a(this.defaults.data)&&(this.defaults.data={}),("string"!=typeof this.defaults.type||"POST"!=this.defaults.type.toLocaleUpperCase()&&"GET"!=this.defaults.type.toLocaleUpperCase())&&(this.defaults.type="GET"),("number"!=typeof this.defaults.timeout||isNaN(this.defaults.timeout))&&(this.defaults.timeout=8e3),("string"!=typeof this.defaults.dataType||"STRING"!=this.defaults.dataType.toLocaleUpperCase()&&"XML"!=this.defaults.dataType.toLocaleUpperCase()&&"HTML"!=this.defaults.dataType.toLocaleUpperCase()&&"JSON"!=this.defaults.dataType.toLocaleUpperCase()&&"BLOB"!=this.defaults.dataType.toLocaleUpperCase()&&"JSONP"!=this.defaults.dataType.toLocaleUpperCase())&&(this.defaults.dataType="JSON"),"string"!=typeof this.defaults.jsonpCallback&&(this.defaults.jsonpCallback="callback"),"object"!=a(this.defaults.headers)&&(this.defaults.headers={}),"string"!=typeof this.defaults.contentType&&!1!==this.defaults.contentType&&(this.defaults.contentType="application/x-www-form-urlencoded"),"boolean"!=typeof this.defaults.processData&&(this.defaults.processData=!0),"boolean"!=typeof this.defaults.cache&&(this.defaults.cache=!0),"boolean"!=typeof this.defaults.async&&(this.defaults.async=!0),"boolean"!=typeof this.defaults.withCredentials&&(this.defaults.withCredentials=!1),"function"!=typeof this.defaults.beforeSend&&(this.defaults.beforeSend=function(){}),"function"!=typeof this.defaults.complete&&(this.defaults.complete=function(){}),"function"!=typeof this.defaults.onProgress&&(this.defaults.onProgress=function(){}),"function"!=typeof this.defaults.cancelRequest&&(this.defaults.cancelRequest=function(){}),"function"!=typeof this.defaults.beforeRequest&&(this.defaults.beforeRequest=function(){}),"function"!=typeof this.defaults.beforeResponse&&(this.defaults.beforeResponse=function(){})}},{key:"_getParams",value:function(e){var t=[];for(var s in e)t.push(encodeURIComponent(s)+"="+encodeURIComponent(e[s]));return t.join("&")}},{key:"create",value:function(e){var t=this;return this._setDefaults(),"function"!=typeof this.beforeRequest&&(this.beforeRequest=function(){}),"function"!=typeof this.beforeResponse&&(this.beforeResponse=function(){}),e=this._getValidationConfig(e),this.beforeRequest(e),e.beforeRequest(e),new Promise((function(s,a){var o=new XMLHttpRequest;if("blob"==e.dataType.toLocaleLowerCase()&&(o.responseType="blob"),o.onreadystatechange=function(n){if(4==o.readyState)if(e.complete(o),200==o.status){var r=void 0;if("json"==e.dataType.toLocaleLowerCase())try{r=JSON.parse(o.responseText)}catch(e){a(e)}else r="xml"==e.dataType.toLocaleLowerCase()?o.responseXML:"html"==e.dataType.toLocaleLowerCase()||"string"==e.dataType?o.responseText:"blob"==e.dataType.toLocaleLowerCase()?o.response:o.responseText;t.beforeResponse(o,r),e.beforeResponse(o,r),s(r)}else 0!=o.status&&(t.beforeResponse(o),e.beforeResponse(o),a(new Error("Request failed with status code "+o.status)));else 1==o.readyState&&e.beforeSend(o)},o.ontimeout=function(s){t.beforeResponse(o),e.beforeResponse(o),a(new Error("timeout of "+e.timeout+"ms exceeded"))},o.upload.onprogress=function(t){e.onProgress(t)},"jsonp"==e.dataType.toLocaleLowerCase()){e.beforeSend();var n=("jsonp_"+Math.random()).replace(".",""),r=document.getElementsByTagName("head")[0];e.data[e.jsonpCallback]=n;var i=document.createElement("script");r.appendChild(i),window[n]=function(a){e.complete(),r.removeChild(i),clearTimeout(i.timer),window[n]=null,t.beforeResponse(a),e.beforeResponse(a),s(a)},(e.baseUrl+e.url).indexOf("?")>-1?i.src=e.baseUrl+e.url+"&"+t._getParams(e.data):i.src=e.baseUrl+e.url+"?"+t._getParams(e.data),i.timer=setTimeout((function(){e.complete(),window[n]=null,r.removeChild(i),t.beforeResponse(),e.beforeResponse(),a(new Error("timeout of "+e.timeout+"ms exceeded"))}),e.timeout)}else{if("get"==e.type.toLocaleLowerCase()){for(var l in t._getParams(e.data)?o.open("GET",e.baseUrl+e.url+"?"+t._getParams(e.data),e.async):o.open("GET",e.baseUrl+e.url,e.async),e.async&&(o.timeout=e.timeout),e.headers)o.setRequestHeader(l,e.headers[l]);"string"==typeof e.contentType&&o.setRequestHeader("Content-Type",e.contentType),o.withCredentials=e.withCredentials,o.send(null)}else if("post"==e.type.toLocaleLowerCase()){for(var f in o.open("POST",e.baseUrl+e.url,e.async),1==e.async&&(o.timeout=e.timeout),e.headers)o.setRequestHeader(f,e.headers[f]);"string"==typeof e.contentType&&o.setRequestHeader("Content-Type",e.contentType),e.processData&&(e.data=t._getParams(e.data)),o.withCredentials=e.withCredentials,o.send(e.data)}e.cancelRequest((function(){o.abort()}))}}))}},{key:"post",value:function(e,t){var s={url:e,data:t,type:"POST"};return this.create(s)}},{key:"get",value:function(e,t){var s={url:e,data:t,type:"GET"};return this.create(s)}}]),e}(),r=s(306);console.log("%c感谢使用"+r.name+"，当前版本：%c v"+r.version+"\n%c如果你觉得"+r.name+"还不错，不妨去github点个star\ngithub地址：%c"+r.github,"color:#808080;","color:#008a00","color:#808080;","color:#008a00"),e.exports=n},306:e=>{e.exports=JSON.parse('{"name":"ruax","version":"1.6.3","description":"一个轻量级的Javascript异步数据请求库","main":"dist/ruax.js","private":false,"scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","serve":"webpack --mode development","build":"webpack --mode production"},"author":"lingkai","license":"MIT","dependencies":{},"babel":{"presets":["env"],"plugins":[]},"devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-preset-env":"^1.7.0"},"github":"https://github.com/lovelin0523/ruax"}')}},t={};return function s(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,s),n.exports}(579)})()}));