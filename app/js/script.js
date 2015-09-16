if (window.addEventListener) {
  var pressed = []; 
  var konamiCode = '38,38,40,40,37,39,37,39,66,65';
  window.addEventListener('keydown', function(k) {
    pressed.push(k.keyCode);
    if (pressed.toString().indexOf(konamiCode) >= 0) {
      var el = document.querySelector('body');
      if(el.className.match( /(?:^|\s)konamied(?!\S)/) ) {
        el.className = el.className.replace( /(?:^|\s)konamied(?!\S)/g , '' );
      } else {
        el.className += ' konamied';
      }
      pressed = [];
    }
  }, true);
}