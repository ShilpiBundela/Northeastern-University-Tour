$(document).ready( function(){
  var navbarContent = document.getElementById('navbar');
  navbarContent.innerHTML += '<div class="navbar-logo"><img src="../Images/NortheasternLogo.png" alt="logo.png"></div>'+
                              '<ul class="docked-nav">'+
                              '<div class="project-navbar left">'+
                              '<a href="../Views/index.html"><li>Home</li></a></div><div class="project-navbar right">'+
                              '<a href="../Views/tour.html"><li>Virtual Tour</li></a><a href="../Views/Convinience.html"><li>Convenience Near NEU</li></a><a href="../Views/insideNEU.html"><li>University Location</li></a><a href="../Views/inquiryform.html"><li>Inquiries</li></a></div></ul>';
});
