export default () => {
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

  // Get Tumblr API
  const tumblrScript = document.createElement("script");
  tumblrScript.async = !0,
  tumblrScript.src = "//api.tumblr.com/v2/blog/hrfmmymt.tumblr.com/posts?api_key=UzvNmLeVFBpiFMakyac4wPlteUevfkSnQijUz4V8Kcuisvmip7&type=text&callback=tumblrRecent";
  document.body.appendChild(tumblrScript);
};