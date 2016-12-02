$(function() {
  $('.slider-arrow').click(function() {
    if ($(this).hasClass('show')) {
      $(".slider-arrow, .panel").animate({
        left: "+=430"
      }, 700);
      $(this).html('Close<br>Panel').removeClass('show').addClass('hide');
    } else {
      $(".slider-arrow, .panel").animate({
        left: "-=430"
      }, 700);
      $(this).html('Open<br>Panel').removeClass('hide').addClass('show');
    }
  });
});
