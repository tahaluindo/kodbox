/*! Powered by kodbox;hash:2c97e61ee2e337f09a8e [2022/04/07 23:59:35] */
!function(s){function e(e){for(var t,n,i=e[0],o=e[1],r=0,a=[];r<i.length;r++)n=i[r],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&a.push(d[n][0]),d[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t]);for(u&&u(e);a.length;)a.shift()()}var n={},d={"1":0};function c(e){if(n[e])return n[e].exports;var t=n[e]={"i":e,"l":!1,"exports":{}};return s[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(o){var e=[],n=d[o];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise(function(e,t){n=d[o]=[e,t]});e.push(n[2]=t);var i,r=document.createElement("script");r.charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.src=function u(e){return c.p+""+({"4":"vendor"}[e]||e)+".js?v=2c97e61e"}(o);var a=new Error;i=function(e){r.onerror=r.onload=null,clearTimeout(s);var t=d[o];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;a.message="Loading chunk "+o+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,t[1](a)}d[o]=undefined}};var s=setTimeout(function(){i({"type":"timeout","target":r})},12e4);r.onerror=r.onload=i,document.head.appendChild(r)}return Promise.all(e)},c.m=s,c.c=n,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{"enumerable":!0,"get":n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{"value":"Module"}),Object.defineProperty(e,"__esModule",{"value":!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{"enumerable":!0,"value":t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var t=window["webpackJsonp"]=window["webpackJsonp"]||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var u=i;c(c.s=629)}({"18":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),window.Promise||(window.Promise=Promise);var i="./static/";if(window.API_HOST){var o=API_HOST.split("/");o.pop(),i=o.join("/")+"/static/"}window.API_URL=function(e,t){var n=window.API_HOST,i="&";return _.isNull(t)||_.isUndefined(t)?n+(e||""):(-1==n.indexOf("?")&&(i="?"),Cookie.accessToken&&(t+="&accessToken="+Cookie.accessToken),n+(e||"")+i+(t||""))},window.API_URL_TRUE=function(e){var t=(e=e||window.location.href).replace(API_URL(),"").replace(G.kod.APP_HOST,"").replace("?","&");return G.kod.APP_HOST+"?"+t};var r=window.STATIC_PATH||i;n.p=r+"app/dist/";var a=n.e(4).then(function(e){n(521),n(522),n(523),n(524),n(103),n(109),n(525),n(526),n(527),n(528),n(529),n(530),n(531),n(532),n(533),n(534),n(110),n(535),n(536),n(537),n(538),n(539),n(540),n(541),n(542),n(543),n(544),n(545),n(546),window.Pinyin=n(547)["default"],n(548),n(549),n(550),n(551),n(552),n(553),n(554),n(555),n(556),n(557),n(107),n(108),n(106),n(558),n(559),n(560),n(561),n(562),n(104),n(105),n(563),window.Backbone.$=$,window.Events=Backbone.Events,u()}.bind(null,n))["catch"](n.oe),s=Date.now(),u=function u(){var n=seajs.use;seajs.use=function(){var e=_.toArray(arguments),i=function i(e){var t=_.get(window,"G.kod.version",""),n=_.get(window,"G.kod.build","");return!(t=1==_.get(window,"G.kod.ENV_DEV")?s:t+"."+n)||_.includes(e,"&v=")||_.includes(e,"?v=")?e:_.includes(e,"?")?e:(_.endsWith(e,".htm")||_.endsWith(e,".html")||_.endsWith(e,".css")||_.endsWith(e,".json")||_.endsWith(e,".js")||(e+=".js"),e+"?v="+t)},t=e[0];_.isString(t)?e[0]=i(t):_.isArray(t)&&(e[0]=_.map(t,function(e){return i(e)})),n.apply(seajs,e)},window._ktime=dateFormat(!1,"dhi"),window.requireAsync=seajs.use,window.requirePromise=function(e){var t=$.Deferred();return seajs.use(e,t.resolve),t}};(function w(){if("development"==window.lessENV){var i=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(e,t){var n=Array.prototype.slice.call(arguments,0);return t.match(/\.less$/)&&(n[1]=t+"?_t="+s),i.apply(this,n)}}})();var d=function d(){var e=window.STATIC_PATH_ALL||i;requireAsync([e+"style/lib/alifont/iconfont.css",e+"style/lib/font-icon/style.css"])},c=function c(){var e=API_URL("user/view/plugins","v="+time());return requirePromise(e)},l=function l(){Events.trigger("user.optionLoadBefore");var e=API_URL("user/view/options","v="+time());return requirePromise("text!"+e).then(function(e){if(e&&((e=JSON.parse(e))&&e.code&&e.data)){window.G=_.extend(window.G||{},e.data);var t=G.kod.staticPath,n=API_URL();if(!_.startsWith(t,"http")){if(_.startsWith(t,"/"))t=$.parseUrl(n).origin+t;else t=n.substr(0,_.lastIndexOf(n,"/"))+"/"+t;t=t.replace("/./","/")}window.STATIC_PATH_ALL=window.STATIC_PATH_ALL||G.kod.APP_HOST+"static/",window.STATIC_PATH=t,window.VENDER_PATH=window.STATIC_PATH+"app/vender/",window.API_HOST=G.kod.appApi,$.dialog.defaults.path=window.STATIC_PATH+"app/vender/artDialog-icon/",requireAsync(window.STATIC_PATH+"style/lib/alifont/iconfont.js"),d(),Events.trigger("user.optionLoadAfter")}})},f=function f(){var e=API_URL("user/view/lang","v="+time());return requirePromise("text!"+e).then(function(e){(e=e&&JSON.parse(e))&&e.code&&e.data&&(window.LNG=_.extend(window.LNG||{},_.get(e,"data.list")),window.G.lang=_.get(e,"data.lang"),LNG.find=function(n){var i={};return _.each(LNG,function(e,t){_.includes(e,n)&&(i[t]=e)}),i},LNG.set=function(e){e&&_.isObject(e)&&_.extend(LNG,e)},LNG.make=function(e){var t=_.toArray(arguments),n=LNG[e];if(!n)return e;for(var i=1;i<t.length;i++)n=n.replace(/(%d|%s)/,t[i]);return n},LNG.space='<i class="char-space"></i>',LNG.logo=function(e){var t=window.G.system.options||{},n="image"==t.systemNameType,i=t.systemLogo,o=STATIC_PATH+"images/common/logo.png";_.includes(["zh-CN","zh-TW"],G.lang)||(o=STATIC_PATH+"images/common/logo-en.png");var r=G.kod.companyInfo||!1;if(r&&"text"==r.logoType&&r.logoText)return'<span class="logo-text">'+r.logoText+"</span>";var a=function a(e){return'<img src="'+e+'" onerror="this.src=\''+o+"'\"/>"},s=function s(e){return'<span class="logo-text">'+e+"</span>"};if("copyright"!=e)return"login"==e?n?a(i):s(t.systemName):a(i);var u=LNG["common.copyright.name"];return"A"==window.G.kod.versionType&&LNG["common.oemCompany"]!=window.md5(_.get(window,"G.kod.channel",""))&&(i=o,u="kodbox"),n?a(i):s(u)})})},p=function p(){return a.then(function(){NProgress.isStarted()||NProgress.start(),NProgress.set(.5)}).then(c).then(function(){NProgress.set(.6)}).then(l).then(function(){NProgress.set(.8)}).then(f).then(function(){NProgress.done(),$("body > .loading-body").fadeOut(1e3,function(){$(this).remove()})})},h=function h(){return window.API_HOST?a.then(function(){NProgress.isStarted()||NProgress.start(),NProgress.set(.6)}).then(l).then(function(){NProgress.set(.8)}).then(f).then(function(){NProgress.done()}):a.then()};t.loadMain=p,t.loadApi=h,t.loadOption=l,t.loadLang=f,t.loadPlugin=c},"49":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t["default"]=function(){i(),o(),r(),s(),u(),Events.trigger("windowReady");var e=document.createEvent("CustomEvent");e.initCustomEvent("kodReadyView",!0,!0,{"source":window}),document.dispatchEvent(e)};var i=function i(){if($.fn.perfectScroll){var e=function e(){$(".perfectScroll").perfectScroll()};$(window).bind("resize",e),$(window).bind("scoller",e)}},o=function o(){if(!$.isWindowTouch()&&$.fn.poshytip){var e=$("[title]");e.poshytip({"className":"ptips-skin","liveEvents":!0,"slide":!1,"alignTo":"cursor","alignX":"right","alignY":"bottom","showAniDuration":150,"hideAniDuration":200,"offsetY":10,"offsetX":20,"showTimeout":function(){$(".ptips-skin").length;var e=1500;return $(this).attr("title-timeout")&&(e=parseInt($(this).attr("title-timeout"))),e},"content":function(e){if(!($(this).hasClass("context-menu-active")||$(this).is(":focus")||e.hasClass("disable")||e.hasClass("disable-title"))){e.addClass("yellow");var t=$(this).data("title.poshytip");if($(this).attr("title-data")){var n=$($(this).attr("title-data"));t=n.is("input")||n.is("textarea")?n.val():n.html()}return-1==(t=t||"").indexOf("<")&&-1==t.indexOf(">")&&(t=t.replace(/\n/g,"<br/>")),t}}}),$(document).bind("keydown keyup mousedown mouseup click",function(){$.fn.poshytip&&($(e).poshytip("clearTimeouts").poshytip("hide"),$(".ptips-skin").remove())}),$("input,textarea").live("focus",function(){$.fn.poshytip&&($(e).poshytip("hide"),$(".ptips-skin").remove())})}},r=function r(){window.API_HOST&&(template.defaults.cache=!0,template.defaults.minimize=!1,template.defaults.compileDebug=!1)},a=function a(){if(!$.isWindowTouch()){var e=[".menuBar .menu-item",".menu-group-submenu .menu-item-sub",".menuBar .menu-dropdown-user > .ripple-item",".setting-menu-left .menu-item-content",".admin-menu-left .menu-item-content"].join(",");$.hoverAnimate({"el":e,"delegate":"body"})}},s=function s(){var e="a,button,.ripple-item,.context-menu-item,.kui-btn,.btn,.button";if($.isWindowTouch()&&(e="a,button,.ripple-item,.kui-btn,.btn,.button"),loadRipple(e,".disable-ripple,.disabled,.disable,.ztree,.not-selectable"),a(),$(window).bind("resize",function(){Events.trigger("window.resize")}),$("body").delegate(".password-view","mousedown touchstart",function(e){var t=$(this),n=t.parent().children('input[type="password"]');if(1==n.length){var i=$(n.get(0)).prop("outerHTML");i=i.replace(/type\s*=\s*("|')?password("|')?/i,'type="text"');var o=$(i).insertAfter(n);n.addClass("hidden"),t.addClass("active"),o.val(n.val()),$($("input[type='text']").get(0)),$(window).one("mouseup touchend",function(){n.removeClass("hidden"),t.removeClass("active"),o.remove()})}}),$("body").delegate("img,a","dragstart",function(e){return stopPP(e)}),window.API_HOST){$("body").delegate("[link-href]","click",function(e){return u(e,"")}),$("body").delegate("a","click",function(e){"#"==$(this).attr("href")&&e.preventDefault()}),$("body").delegate("[link-href]","mouseup",function(e){if(2==e.which)return u(e,"_blank")});var u=function u(e,t){var n=$(e.currentTarget),i=n.attr("link-href")||"#",o=(t=t||n.attr("target"),_.startsWith(i,"http://")||_.startsWith(i,"https://")),r=i;if(!o){if(i.startsWith("/")||i.startsWith("./"))return 2==e.which||"_blank"==t?window.open(r):void(window.location.href=i);r=$.parseUrl().urlPath+("#"==i?"":"#"+i)}if(n.attr("dialog-open")||"dialog"==t){var a=n.find(".font-icon").prop("outerHTML")||"",s=htmlSafe(a+n.text());return core.openDialog(r,"",s)}if(!o)return 2==e.which||"_blank"==t?window.open(r):void Router.go(i);"_blank"==t?window.open(r):window.location.href=r}}},u=function u(){$.fn.tabCurrent=function(){var e=$(this);if(!e||0==e.length)return this;var t=e.parent(),n=e.outerWidth(),i=e.offset().left-t.offset().left,o=t.children(".tab-item-bar");if(0==o.length)return this;o.data("initTab")||(o.data("initTab",1),o.addClass("no-animate opacity-hidden"),setTimeout(function(){o.removeClass("opacity-hidden"),t.children(".tab-item").filter(".active").tabCurrent()},10),setTimeout(function(){t.children(".tab-item").filter(".active").tabCurrent(),o.removeClass("no-animate")},300)),n=1*e.width(),i+=(e.outerWidth()-n)/2;var r=t.offset().top+t.outerHeight(),a=e.offset().top+e.outerHeight(),s={"width":n+"px","left":i+"px","transform":"translate3d(0px,-"+Math.abs(r-a+1)+"px, 0px)"};o.css(s),t.children(".tab-item").removeClass("active"),e.addClass("active");var u=t.parent().children(".tab-group-pan").children(".tab-content");if(0!=u.length){var d=e.attr("tab-name").replace(/'/g,"\\'"),c=u.filter(":visible"),l=u.filter("."+d);c.switchTo(l),e.trigger("tab-select")}return this},$(document).delegate(".tab-group-line .tab-item","click",function(){$(this).tabCurrent()});var e=_.debounce(function(){$(".tab-group-line .tab-item.active").each(function(){$(this).tabCurrent()})},50);$(window).bind("resize",e),$.isWindowTouch()&&d()},d=function d(){}},"629":function(e,t,n){e.exports=n(630)},"630":function(e,t,n){"use strict";var i=n(18),o=function r(e){return e&&e.__esModule?e:{"default":e}}(n(49));(0,i.loadApi)().then(function(){(0,o["default"])()})}});