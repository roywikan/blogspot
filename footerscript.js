

<b:if cond='data:view.isPost'>
<script>
//<![CDATA[
function downloadJSAtOnload(){var d=document.createElement("script");d.src="https://cdn.staticaly.com/gh/insanmuliadi/related-articles/491514b6/relatedarticles.js",document.body.appendChild(d)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
//]]>
//<![CDATA[
var topImg;
if (topImg = document.getElementById("desc"))  {
var newParent = document.getElementById('top-img');
var oldParent = document.getElementById('desc');
while (oldParent.childNodes.length) { newParent.appendChild(oldParent.firstChild);}
  } else {
};
function expandComment(){var e=document.getElementById("overflowbox");if(e.classList)e.classList.toggle("expand-more");else{var s=e.className.split(" "),a=s.indexOf("expand-more");a>=0?s.splice(a,1):s.push("expand-more"),e.className=s.join(" ")}}
//]]>
</script>

<script>
//<![CDATA[
function scrollFunction(){document.body.scrollTop>100||document.documentElement.scrollTop>100?document.getElementById("backtop").style.display="block":document.getElementById("backtop").style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()};
//]]>
</script>
<script>
//<![CDATA[
!function(){function n(n,c){n.className=n.className?"":c}function c(n){return document.getElementById(n)}var e=c("menu-icon"),t=c("show-list"),i="menu-active";e.onclick=function(){n(t,i)}}();
//]]>
</script>
<script>
//<![CDATA[

!function(t,e){"use strict";if("object"==typeof module&&"object"==typeof module.exports){if(!t.document)throw new Error("HC-Sticky requires a browser to run.");module.exports=e(t)}else"function"==typeof define&&define.amd?define("hcSticky",[],e(t)):e(t)}("undefined"!=typeof window?window:this,function(t){"use strict";var e={top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,stickyClass:"sticky",stickTo:null,followScroll:!0,queries:null,queryFlow:"down",onStart:null,onStop:null,onBeforeResize:null,onResize:null,resizeDebounce:100,disable:!1},o=t.document,n=function(i,s){if("string"==typeof i&&(i=o.querySelector(i)),!i)return!1;var r={},a=n.Helpers,l=i.parentNode;"static"===a.getStyle(l,"position")&&(l.style.position="relative");var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.isEmptyObject(t)&&!a.isEmptyObject(r)||(r=Object.assign({},e,r,t))},f=function(){return r.disable},p=function(){if(r.queries){var o=t.innerWidth,n=r.queryFlow,i=r.queries;if(function(t){r=Object.assign({},e,t||{})}(s),"up"===n)for(var l in i)o>=l&&!a.isEmptyObject(i[l])&&c(i[l]);else{var f=[];for(var p in r.queries){var u={};u[p]=i[p],f.push(u)}for(var d=f.length-1;d>=0;d--){var g=f[d],m=Object.keys(g)[0];o<=m&&!a.isEmptyObject(g[m])&&c(g[m])}}}},u={css:{},position:null,stick:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.hasClass(i,r.stickyClass)||(!1===d.isAttached&&d.attach(),u.position="fixed",i.style.position="fixed",i.style.left=d.offsetLeft+"px",i.style.width=d.width,void 0===t.bottom?i.style.bottom="auto":i.style.bottom=t.bottom+"px",void 0===t.top?i.style.top="auto":i.style.top=t.top+"px",i.classList?i.classList.add(r.stickyClass):i.className+=" "+r.stickyClass,r.onStart&&r.onStart.call(i,r))},release:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.stop=t.stop||!1,!0===t.stop||"fixed"===u.position||null===u.position||!(void 0===t.top&&void 0===t.bottom||void 0!==t.top&&(parseInt(a.getStyle(i,"top"))||0)===t.top||void 0!==t.bottom&&(parseInt(a.getStyle(i,"bottom"))||0)===t.bottom)){!0===t.stop?!0===d.isAttached&&d.detach():!1===d.isAttached&&d.attach();var e=t.position||u.css.position;u.position=e,i.style.position=e,i.style.left=!0===t.stop?u.css.left:d.positionLeft+"px",i.style.width="absolute"!==e?u.css.width:d.width,void 0===t.bottom?i.style.bottom=!0===t.stop?"":"auto":i.style.bottom=t.bottom+"px",void 0===t.top?i.style.top=!0===t.stop?"":"auto":i.style.top=t.top+"px",i.classList?i.classList.remove(r.stickyClass):i.className=i.className.replace(new RegExp("(^|\\b)"+r.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),r.onStop&&r.onStop.call(i,r)}}},d={el:o.createElement("div"),offsetLeft:null,positionLeft:null,width:null,isAttached:!1,init:function(){for(var t in u.css)d.el.style[t]=u.css[t];var e=a.getStyle(i);d.offsetLeft=a.offset(i).left-(parseInt(e.marginLeft)||0),d.positionLeft=a.position(i).left,d.width=a.getStyle(i,"width")},attach:function(){l.insertBefore(d.el,i.nextSibling),d.isAttached=!0},detach:function(){d.el=l.removeChild(d.el),d.isAttached=!1}},g=void 0,m=void 0,h=void 0,y=void 0,v=void 0,b=void 0,S=void 0,w=void 0,k=void 0,E=void 0,x=void 0,L=void 0,T=void 0,j=void 0,O=void 0,C=void 0,z=void 0,N=void 0,R=function(){u.css=function(t){var e=a.getCascadedStyle(t),o=a.getStyle(t),n={height:t.offsetHeight+"px",left:e.left,right:e.right,top:e.top,bottom:e.bottom,position:o.position,display:o.display,verticalAlign:o.verticalAlign,boxSizing:o.boxSizing,marginLeft:e.marginLeft,marginRight:e.marginRight,marginTop:e.marginTop,marginBottom:e.marginBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight};return e.float&&(n.float=e.float||"none"),e.cssFloat&&(n.cssFloat=e.cssFloat||"none"),o.MozBoxSizing&&(n.MozBoxSizing=o.MozBoxSizing),n.width="auto"!==e.width?e.width:"border-box"===n.boxSizing||"border-box"===n.MozBoxSizing?t.offsetWidth+"px":o.width,n}(i),d.init(),g=!(!r.stickTo||!("document"===r.stickTo||r.stickTo.nodeType&&9===r.stickTo.nodeType||"object"==typeof r.stickTo&&r.stickTo instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document))),m=r.stickTo?g?o:"string"==typeof r.stickTo?o.querySelector(r.stickTo):r.stickTo:l,O=(N=function(){var t=i.offsetHeight+(parseInt(u.css.marginTop)||0)+(parseInt(u.css.marginBottom)||0),e=(O||0)-t;return e>=-1&&e<=1?O:t})(),y=(z=function(){return g?Math.max(o.documentElement.clientHeight,o.body.scrollHeight,o.documentElement.scrollHeight,o.body.offsetHeight,o.documentElement.offsetHeight):m.offsetHeight})(),v=g?0:a.offset(m).top,b=r.stickTo?g?0:a.offset(l).top:v,S=t.innerHeight,C=i.offsetTop-(parseInt(u.css.marginTop)||0),h=r.innerSticker?"string"==typeof r.innerSticker?o.querySelector(r.innerSticker):r.innerSticker:null,w=isNaN(r.top)&&r.top.indexOf("%")>-1?parseFloat(r.top)/100*S:r.top,k=isNaN(r.bottom)&&r.bottom.indexOf("%")>-1?parseFloat(r.bottom)/100*S:r.bottom,E=h?h.offsetTop:r.innerTop?r.innerTop:0,x=isNaN(r.bottomEnd)&&r.bottomEnd.indexOf("%")>-1?parseFloat(r.bottomEnd)/100*S:r.bottomEnd,L=v-w+E+C},H=t.pageYOffset||o.documentElement.scrollTop,A=0,B=void 0,I=function(){O=N(),y=z(),T=v+y-w-x,j=O>S;var e=t.pageYOffset||o.documentElement.scrollTop,n=Math.round(a.offset(i).top),s=n-e,c=void 0;B=e<H?"up":"down",A=e-H,H=e,e>L?T+w+(j?k:0)-(r.followScroll&&j?0:w)<=e+O-E-(O-E>S-(L-E)&&r.followScroll&&(c=O-S-E)>0?c:0)?u.release({position:"absolute",bottom:b+l.offsetHeight-T-w}):j&&r.followScroll?"down"===B?s+O+k<=S?u.stick({bottom:k}):"fixed"===u.position&&u.release({position:"absolute",top:n-w-L-A+E}):s+E<0&&"fixed"===u.position?u.release({position:"absolute",top:n-w-L+E-A}):n>=e+w-E&&u.stick({top:w-E}):u.stick({top:w-E}):u.release({stop:!0})},q=!1,F=!1,M=function(){q&&(a.event.unbind(t,"scroll",I),q=!1)},D=function(){R(),O>=y?M():(I(),q||(a.event.bind(t,"scroll",I),q=!0))},W=function(){i.style.position="",i.style.left="",i.style.top="",i.style.bottom="",i.style.width="",i.classList?i.classList.remove(r.stickyClass):i.className=i.className.replace(new RegExp("(^|\\b)"+r.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),u.css={},u.position=null,!0===d.isAttached&&d.detach()},P=function(){W(),p(),f()?M():D()},V=function(){r.onBeforeResize&&r.onBeforeResize.call(i,r),P(),r.onResize&&r.onResize.call(i,r)},Y=r.resizeDebounce?a.debounce(V,r.resizeDebounce):V,$=function(){F&&(a.event.unbind(t,"resize",Y),F=!1),M()},Q=function(){F||(a.event.bind(t,"resize",Y),F=!0),p(),f()?M():D()};this.options=function(t){return t?r.option||null:Object.assign({},r)},this.reinit=P,this.update=function(t){c(t),s=Object.assign({},s,t||{}),P()},this.attach=Q,this.detach=$,this.destroy=function(){$(),W()},c(s),Q(),a.event.bind(t,"load",P)};if(void 0!==t.jQuery){var i=t.jQuery;i.fn.extend({hcSticky:function(t){return this.length?this.each(function(){var e=i.data(this,"hcSticky");e?e.update(t):(e=new n(this,t),i.data(this,"hcSticky",e))}):this}})}return t.hcSticky=t.hcSticky||n,n}),function(t){"use strict";var e=t.hcSticky,o=t.document;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(o[s]=i[s])}return o},writable:!0,configurable:!0}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var e,o;if(null==this)throw new TypeError("this is null or not defined");var n=Object(this),i=n.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(e=arguments[1]),o=0;o<i;){var s;o in n&&(s=n[o],t.call(e,s,o,n)),o++}});var n=function(){function e(e){var o=t.event;return o.target=o.target||o.srcElement||e,o}var n=o.documentElement,i=function(){};n.addEventListener?i=function(t,e,o){t.addEventListener(e,o,!1)}:n.attachEvent&&(i=function(t,o,n){t[o+n]=n.handleEvent?function(){var o=e(t);n.handleEvent.call(n,o)}:function(){var o=e(t);n.call(t,o)},t.attachEvent("on"+o,t[o+n])});var s=function(){};return n.removeEventListener?s=function(t,e,o){t.removeEventListener(e,o,!1)}:n.detachEvent&&(s=function(t,e,o){t.detachEvent("on"+e,t[e+o]);try{delete t[e+o]}catch(n){t[e+o]=void 0}}),{bind:i,unbind:s}}(),i=function(e,n){return t.getComputedStyle?n?o.defaultView.getComputedStyle(e,null).getPropertyValue(n):o.defaultView.getComputedStyle(e,null):e.currentStyle?n?e.currentStyle[n.replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]:e.currentStyle:void 0},s=function(e){var n=e.getBoundingClientRect(),i=t.pageYOffset||o.documentElement.scrollTop,s=t.pageXOffset||o.documentElement.scrollLeft;return{top:n.top+i,left:n.left+s}};e.Helpers={isEmptyObject:function(t){for(var e in t)return!1;return!0},debounce:function(t,e,o){var n=void 0;return function(){var i=this,s=arguments,r=o&&!n;clearTimeout(n),n=setTimeout(function(){n=null,o||t.apply(i,s)},e),r&&t.apply(i,s)}},hasClass:function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},offset:s,position:function(t){var e=t.offsetParent,o=s(e),n=s(t),r=i(e),a=i(t);return o.top+=parseInt(r.borderTopWidth)||0,o.left+=parseInt(r.borderLeftWidth)||0,{top:n.top-o.top-(parseInt(a.marginTop)||0),left:n.left-o.left-(parseInt(a.marginLeft)||0)}},getStyle:i,getCascadedStyle:function(e){var n=e.cloneNode(!0);n.style.display="none",Array.prototype.slice.call(n.querySelectorAll('input[type="radio"]')).forEach(function(t){t.removeAttribute("name")}),e.parentNode.insertBefore(n,e.nextSibling);var i=void 0;n.currentStyle?i=n.currentStyle:t.getComputedStyle&&(i=o.defaultView.getComputedStyle(n,null));var s={};for(var r in i)!isNaN(r)||"string"!=typeof i[r]&&"number"!=typeof i[r]||(s[r]=i[r]);if(Object.keys(s).length<3){s={};for(var a in i)isNaN(a)||(s[i[a].replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]=i.getPropertyValue(i[a]))}if(s.margin||"auto"!==s.marginLeft?s.margin||s.marginLeft!==s.marginRight||s.marginLeft!==s.marginTop||s.marginLeft!==s.marginBottom||(s.margin=s.marginLeft):s.margin="auto",!s.margin&&"0px"===s.marginLeft&&"0px"===s.marginRight){var l=e.offsetLeft-e.parentNode.offsetLeft,c=l-(parseInt(s.left)||0)-(parseInt(s.right)||0),f=e.parentNode.offsetWidth-e.offsetWidth-l-(parseInt(s.right)||0)+(parseInt(s.left)||0)-c;0!==f&&1!==f||(s.margin="auto")}return n.parentNode.removeChild(n),n=null,s},event:n}}(window);
//selektor
"use strict";var Sticky=new hcSticky("#sidebar",{
stickTo:"#main-wrapper",
followScroll:true,
top:20,
bottom:20,
queries:{1024:{disable:!0}
}});
//]]>
</script>
<script>

