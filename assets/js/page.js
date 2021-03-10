//* Page Scripts for Metis article
//* Scroll to Top Button (requires jQuery and display:none in style.css)
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

tippy('[data-tippy-content]', {
  allowHTML: true,
  arrow: true,
  theme: 'dp-theme',
  trigger: 'click',
  placement: 'auto-start'
});
