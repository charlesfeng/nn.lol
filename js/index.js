(function () {
  var resize = function () {
    Array.prototype.forEach.call(document.getElementsByClassName('time-text'), function (elem) {
      elem.style.maxWidth = (window.innerWidth - 135) + 'px';
    });
  };

  window.onresize = resize;
  resize();

  document.getElementById('hero').style.height = window.innerHeight + 'px';

  window.openBitcoin = function () {
    document.getElementById('bitcoin').style.display = 'block';
    return false;
  };
})();
