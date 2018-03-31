//* Page Scripts

$(document).ready(function(){
//Check to see if the window is top if not then display button
$(window).scroll(function(){
  if ($(this).scrollTop() > 200) {
    $('.to-top').fadeIn();
  } else {
    $('.to-top').fadeOut();
  }
});
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top-80
    }, 500);
    return false;
    }
  }
  });
});

function navToggle() {
  var x = document.getElementById("main-nav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
  }
}
