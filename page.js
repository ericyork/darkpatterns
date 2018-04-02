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
//* Modals in Gallery
var modal = document.getElementById('darkPatterns');
var btn = document.getElementById("darkBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
