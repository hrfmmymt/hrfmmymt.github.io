(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// Use Tumblr API to show recent posts list.
var tumblrRecent = function tumblrRecent(data) {
  for (var i = 0; i < 5; i++) {
    var tumblrList = document.createElement("li");
    var tumblrLink = document.createElement("a");

    tumblrLink.textContent = data.response.posts[i].title || "No Title";
    tumblrLink.setAttribute("href", data.response.posts[i].post_url);

    tumblrList.className = "list__item";
    tumblrList.appendChild(tumblrLink);

    document.getElementById("recentPostsList").appendChild(tumblrList);
  }
};

(function () {
  // K command
  var bodyEl = document.body;

  if (window.addEventListener) {
    (function () {
      var pressed = [];
      var konamiCode = "38,38,40,40,37,39,37,39,66,65";

      window.addEventListener("keydown", function (k) {
        pressed.push(k.keyCode);

        if (pressed.toString().indexOf(konamiCode) >= 0) {
          if (bodyEl.className.match(/(?:^|\s)konamied(?!\S)/)) {
            bodyEl.className = bodyEl.className.replace(/(?:^|\s)konamied(?!\S)/g, "");
          } else {
            bodyEl.className += " konamied";
          }
          pressed = [];
        }
      }, true);
    })();
  }

  // Get Tumblr API
  var tumblrScript = document.createElement("script");
  tumblrScript.async = !0, tumblrScript.src = "//api.tumblr.com/v2/blog/hrfmmymt.tumblr.com/posts?api_key=UzvNmLeVFBpiFMakyac4wPlteUevfkSnQijUz4V8Kcuisvmip7&type=text&callback=tumblrRecent";

  var tumblrScriptTag = document.getElementsByTagName("script")[0];
  tumblrScriptTag.parentNode.insertBefore(tumblrScript, tumblrScriptTag);
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sZUFBZSxTQUFmLFlBQWUsT0FBUTtBQUMzQixPQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxDQUFuQixFQUFzQixHQUF0QixFQUEyQjtBQUN6QixRQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLElBQXZCLENBQW5CO0FBQ0EsUUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUFuQjs7QUFFQSxlQUFXLFdBQVgsR0FBeUIsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixDQUFwQixFQUF1QixLQUF2QixJQUFnQyxVQUF6RDtBQUNBLGVBQVcsWUFBWCxDQUF3QixNQUF4QixFQUFnQyxLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEVBQXVCLFFBQXZEOztBQUVBLGVBQVcsU0FBWCxHQUF1QixZQUF2QjtBQUNBLGVBQVcsV0FBWCxDQUF1QixVQUF2Qjs7QUFFQSxhQUFTLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDLFdBQTNDLENBQXVELFVBQXZEO0FBQ0Q7QUFDRixDQWJEOztBQWVBLENBQUMsWUFBTTtBQUNMO0FBQ0EsTUFBTSxTQUFTLFNBQVMsSUFBeEI7O0FBRUEsTUFBRyxPQUFPLGdCQUFWLEVBQTRCO0FBQUE7QUFDMUIsVUFBSSxVQUFVLEVBQWQ7QUFDQSxVQUFNLGFBQWEsK0JBQW5COztBQUVBLGFBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsYUFBSztBQUN0QyxnQkFBUSxJQUFSLENBQWEsRUFBRSxPQUFmOztBQUVBLFlBQUcsUUFBUSxRQUFSLEdBQW1CLE9BQW5CLENBQTJCLFVBQTNCLEtBQTBDLENBQTdDLEVBQWdEO0FBQzlDLGNBQUcsT0FBTyxTQUFQLENBQWlCLEtBQWpCLENBQXVCLHdCQUF2QixDQUFILEVBQXFEO0FBQ25ELG1CQUFPLFNBQVAsR0FBbUIsT0FBTyxTQUFQLENBQWlCLE9BQWpCLENBQXlCLHlCQUF6QixFQUFvRCxFQUFwRCxDQUFuQjtBQUNELFdBRkQsTUFFTztBQUNMLG1CQUFPLFNBQVAsSUFBb0IsV0FBcEI7QUFDRDtBQUNELG9CQUFVLEVBQVY7QUFDRDtBQUNGLE9BWEQsRUFXRyxJQVhIO0FBSjBCO0FBZ0IzQjs7QUFFRDtBQUNBLE1BQU0sZUFBZSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDQSxlQUFhLEtBQWIsR0FBcUIsQ0FBQyxDQUF0QixFQUNBLGFBQWEsR0FBYixHQUFtQiwrSUFEbkI7O0FBR0EsTUFBTSxrQkFBa0IsU0FBUyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUF4QjtBQUNBLGtCQUFnQixVQUFoQixDQUEyQixZQUEzQixDQUF3QyxZQUF4QyxFQUFzRCxlQUF0RDtBQUNELENBN0JEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFVzZSBUdW1ibHIgQVBJIHRvIHNob3cgcmVjZW50IHBvc3RzIGxpc3QuXG5jb25zdCB0dW1ibHJSZWNlbnQgPSBkYXRhID0+IHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGNvbnN0IHR1bWJsckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgdHVtYmxyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgdHVtYmxyTGluay50ZXh0Q29udGVudCA9IGRhdGEucmVzcG9uc2UucG9zdHNbaV0udGl0bGUgfHwgXCJObyBUaXRsZVwiO1xuICAgIHR1bWJsckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBkYXRhLnJlc3BvbnNlLnBvc3RzW2ldLnBvc3RfdXJsKTtcblxuICAgIHR1bWJsckxpc3QuY2xhc3NOYW1lID0gXCJsaXN0X19pdGVtXCI7XG4gICAgdHVtYmxyTGlzdC5hcHBlbmRDaGlsZCh0dW1ibHJMaW5rKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVjZW50UG9zdHNMaXN0XCIpLmFwcGVuZENoaWxkKHR1bWJsckxpc3QpO1xuICB9XG59O1xuXG4oKCkgPT4ge1xuICAvLyBLIGNvbW1hbmRcbiAgY29uc3QgYm9keUVsID0gZG9jdW1lbnQuYm9keTtcblxuICBpZih3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGxldCBwcmVzc2VkID0gW107XG4gICAgY29uc3Qga29uYW1pQ29kZSA9IFwiMzgsMzgsNDAsNDAsMzcsMzksMzcsMzksNjYsNjVcIjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrID0+IHtcbiAgICAgIHByZXNzZWQucHVzaChrLmtleUNvZGUpO1xuXG4gICAgICBpZihwcmVzc2VkLnRvU3RyaW5nKCkuaW5kZXhPZihrb25hbWlDb2RlKSA+PSAwKSB7XG4gICAgICAgIGlmKGJvZHlFbC5jbGFzc05hbWUubWF0Y2goLyg/Ol58XFxzKWtvbmFtaWVkKD8hXFxTKS8pKSB7XG4gICAgICAgICAgYm9keUVsLmNsYXNzTmFtZSA9IGJvZHlFbC5jbGFzc05hbWUucmVwbGFjZSgvKD86XnxcXHMpa29uYW1pZWQoPyFcXFMpL2csIFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvZHlFbC5jbGFzc05hbWUgKz0gXCIga29uYW1pZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBwcmVzc2VkID0gW107XG4gICAgICB9XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBHZXQgVHVtYmxyIEFQSVxuICBjb25zdCB0dW1ibHJTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICB0dW1ibHJTY3JpcHQuYXN5bmMgPSAhMCxcbiAgdHVtYmxyU2NyaXB0LnNyYyA9IFwiLy9hcGkudHVtYmxyLmNvbS92Mi9ibG9nL2hyZm1teW10LnR1bWJsci5jb20vcG9zdHM/YXBpX2tleT1VenZObUxlVkZCcGlGTWFreWFjNHdQbHRlVWV2ZmtTblFpalV6NFY4S2N1aXN2bWlwNyZ0eXBlPXRleHQmY2FsbGJhY2s9dHVtYmxyUmVjZW50XCI7XG5cbiAgY29uc3QgdHVtYmxyU2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG4gIHR1bWJsclNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0dW1ibHJTY3JpcHQsIHR1bWJsclNjcmlwdFRhZyk7XG59KSgpOyJdfQ==
