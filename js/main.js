'use strict';
/* ----------------------------- */
/*  hamburger-menu */
/* ----------------------------- */
$(function () {
  $('#js-hamburger').click(function () {
    $('body').toggleClass('is-drawerActive');
    $('.one-point-txt').toggleClass('is-show');

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true');
      $('#js-global-menu').attr('area-hidden', 'false');
    } else {
      $(this).attr('aria-expanded', 'false');
      $('#js-global-menu').attr('area-hidden', 'true');
    }
  });

  $('#js-drawer-background').click(function () {
    $('body').removeClass('is-drawerActive');
    $('#js-hamburger').attr('aria-expanded', 'false');
    $('#js-global-menu').attr('area-hidden', 'true');
    $('.one-point-txt').removeClass('is-show');
  });

  $('.hamburger-nav-link').click(function () {
    $('body').removeClass('is-drawerActive');
    $('#js-hamburger').attr('aria-expanded', 'false');
    $('#js-global-menu').attr('area-hidden', 'true');
    $('.one-point-txt').removeClass('is-show');
  });
  /* ----------------------------- */
  /*  //hamburger-menu */
  /* ----------------------------- */
  /* ----------------------------- */
  /*  header-logo-color */
  /* ----------------------------- */
  $(window).scroll(function () {
    var imgHeight = $('.mv-img-box').outerHeight();
    var bgHeight = $('.mv-body__right').outerHeight();
    if ($(window).scrollTop() < imgHeight - 50) {
      $('.site-ttl').removeClass('black');
    } else {
      $('.site-ttl').addClass('black');
    }

    if ($(window).scrollTop() < bgHeight - 50) {
      $('.hamburger__line, .hamburger-label').removeClass('black');
    } else {
      $('.hamburger__line, .hamburger-label').addClass('black');
    }
  });

  /* ----------------------------- */
  /*  //header-logo-color */
  /* ----------------------------- */
  /* ----------------------------- */
  /*  about-inner-height */
  /* ----------------------------- */
  var vHeight = '0';
  $('.js-about-inner').each(function () {
    if ($(this).height() > vHeight) {
      vHeight = $('.ceo-message-box').height();
    }
    $('.js-about-inner').height(vHeight + 300);
  });

  $('#mv').each(function () {
    if ($(this).height() > vHeight) {
      vHeight = $('.mv-body__right').height();
    }
    $('#mv').height(vHeight);
  });

  // $('#lower-mv').each(function () {
  //   if ($(this).height() > vHeight) {
  //     vHeight = $('.lower-body__right').height();
  //   }
  //   $('#lower-mv').height(vHeight);
  // });
  /* ----------------------------- */
  /*  //about-inner-height */
  /* ----------------------------- */
});
