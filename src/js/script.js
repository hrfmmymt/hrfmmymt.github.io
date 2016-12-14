// Use Tumblr API to show recent posts list.
window.tumblrRecent = {};

tumblrRecent = data => {
  for(let i = 0; i < 5; i++) {
    const tumblrList = document.createElement("li");
    const tumblrLink = document.createElement("a");

    tumblrLink.textContent = data.response.posts[i].title || "No Title";
    tumblrLink.setAttribute("href", data.response.posts[i].post_url);

    tumblrList.className = "list__item";
    tumblrList.appendChild(tumblrLink);

    document.getElementById("recentPostsList").appendChild(tumblrList);
  }
};

(() => {
  // K command
  const bodyEl = document.body;

  if(window.addEventListener) {
    let pressed = [];
    const konamiCode = "38,38,40,40,37,39,37,39,66,65";

    window.addEventListener("keydown", k => {
      pressed.push(k.keyCode);

      if(pressed.toString().indexOf(konamiCode) >= 0) {
        if(bodyEl.className.match(/(?:^|\s)konamied(?!\S)/)) {
          bodyEl.className = bodyEl.className.replace(/(?:^|\s)konamied(?!\S)/g, "");
        } else {
          bodyEl.className += " konamied";
        }
        pressed = [];
      }
    }, true);
  }

  // Get Tumblr API
  const tumblrScript = document.createElement("script");
  tumblrScript.async = !0,
  tumblrScript.src = "//api.tumblr.com/v2/blog/hrfmmymt.tumblr.com/posts?api_key=UzvNmLeVFBpiFMakyac4wPlteUevfkSnQijUz4V8Kcuisvmip7&type=text&callback=tumblrRecent";
  document.body.appendChild(tumblrScript);
})();