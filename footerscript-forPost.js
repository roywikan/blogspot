//<![CDATA[
function downloadJSAtOnload(){var d=document.createElement("script");d.src="https://cdn.staticaly.com/gh/roywikan/blogspot/main/relatedarticles.min.js",document.body.appendChild(d)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
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
