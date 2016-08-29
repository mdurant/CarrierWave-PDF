var flashCallback;

flashCallback = function() {
  return $(".flash").animate({
    height: 0,
    opacity: 0
  }, 350, function() {
    return $(this).remove();
  });
};

$(function() {
  $(".flash").bind('click', (function(_this) {
    return function(ev) {
      return flashCallback();
    };
  })(this));
  return setTimeout(flashCallback, 3000);
});
