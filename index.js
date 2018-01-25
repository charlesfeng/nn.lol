(function () {
  var resize = function () {
    document.getElementById('hero').style.height = window.innerHeight + 'px';
  };

  window.onresize = resize;
  resize();
})();
