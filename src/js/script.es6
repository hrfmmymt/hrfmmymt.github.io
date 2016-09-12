const bodyEl = document.body;
let isGetWild = false;

// GetWild
const getWildAndTough = () => {
  const iframe = document.createElement("iframe");
      iframe.id = "getWildFrame";
      iframe.src = "//www.youtube.com/embed/LgBxze0ye94?rel=0&autoplay=1&loop=1&controls=0&wmode=transparent";
      iframe.frameborder = 0;
      iframe.allowfullscreen = true;
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.className += " bg__movie";

      bodyEl.appendChild(iframe);
      bodyEl.focus();
}

// GotWild
const gotWildAndTough = () => {
  const iframe = document.getElementById("getWildFrame");
  iframe.parentNode.removeChild(iframe);
  bodyEl.focus();
}

if(window.addEventListener) {
  let pressed = [];
  const konamiCode = "38,38,40,40,37,39,37,39,66,65";
  const getWildCode = "71,69,84,87,73,76,68";

  window.addEventListener("keydown", k => {
    pressed.push(k.keyCode);

    if(pressed.toString().indexOf(getWildCode) >= 0) {
      if(!isGetWild) {
        getWildAndTough();
        isGetWild = true;
      } else {
        gotWildAndTough();
        isGetWild = false;
      }
      pressed = [];
    } else if(pressed.toString().indexOf(konamiCode) >= 0) {
      if(bodyEl.className.match(/(?:^|\s)konamied(?!\S)/)) {
        bodyEl.className = bodyEl.className.replace(/(?:^|\s)konamied(?!\S)/g, "");
      } else {
        bodyEl.className += " konamied";
      }
      pressed = [];
    }

  }, true);
}