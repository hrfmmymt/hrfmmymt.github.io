"use strict";"use strict;";var tumblrRecent=function(e){for(var t=0;t<5;t++){var n=document.createElement("li"),s=document.createElement("a");s.textContent=e.response.posts[t].title||"No Title",s.setAttribute("href",e.response.posts[t].post_url),n.className="list__item",n.appendChild(s),document.getElementById("recentPostsList").appendChild(n)}};!function(){var e=document.body;window.addEventListener&&!function(){var t=[],n="38,38,40,40,37,39,37,39,66,65";window.addEventListener("keydown",function(s){t.push(s.keyCode),t.toString().indexOf(n)>=0&&(e.className.match(/(?:^|\s)konamied(?!\S)/)?e.className=e.className.replace(/(?:^|\s)konamied(?!\S)/g,""):e.className+=" konamied",t=[])},!0)}();var t=document.createElement("script");t.async=!0,t.src="//api.tumblr.com/v2/blog/hrfmmymt.tumblr.com/posts?api_key=UzvNmLeVFBpiFMakyac4wPlteUevfkSnQijUz4V8Kcuisvmip7&type=text&callback=tumblrRecent";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}();