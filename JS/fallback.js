$(document).ready(function() {
  videoFallback();
  $(window).resize(function(){
    videoFallback();
  });
});
function videoFallback() {
  if(window.outerWidth < 604){
    $('video').css('display','none')
    $('html').css('background-image', 'url("../Images/fallback.jpg")');
    $('html').css('background-size', 'cover');
    $('html').css('background-repeat', 'no-repeat');
    $('html').css('height', 100 + '%');
    $('html').css('weight', 100 + '%');
  }
  if(window.outerWidth > 604){
    $('video').css('display','inline');
  }
}
