"use strict";

$(document).ready(function() {

  $('.menu-toggle').click(function() {
    $(this).toggleClass('active');
    $('.global-nav').toggleClass('panelactive');
  });
  $('.global-nav ul li a').click(function() {
    $('.menu-toggle').removeClass('active');
    $('.global-nav').removeClass('panelactive');
  });

  $('.slider').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true
  });

});