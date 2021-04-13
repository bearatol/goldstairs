"use strict";

$(function () {
  var mobile = false;
  if ($(document).width() < 768) mobile = true;else mobile = false;
  $(window).resize(function () {
    if ($(document).width() < 768) mobile = true;else mobile = false;
  });
  $(".selector-video__slider").slick({
    dots: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    lazyLoad: 'ondemand',
    infinite: false,
    prevArrow: $('.selector-video__controllers__prev'),
    nextArrow: $('.selector-video__controllers__next'),
    speed: 200,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false
      }
    }]
  });
  $(document).on("click", ".selector-video__slider__element", function () {
    var video = $(this).data("video");

    if (video) {
      if (!mobile) {
        var url = 'https://www.youtube.com/embed/' + video + '?autoplay=1&mute=1&loop=1&controls=2&disablekb=0&playlist=' + video + '&rel=0';
        $(".select-video").html('<iframe src="' + url + '" frameborder="0" allowfullscreen></iframe>');
      } else {
        var url = 'https://www.youtube.com/embed/' + video + '?rel=0';
        $(this).html('<iframe src="' + url + '" frameborder="0" allowfullscreen width="100%" height="100%"></iframe>');
      }
    }
  });
  $(".hits-slider").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    lazyLoad: 'ondemand',
    infinite: true,
    prevArrow: $('.hits-slider__prev'),
    nextArrow: $('.hits-slider__next'),
    speed: 200,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $(".main-completedworks__slider").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    lazyLoad: 'ondemand',
    infinite: true,
    prevArrow: $('.main-completedworks__prev'),
    nextArrow: $('.main-completedworks__next'),
    speed: 200,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $(".main-reviews-video__slider").slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    lazyLoad: 'ondemand',
    infinite: true,
    prevArrow: $('.main-reviews-video__prev'),
    nextArrow: $('.main-reviews-video__next'),
    speed: 200,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  });
  $(".main-reviews-video__slider__element .img").click(function () {
    var this_elem = $(this).parents(".main-reviews-video__slider__element");
    var video = this_elem.data("video");

    if (video) {
      if (!mobile) {
        var url = 'https://www.youtube.com/embed/' + video + '?autoplay=1&mute=1&loop=1&controls=2&disablekb=0&playlist=' + video + '&rel=0';
        this_elem.html('<iframe src="' + url + '" frameborder="0" allowfullscreen></iframe>');
      } else {
        var url = 'https://www.youtube.com/embed/' + video + '?rel=0';
        this_elem.html('<iframe src="' + url + '" frameborder="0" allowfullscreen width="100%" height="100%"></iframe>');
      }
    }
  });
  /*footet menu collapse*/

  $(".footer__menu__title").on("click", function () {
    if (mobile) $(this).toggleClass("show").parents(".footer__menu").find('ul').collapse('toggle');
  });
  $(window).resize(function () {
    if (!mobile) $(".footer__menu ul").removeClass("collapse");
  });
  /*mobile menu*/

  $(".menu-open-btn, .menu-open__close").on("click", function () {
    if (mobile) $(".menu-open").toggleClass("show");
  });
});