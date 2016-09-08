const getWildUrl = "//youtu.be/LgBxze0ye94?t=1m45s";
let isGetWild = false;

// GetWild
const getWildAndTough = () => {
  window.location.href = getWildUrl;
}

if(window.addEventListener) {
  let pressed = [];
  const getWildCode = "71,69,84,87,73,76,68";
  window.addEventListener("keydown", k => {
    pressed.push(k.keyCode);
    if(pressed.toString().indexOf(getWildCode) >= 0) {
      if(!isGetWild) {
        isGetWild = true;
        getWildAndTough();
      } else {
        isGetWild = false;
      }
      pressed = [];
    }
  }, true);
}