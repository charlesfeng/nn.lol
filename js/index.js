(function () {
  var resize = function () {
    document.getElementById('hero').style.height = window.innerHeight + 'px';
  };

  window.onresize = resize;
  resize();

  window.openBitcoin = function () {
    document.getElementById('bitcoin').style.display = 'block';
    return false;
  };
})();
