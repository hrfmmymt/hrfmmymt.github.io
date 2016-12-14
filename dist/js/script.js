(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// Use Tumblr API to show recent posts list.
window.tumblrRecent = {};

tumblrRecent = function tumblrRecent(data) {
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
  document.body.appendChild(tumblrScript);
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLE9BQU8sWUFBUCxHQUFzQixFQUF0Qjs7QUFFQSxlQUFlLDRCQUFRO0FBQ3JCLE9BQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLENBQW5CLEVBQXNCLEdBQXRCLEVBQTJCO0FBQ3pCLFFBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBbkI7QUFDQSxRQUFNLGFBQWEsU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQW5COztBQUVBLGVBQVcsV0FBWCxHQUF5QixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLENBQXBCLEVBQXVCLEtBQXZCLElBQWdDLFVBQXpEO0FBQ0EsZUFBVyxZQUFYLENBQXdCLE1BQXhCLEVBQWdDLEtBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUIsUUFBdkQ7O0FBRUEsZUFBVyxTQUFYLEdBQXVCLFlBQXZCO0FBQ0EsZUFBVyxXQUFYLENBQXVCLFVBQXZCOztBQUVBLGFBQVMsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkMsV0FBM0MsQ0FBdUQsVUFBdkQ7QUFDRDtBQUNGLENBYkQ7O0FBZUEsQ0FBQyxZQUFNO0FBQ0w7QUFDQSxNQUFNLFNBQVMsU0FBUyxJQUF4Qjs7QUFFQSxNQUFHLE9BQU8sZ0JBQVYsRUFBNEI7QUFBQTtBQUMxQixVQUFJLFVBQVUsRUFBZDtBQUNBLFVBQU0sYUFBYSwrQkFBbkI7O0FBRUEsYUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxhQUFLO0FBQ3RDLGdCQUFRLElBQVIsQ0FBYSxFQUFFLE9BQWY7O0FBRUEsWUFBRyxRQUFRLFFBQVIsR0FBbUIsT0FBbkIsQ0FBMkIsVUFBM0IsS0FBMEMsQ0FBN0MsRUFBZ0Q7QUFDOUMsY0FBRyxPQUFPLFNBQVAsQ0FBaUIsS0FBakIsQ0FBdUIsd0JBQXZCLENBQUgsRUFBcUQ7QUFDbkQsbUJBQU8sU0FBUCxHQUFtQixPQUFPLFNBQVAsQ0FBaUIsT0FBakIsQ0FBeUIseUJBQXpCLEVBQW9ELEVBQXBELENBQW5CO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQU8sU0FBUCxJQUFvQixXQUFwQjtBQUNEO0FBQ0Qsb0JBQVUsRUFBVjtBQUNEO0FBQ0YsT0FYRCxFQVdHLElBWEg7QUFKMEI7QUFnQjNCOztBQUVEO0FBQ0EsTUFBTSxlQUFlLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFyQjtBQUNBLGVBQWEsS0FBYixHQUFxQixDQUFDLENBQXRCLEVBQ0EsYUFBYSxHQUFiLEdBQW1CLCtJQURuQjtBQUVBLFdBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsWUFBMUI7QUFDRCxDQTNCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBVc2UgVHVtYmxyIEFQSSB0byBzaG93IHJlY2VudCBwb3N0cyBsaXN0Llxud2luZG93LnR1bWJsclJlY2VudCA9IHt9O1xuXG50dW1ibHJSZWNlbnQgPSBkYXRhID0+IHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGNvbnN0IHR1bWJsckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgdHVtYmxyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgdHVtYmxyTGluay50ZXh0Q29udGVudCA9IGRhdGEucmVzcG9uc2UucG9zdHNbaV0udGl0bGUgfHwgXCJObyBUaXRsZVwiO1xuICAgIHR1bWJsckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBkYXRhLnJlc3BvbnNlLnBvc3RzW2ldLnBvc3RfdXJsKTtcblxuICAgIHR1bWJsckxpc3QuY2xhc3NOYW1lID0gXCJsaXN0X19pdGVtXCI7XG4gICAgdHVtYmxyTGlzdC5hcHBlbmRDaGlsZCh0dW1ibHJMaW5rKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVjZW50UG9zdHNMaXN0XCIpLmFwcGVuZENoaWxkKHR1bWJsckxpc3QpO1xuICB9XG59O1xuXG4oKCkgPT4ge1xuICAvLyBLIGNvbW1hbmRcbiAgY29uc3QgYm9keUVsID0gZG9jdW1lbnQuYm9keTtcblxuICBpZih3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGxldCBwcmVzc2VkID0gW107XG4gICAgY29uc3Qga29uYW1pQ29kZSA9IFwiMzgsMzgsNDAsNDAsMzcsMzksMzcsMzksNjYsNjVcIjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrID0+IHtcbiAgICAgIHByZXNzZWQucHVzaChrLmtleUNvZGUpO1xuXG4gICAgICBpZihwcmVzc2VkLnRvU3RyaW5nKCkuaW5kZXhPZihrb25hbWlDb2RlKSA+PSAwKSB7XG4gICAgICAgIGlmKGJvZHlFbC5jbGFzc05hbWUubWF0Y2goLyg/Ol58XFxzKWtvbmFtaWVkKD8hXFxTKS8pKSB7XG4gICAgICAgICAgYm9keUVsLmNsYXNzTmFtZSA9IGJvZHlFbC5jbGFzc05hbWUucmVwbGFjZSgvKD86XnxcXHMpa29uYW1pZWQoPyFcXFMpL2csIFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJvZHlFbC5jbGFzc05hbWUgKz0gXCIga29uYW1pZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBwcmVzc2VkID0gW107XG4gICAgICB9XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBHZXQgVHVtYmxyIEFQSVxuICBjb25zdCB0dW1ibHJTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICB0dW1ibHJTY3JpcHQuYXN5bmMgPSAhMCxcbiAgdHVtYmxyU2NyaXB0LnNyYyA9IFwiLy9hcGkudHVtYmxyLmNvbS92Mi9ibG9nL2hyZm1teW10LnR1bWJsci5jb20vcG9zdHM/YXBpX2tleT1VenZObUxlVkZCcGlGTWFreWFjNHdQbHRlVWV2ZmtTblFpalV6NFY4S2N1aXN2bWlwNyZ0eXBlPXRleHQmY2FsbGJhY2s9dHVtYmxyUmVjZW50XCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodHVtYmxyU2NyaXB0KTtcbn0pKCk7Il19
