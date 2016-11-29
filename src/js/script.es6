const bodyEl = document.body;

if(window.addEventListener) {
  let pressed = [];
  const konamiCode = "38,38,40,40,37,39,37,39,66,65";

  window.addEventListener("keydown", k => {
    pressed.push(k.keyCode);

    if(pressed.toString().indexOf(getWildCode) >= 0) {
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
