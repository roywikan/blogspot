  //<script>
    //var blogUrl = &quot;<data:blog.homepageUrl/>&quot;;
    //var link = &quot;http://www.google.com/ping?sitemap=&quot; + blogUrl + &quot;/sitemap.xml&quot;;
    //document.write(&quot;<a href='&quot; + link + &quot;'>Ping My Blog 1</a>&quot;);
  //</script>  

  //<script>  
	
  //var blogUrl = &quot;<data:blog.homepageUrl/>&quot;;
	//var link = &quot;https://www.google.com/ping?sitemap=&quot; + blogUrl + &quot;/sitemap.xml&quot;;

	//var a = document.createElement(&quot;a&quot;);
	//a.href = link;
	//a.innerHTML = &quot;Ping My Blog 2&quot;;
	//document.body.appendChild(a);
  
  //</script>  
  
  <script>  

	var blogUrl = &quot;<data:blog.homepageUrl/>&quot;;
	var link = &quot;https://www.google.com/ping?sitemap=&quot; + blogUrl + &quot;sitemap.xml&quot;;

	var a = document.createElement(&quot;a&quot;);
	a.href = link;
	a.innerHTML = &quot;Pinger&quot;;

	document.getElementById(&quot;targetLokasiPingMyBlog3&quot;).appendChild(a);
    
    document.getElementById(&quot;targetLokasiCurrentYear&quot;).innerHTML = (new Date().getFullYear() &gt; 2010) ? new Date().getFullYear() : &quot;&quot;;

  
  </script>
