!function(a,b,c){"use strict";function d(a){return null!=a&&""!==a&&"hasOwnProperty"!==a&&h.test("."+a)}function e(a,b){if(!d(b))throw g("badmember",'Dotted member path "@{0}" is invalid.',b);for(var e=b.split("."),f=0,h=e.length;h>f&&a!==c;f++){var i=e[f];a=null!==a?a[i]:c}return a}function f(a,c){c=c||{},b.forEach(c,function(a,b){delete c[b]});for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&"$"!==d.charAt(1)&&(c[d]=a[d]);return c}var g=b.$$minErr("$resource"),h=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;b.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(a,d){function h(a){return i(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function i(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}function j(a,b){this.template=a,this.defaults=b||{},this.urlParams={}}function k(h,i,r){function s(a,b){var c={};return b=o({},i,b),n(b,function(b,d){q(b)&&(b=b()),c[d]=b&&b.charAt&&"@"==b.charAt(0)?e(a,b.substr(1)):b}),c}function t(a){return a.resource}function u(a){f(a||{},this)}var v=new j(h);return r=o({},l,r),n(r,function(e,h){var i=/^(POST|PUT|PATCH)$/i.test(e.method);u[h]=function(h,j,k,l){var r,w,x,y={};switch(arguments.length){case 4:x=l,w=k;case 3:case 2:if(!q(j)){y=h,r=j,w=k;break}if(q(h)){w=h,x=j;break}w=j,x=k;case 1:q(h)?w=h:i?r=h:y=h;break;case 0:break;default:throw g("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var z=this instanceof u,A=z?r:e.isArray?[]:new u(r),B={},C=e.interceptor&&e.interceptor.response||t,D=e.interceptor&&e.interceptor.responseError||c;n(e,function(a,b){"params"!=b&&"isArray"!=b&&"interceptor"!=b&&(B[b]=p(a))}),i&&(B.data=r),v.setUrlParams(B,o({},s(r,e.params||{}),y),e.url);var E=a(B).then(function(a){var c=a.data,d=A.$promise;if(c){if(b.isArray(c)!==!!e.isArray)throw g("badcfg","Error in resource configuration. Expected response to contain an {0} but got an {1}",e.isArray?"array":"object",b.isArray(c)?"array":"object");e.isArray?(A.length=0,n(c,function(a){A.push(new u(a))})):(f(c,A),A.$promise=d)}return A.$resolved=!0,a.resource=A,a},function(a){return A.$resolved=!0,(x||m)(a),d.reject(a)});return E=E.then(function(a){var b=C(a);return(w||m)(b,a.headers),b},D),z?E:(A.$promise=E,A.$resolved=!1,A)},u.prototype["$"+h]=function(a,b,c){q(a)&&(c=b,b=a,a={});var d=u[h].call(this,a,this,b,c);return d.$promise||d}}),u.bind=function(a){return k(h,o({},i,a),r)},u}var l={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},m=b.noop,n=b.forEach,o=b.extend,p=b.copy,q=b.isFunction;return j.prototype={setUrlParams:function(a,c,d){var e,f,i=this,j=d||i.template,k=i.urlParams={};n(j.split(/\W/),function(a){if("hasOwnProperty"===a)throw g("badname","hasOwnProperty is not a valid parameter name.");!new RegExp("^\\d+$").test(a)&&a&&new RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(j)&&(k[a]=!0)}),j=j.replace(/\\:/g,":"),c=c||{},n(i.urlParams,function(a,d){e=c.hasOwnProperty(d)?c[d]:i.defaults[d],b.isDefined(e)&&null!==e?(f=h(e),j=j.replace(new RegExp(":"+d+"(\\W|$)","g"),f+"$1")):j=j.replace(new RegExp("(/?):"+d+"(\\W|$)","g"),function(a,b,c){return"/"==c.charAt(0)?c:b+c})}),j=j.replace(/\/+$/,""),j=j.replace(/\/\.(?=\w+($|\?))/,"."),a.url=j.replace(/\/\\\./,"/."),n(c,function(b,c){i.urlParams[c]||(a.params=a.params||{},a.params[c]=b)})}},k}])}(window,window.angular),function(a,b,c){"use strict";b.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(a,d){function e(){var a,e,f,i;for(a in h)k(g[a])&&d.cookies(a,c);for(a in g)e=g[a],b.isString(e)?e!==h[a]&&(d.cookies(a,e),i=!0):b.isDefined(h[a])?g[a]=h[a]:delete g[a];if(i){i=!1,f=d.cookies();for(a in g)g[a]!==f[a]&&(k(f[a])?delete g[a]:g[a]=f[a],i=!0)}}var f,g={},h={},i=!1,j=b.copy,k=b.isUndefined;return d.addPollFn(function(){var b=d.cookies();f!=b&&(f=b,j(b,h),j(b,g),i&&a.$apply())})(),i=!0,a.$watch(e),g}]).factory("$cookieStore",["$cookies",function(a){return{get:function(c){var d=a[c];return d?b.fromJson(d):d},put:function(c,d){a[c]=b.toJson(d)},remove:function(b){delete a[b]}}}])}(window,window.angular),function(a,b){"use strict";function c(){this.$get=["$$sanitizeUri",function(a){return function(b){var c=[];return f(b,i(c,function(b,c){return!/^unsafe/.test(a(b,c))})),c.join("")}}]}function d(a){var c=[],d=i(c,b.noop);return d.chars(a),c.join("")}function e(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function f(a,c){function d(a,d,f,h){if(d=b.lowercase(d),x[d])for(;s.last()&&y[s.last()];)e("",s.last());w[d]&&s.last()==d&&e("",d),h=t[d]||!!h,h||s.push(d);var i={};f.replace(m,function(a,b,c,d,e){var f=c||d||e||"";i[b]=g(f)}),c.start&&c.start(d,i,h)}function e(a,d){var e,f=0;if(d=b.lowercase(d))for(f=s.length-1;f>=0&&s[f]!=d;f--);if(f>=0){for(e=s.length-1;e>=f;e--)c.end&&c.end(s[e]);s.length=f}}var f,h,i,s=[],u=a;for(s.last=function(){return s[s.length-1]};a;){if(h=!0,s.last()&&z[s.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+s.last()+"[^>]*>","i"),function(a,b){return b=b.replace(p,"$1").replace(r,"$1"),c.chars&&c.chars(g(b)),""}),e("",s.last());else if(0===a.indexOf("<!--")?(f=a.indexOf("--",4),f>=0&&a.lastIndexOf("-->",f)===f&&(c.comment&&c.comment(a.substring(4,f)),a=a.substring(f+3),h=!1)):q.test(a)?(i=a.match(q),i&&(a=a.replace(i[0],""),h=!1)):o.test(a)?(i=a.match(l),i&&(a=a.substring(i[0].length),i[0].replace(l,e),h=!1)):n.test(a)&&(i=a.match(k),i&&(a=a.substring(i[0].length),i[0].replace(k,d),h=!1)),h){f=a.indexOf("<");var v=0>f?a:a.substring(0,f);a=0>f?"":a.substring(f),c.chars&&c.chars(g(v))}if(a==u)throw j("badparse","The sanitizer was unable to parse the following block of html: {0}",a);u=a}e()}function g(a){if(!a)return"";var b=E.exec(a),c=b[1],d=b[3],e=b[2];return e&&(D.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in D?D.textContent:D.innerText),c+e+d}function h(a){return a.replace(/&/g,"&amp;").replace(s,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i(a,c){var d=!1,e=b.bind(a,a.push);return{start:function(a,f,g){a=b.lowercase(a),!d&&z[a]&&(d=a),d||A[a]!==!0||(e("<"),e(a),b.forEach(f,function(d,f){var g=b.lowercase(f),i="img"===a&&"src"===g||"background"===g;C[g]!==!0||B[g]===!0&&!c(d,i)||(e(" "),e(f),e('="'),e(h(d)),e('"'))}),e(g?"/>":">"))},end:function(a){a=b.lowercase(a),d||A[a]!==!0||(e("</"),e(a),e(">")),a==d&&(d=!1)},chars:function(a){d||e(h(a))}}}var j=b.$$minErr("$sanitize"),k=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,l=/^<\s*\/\s*([\w:-]+)[^>]*>/,m=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,n=/^</,o=/^<\s*\//,p=/<!--(.*?)-->/g,q=/<!DOCTYPE([^>]*?)>/i,r=/<!\[CDATA\[(.*?)]]>/g,s=/([^\#-~| |!])/g,t=e("area,br,col,hr,img,wbr"),u=e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),v=e("rp,rt"),w=b.extend({},v,u),x=b.extend({},u,e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),y=b.extend({},v,e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),z=e("script,style"),A=b.extend({},t,x,y,w),B=e("background,cite,href,longdesc,src,usemap"),C=b.extend({},B,e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),D=document.createElement("pre"),E=/^(\s*)([\s\S]*?)(\s*)$/;b.module("ngSanitize",[]).provider("$sanitize",c),b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,e=/^mailto:/;return function(f,g){function h(a){a&&n.push(d(a))}function i(a,c){n.push("<a "),b.isDefined(g)&&(n.push('target="'),n.push(g),n.push('" ')),n.push('href="'),n.push(a),n.push('">'),h(c),n.push("</a>")}if(!f)return f;for(var j,k,l,m=f,n=[];j=m.match(c);)k=j[0],j[2]==j[3]&&(k="mailto:"+k),l=j.index,h(m.substr(0,l)),i(k,j[0].replace(e,"")),m=m.substring(l+j[0].length);return h(m),a(n.join(""))}}])}(window,window.angular),function(a,b){"use strict";function c(){function a(a,c){return b.extend(new(b.extend(function(){},{prototype:a})),c)}function c(a,b){var c=b.caseInsensitiveMatch,d={originalPath:a,regexp:a},e=d.keys=[];return a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,function(a,b,c,d){var f="?"===d?d:null,g="*"===d?d:null;return e.push({name:c,optional:!!f}),b=b||"",""+(f?"":b)+"(?:"+(f?b:"")+(g&&"(.+?)"||"([^/]+)")+(f||"")+")"+(f||"")}).replace(/([\/$\*])/g,"\\$1"),d.regexp=new RegExp("^"+a+"$",c?"i":""),d}var d={};this.when=function(a,e){if(d[a]=b.extend({reloadOnSearch:!0},e,a&&c(a,e)),a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";d[f]=b.extend({redirectTo:a},c(f,e))}return this},this.otherwise=function(a){return this.when(null,a),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(c,e,f,g,h,i,j,k){function l(a,b){var c=b.keys,d={};if(!b.regexp)return null;var e=b.regexp.exec(a);if(!e)return null;for(var f=1,g=e.length;g>f;++f){var h=c[f-1],i="string"==typeof e[f]?decodeURIComponent(e[f]):e[f];h&&i&&(d[h.name]=i)}return d}function m(){var a=n(),d=q.current;a&&d&&a.$$route===d.$$route&&b.equals(a.pathParams,d.pathParams)&&!a.reloadOnSearch&&!p?(d.params=a.params,b.copy(d.params,f),c.$broadcast("$routeUpdate",d)):(a||d)&&(p=!1,c.$broadcast("$routeChangeStart",a,d),q.current=a,a&&a.redirectTo&&(b.isString(a.redirectTo)?e.path(o(a.redirectTo,a.params)).search(a.params).replace():e.url(a.redirectTo(a.pathParams,e.path(),e.search())).replace()),g.when(a).then(function(){if(a){var c,d,e=b.extend({},a.resolve);return b.forEach(e,function(a,c){e[c]=b.isString(a)?h.get(a):h.invoke(a)}),b.isDefined(c=a.template)?b.isFunction(c)&&(c=c(a.params)):b.isDefined(d=a.templateUrl)&&(b.isFunction(d)&&(d=d(a.params)),d=k.getTrustedResourceUrl(d),b.isDefined(d)&&(a.loadedTemplateUrl=d,c=i.get(d,{cache:j}).then(function(a){return a.data}))),b.isDefined(c)&&(e.$template=c),g.all(e)}}).then(function(e){a==q.current&&(a&&(a.locals=e,b.copy(a.params,f)),c.$broadcast("$routeChangeSuccess",a,d))},function(b){a==q.current&&c.$broadcast("$routeChangeError",a,d,b)}))}function n(){var c,f;return b.forEach(d,function(d){!f&&(c=l(e.path(),d))&&(f=a(d,{params:b.extend({},e.search(),c),pathParams:c}),f.$$route=d)}),f||d[null]&&a(d[null],{params:{},pathParams:{}})}function o(a,c){var d=[];return b.forEach((a||"").split(":"),function(a,b){if(0===b)d.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];d.push(c[f]),d.push(e[2]||""),delete c[f]}}),d.join("")}var p=!1,q={routes:d,reload:function(){p=!0,c.$evalAsync(m)}};return c.$on("$locationChangeSuccess",m),q}]}function d(){this.$get=function(){return{}}}function e(a,c,d){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(e,f,g,h,i){function j(){l&&(l.$destroy(),l=null),m&&(d.leave(m),m=null)}function k(){var g=a.current&&a.current.locals,h=g&&g.$template;if(h){var k=e.$new(),p=a.current,q=i(k,function(a){d.enter(a,null,m||f,function(){!b.isDefined(n)||n&&!e.$eval(n)||c()}),j()});m=q,l=p.scope=k,l.$emit("$viewContentLoaded"),l.$eval(o)}else j()}var l,m,n=g.autoscroll,o=g.onload||"";e.$on("$routeChangeSuccess",k),k()}}}function f(a,b,c){return{restrict:"ECA",priority:-400,link:function(d,e){var f=c.current,g=f.locals;e.html(g.$template);var h=a(e.contents());if(f.controller){g.$scope=d;var i=b(f.controller,g);f.controllerAs&&(d[f.controllerAs]=i),e.data("$ngControllerController",i),e.children().data("$ngControllerController",i)}h(d)}}}var g=b.module("ngRoute",["ng"]).provider("$route",c);g.provider("$routeParams",d),g.directive("ngView",e),g.directive("ngView",f),e.$inject=["$route","$anchorScroll","$animate"],f.$inject=["$compile","$controller","$route"]}(window,window.angular),function(){var a,b,c={}.hasOwnProperty,d=function(a,b){return function(){return a.apply(b,arguments)}},e=[].slice,f=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};b=angular.module("Parse",[]),a={},b.factory("persist",["$q","$window",function(a,b){var d,e;return e=b.localStorage,d={get:function(a){var b,c,d,f;for(angular.isArray(a)||(a=[a]),c={},d=0,f=a.length;f>d;d++)b=a[d],c[b]=e.key(b)?e.getItem(b):void 0;return c},set:function(a){var b,d;for(b in a)c.call(a,b)&&(d=a[b],e.setItem(b,d));return!0},remove:function(a){var b,c,d;for(angular.isArray(a)||(a=[a]),c=0,d=a.length;d>c;c++)b=a[c],localStorage.removeItem(b);return!0}}}]),b.factory("ParseUtils",["$http","$window",function(b,c){var d;return d={BaseUrl:"https://api.parse.com/1",_request:function(d,e,f,g){var h,i,j,k;return angular.isArray(e)?(j=e[0],i=e[1],e=""+j.pathBase()+"/"+i):e.className?e=""+e.pathBase():e.objectId&&(null!=(k=e.constructor)?k.className:void 0)&&(e=""+e.constructor.pathBase()+"/"+e.objectId),h={"X-Parse-Application-Id":a.applicationId,"X-Parse-REST-API-KEY":a.apiKey,"Content-Type":"application/json"},c.localStorage.key("PARSE_SESSION_TOKEN")&&(h["X-Parse-Session-Token"]=c.localStorage.getItem("PARSE_SESSION_TOKEN")),b({method:d,url:this.BaseUrl+e,data:f,params:g,headers:h})},func:function(a){return function(b){return d.callFunction(a,b)}},callFunction:function(a,b){return d._request("POST","/functions/"+a,b).then(function(a){return a.data.result})}}}]),b.factory("ParseAuth",["persist","ParseUser","ParseUtils","$q",function(a,b,c,d){var e;return e={sessionToken:null,currentUser:null,_login:function(b){var c;return e.currentUser=b,e.sessionToken=b.sessionToken,c=b.attributes(),c.objectId=b.objectId,a.set({PARSE_USER_INFO:JSON.stringify(c),PARSE_SESSION_TOKEN:b.sessionToken}),b},resumeSession:function(){var c,f,g,h,i,j;if(g=a.get(["PARSE_SESSION_TOKEN","PARSE_USER_INFO"]),j=g.PARSE_USER_INFO,h=g.PARSE_SESSION_TOKEN,c=d.defer(),j&&h)try{i=new b(JSON.parse(j)),e.currentUser=i,e.sessionToken=h,c.resolve(i.refresh())}catch(k){f=k,c.reject("User attributes not parseable")}else c.reject("User attributes or Session Token not found");return c.promise},register:function(a,c){return new b({username:a,password:c}).save().then(function(a){return e._login(a)})},login:function(a,d){return c._request("GET","/login",null,{username:a,password:d}).then(function(a){return e._login(new b(a.data))})},logout:function(){return a.remove(["PARSE_SESSION_TOKEN","PARSE_USER_INFO"]),e.currentUser=null,e.sessionToken=null}}}]),b.factory("ParseModel",["ParseUtils",function(a){var b;return b=function(){function b(a){this.isDirty=d(this.isDirty,this),this._saveCache=d(this._saveCache,this),this.encodeParse=d(this.encodeParse,this),this.attributes=d(this.attributes,this),this.destroy=d(this.destroy,this),this.update=d(this.update,this),this.create=d(this.create,this),this.refresh=d(this.refresh,this),this.save=d(this.save,this),this.isNew=d(this.isNew,this);var b,c;for(b in a)c=a[b],this[b]=c;this._saveCache()}return b.pathBase=function(){return"/classes/"+this.className},b.find=function(b,c){var d=this;return a._request("GET","/classes/"+this.className+"/"+b,null,c).then(function(a){return new d(a.data)})},b.query=function(b){var c=this;return a._request("GET",this,null,b).then(function(a){var b,d,e,f,g;for(f=a.data.results,g=[],d=0,e=f.length;e>d;d++)b=f[d],g.push(new c(b));return g})},b.configure=function(){var a,b;return b=arguments[0],a=2<=arguments.length?e.call(arguments,1):[],this.className=b,this.attributes=a},b.prototype.isNew=function(){return!this.objectId},b.prototype.save=function(){return this.isNew()?this.create():this.update()},b.prototype.refresh=function(){var b=this;return a._request("GET",this).then(function(a){var d,e,f;f=a.data;for(d in f)c.call(f,d)&&(e=f[d],b[d]=e);return b})},b.prototype.create=function(){var b=this;return a._request("POST",this.constructor,this.encodeParse()).then(function(a){var c;return b.objectId=a.data.objectId,b.createdAt=a.data.createdAt,(c=a.data.sessionToken)&&(b.sessionToken=c),b._saveCache(),b})},b.prototype.update=function(){var b=this;return a._request("PUT",this,this.encodeParse()).then(function(a){return b.updatedAt=a.data.updatedAt,b._saveCache(),b})},b.prototype.destroy=function(){var b=this;return a._request("DELETE",this).then(function(){return b.objectId=null,b})},b.prototype.attributes=function(){var a,b,c,d,e;for(b={},e=this.constructor.attributes,c=0,d=e.length;d>c;c++)a=e[c],b[a]=this[a];return b},b.prototype.encodeParse=function(){var a,b,c,d,e,f,g;for(c={},f=this.constructor.attributes,d=0,e=f.length;e>d;d++)a=f[d],a in this&&(b=this[a],null!=b&&b.objectId&&(null!=(g=b.constructor)?g.className:void 0)&&(b={__type:"Pointer",className:b.constructor.className,objectId:b.objectId}),c[a]=b);return c},b.prototype._saveCache=function(){return this._cache=angular.copy(this.encodeParse())},b.prototype.isDirty=function(){return!angular.equals(this._cache,this.encodeParse())},b}()}]),b.factory("ParseDefaultUser",["ParseModel",function(a){var b,c;return b=function(a){function b(){return c=b.__super__.constructor.apply(this,arguments)}return f(b,a),b.configure("users","username","password"),b.pathBase=function(){return"/users"},b.prototype.save=function(){return b.__super__.save.call(this).then(function(a){return delete a.password,a})},b}(a)}]),b.factory("ParseUser",["ParseDefaultUser","ParseCustomUser",function(a,b){return null!=b&&new b instanceof a?b:a}]),b.provider("Parse",function(){return{initialize:function(b,c){return a.apiKey=c,a.applicationId=b},$get:["ParseModel","ParseUser","ParseAuth","ParseUtils",function(a,b,c,d){return{BaseUrl:d.BaseUrl,Model:a,User:b,auth:c}}]}}),angular.module("Parse").factory("ParseCustomUser",["ParseDefaultUser",function(a){return a}])}.call(this);