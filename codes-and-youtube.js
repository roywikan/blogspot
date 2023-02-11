
//<![CDATA[
!function(e,t){var n="getSelection",o="removeAllRanges",i="addRange",l="parentNode",a="firstChild",d="appendChild",r="removeChild",s="test",c="innerHTML";if(e[n]){var p,g,f,h,u,y;t.addEventListener("copy",function(C){for(g=C.target;3===g.nodeType;)g=g[l];if(h=t.createElement("div"),(p=e[n]())&&p.rangeCount&&(p=p.getRangeAt(0))&&(f=p.cloneRange(),p=p.cloneContents())){for(;u=p[a];)h[d](u);if(!/^(pre|code)$/i[s](g.nodeName||"")&&!/(^|\s)no-attribution(\s|$)/i[s](g.className||"")){var v=e.location.href;h[c]+="<br><br>&copy; "+t.title+'<br>Source: <a href="'+v+'">'+v+"</a>"}y=t.createRange(),t.body[d](h),y.selectNodeContents(h),p=e[n](),p[o](),p[i](y),setTimeout(function(){h[l][r](h),p[o](),p[i](f)})}},!1)}}(window,document);
//]]>

//<![CDATA[
/*! llyv.js v0.1.0 */
!function(){"use strict";for(var t=document.querySelectorAll(".llyv"),e=0;e<t.length;e++){var i=document.createElement("div");i.className="llyv-play-btn",t[e].appendChild(i);var l=document.createElement("img");l.src="https://img.youtube.com/vi/"+t[e].dataset.id+"/hqdefault.jpg",t[e].appendChild(l),t[e].addEventListener("click",function(){var t=document.createElement("iframe");for(t.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.id+"?rel=0&showinfo=0&autoplay=1"),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","");this.firstChild;)this.removeChild(this.firstChild);this.appendChild(t)})}}();
//]]>