!function(){"use strict";for(var t=document.querySelectorAll(".llyv"),e=0;e<t.length;e++){var i=document.createElement("div");i.className="llyv-play-btn",t[e].appendChild(i),t[e].addEventListener("click",function(){var t=document.createElement("iframe");for(t.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.id+"?rel=0&showinfo=0&autoplay=1"),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","");this.firstChild;)this.removeChild(this.firstChild);this.appendChild(t)})}}();
//]]>
</script>


//<![CDATA[
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});
new Blazy;
//]]>



</b:if>




//<![CDATA[
!function(e,t){var n="getSelection",o="removeAllRanges",i="addRange",l="parentNode",a="firstChild",d="appendChild",r="removeChild",s="test",c="innerHTML";if(e[n]){var p,g,f,h,u,y;t.addEventListener("copy",function(C){for(g=C.target;3===g.nodeType;)g=g[l];if(h=t.createElement("div"),(p=e[n]())&&p.rangeCount&&(p=p.getRangeAt(0))&&(f=p.cloneRange(),p=p.cloneContents())){for(;u=p[a];)h[d](u);if(!/^(pre|code)$/i[s](g.nodeName||"")&&!/(^|\s)no-attribution(\s|$)/i[s](g.className||"")){var v=e.location.href;h[c]+="<br><br>&copy; "+t.title+'<br>Source: <a href="'+v+'">'+v+"</a>"}y=t.createRange(),t.body[d](h),y.selectNodeContents(h),p=e[n](),p[o](),p[i](y),setTimeout(function(){h[l][r](h),p[o](),p[i](f)})}},!1)}}(window,document);
//]]>


//<![CDATA[
/*! llyv.js v0.1.0 */
!function(){"use strict";for(var t=document.querySelectorAll(".llyv"),e=0;e<t.length;e++){var i=document.createElement("div");i.className="llyv-play-btn",t[e].appendChild(i);var l=document.createElement("img");l.src="https://img.youtube.com/vi/"+t[e].dataset.id+"/hqdefault.jpg",t[e].appendChild(l),t[e].addEventListener("click",function(){var t=document.createElement("iframe");for(t.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.id+"?rel=0&showinfo=0&autoplay=1"),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","");this.firstChild;)this.removeChild(this.firstChild);this.appendChild(t)})}}();
//]]>

  
