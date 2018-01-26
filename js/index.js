(function () {
  var resize = function () {
    document.getElementById('hero').style.height = window.innerHeight + 'px';
    Array.prototype.forEach.call(document.getElementsByClassName('time-text'), function (elem) {
      elem.style.maxWidth = (window.innerWidth - 130) + 'px';
    });
  };

  window.onresize = resize;
  resize();

  window.openBitcoin = function () {
    document.getElementById('bitcoin').style.display = 'block';
    return false;
  };
})();
