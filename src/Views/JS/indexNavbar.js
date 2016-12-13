$(document).ready(function(){
  pageResize();
  $(window).resize(function(){
    pageResize();
  });
});

function pageResize() {
  if(window.outerWidth > 1000){
    $('#NEU').css('font-size', 80);
    $('#NEU').css('margin-left', 35 + '%');
    $('#NEU').css('margin-top', 15 + '%');
    $('.project-navbar').hide();
    $('.navbar-left').show();
  } else {
    if(window.outerWidth <= 1014) {
        $('#NEU').css('font-size', 40);
    }
    if(window.outerWidth <= 650) {
      $('#NEU').css('margin-left', 18 + '%');
      $('#NEU').css('margin-top', 25 + '%');
    }
    $('.navbar-left').hide();
    $('.project-navbar').show();
  }
}
