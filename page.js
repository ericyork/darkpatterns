//* Page Scripts for Metis article
//* Scroll to Top Button (requires jQuery and custom display styles)
$(document).ready(function(){
$(window).scroll(function(){
  if ($(this).scrollTop() > 300) {
    $('.to-top').fadeIn();
  } else {
    $('.to-top').fadeOut();
  }
});
});
//* Animates Scrolling (requires jQuery)
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
//* Mobile Navigaton Toggle
function navToggle() {
  var x = document.getElementById("main-nav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
  }
}
//* Modal Scripts
//* from a pen by Jack Zelig https://codepen.io/JackZelig/pen/ZLRZOY
$(".button").on("click", function() {
  var modal = $(this).data("modal");
  $(modal).show();
});

$(".modal").on("click", function(e) {
  var className = e.target.className;
  if(className === "modal" || className === "close"){
    $(this).closest(".modal").hide();
  }
});
