$(document).ready(function(){
  var navbarContent = document.getElementById('floating-nav');
  navbarContent.innerHTML += '<li><a href="#"><i class="fa fa-th-large"></i></a>' +
    '<ul>' +
      '<li><a href="../Views/index.html">Home</a></li>'+
      '<li><a href="../Views/Convinience.html">Convinience Near NEU</a></li>' +
      '<li><a href="../Views/insideNEU.html">University Locations</a></li>' +
      '<li><a href="../Views/inquiryform.html">Inquiries</a></li>' +
      '<li><a href="#">Site Map</a></li>' +
    '</ul>'+
  '</li>';
  floatNavigation();
  $(window).resize(function(){
    floatNavigation();
  });
});
function floatNavigation() {
  if(window.outerWidth < 604){
    $('.project-navbar').hide();
    $('.floating-nav').css('display', 'inline');
  }
  if(window.outerWidth > 604 && window.outerWidth < 1000){
    $('.floating-nav').css('display', 'none');
    $('.project-navbar').show();
  }
}
