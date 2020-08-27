module.exports = function () {

  // begin menu
  $('.burger').on('click', function (e) {
    e.preventDefault();
    $('.header__menu, .menu__close').addClass('active');
  });

  $('.menu__close').on('click', function (e) {
    e.preventDefault();
    if ($(window).width() >= '768') {
      $('.header__menu, .menu__close').removeClass('active');
    } else {
      $('.header__menu, .menu__close, .menu__link').removeClass('active');
      $('.submenu').slideUp();
    }
  });
  // end menu

  // begin submenu
  $('.menu__link--parent').on('click', function (e) {
    e.preventDefault();
    if ($(window).width() >= '768') {
      $('.submenu').removeClass('active');

      let targetSubmenu = $(this).attr('href');
      $(targetSubmenu).addClass('active');

      $('.menu__close').removeClass('active');
    } else {
      let targetParent = $(this).parents('.menu__item');
      $(targetParent).find('.submenu').slideToggle();
      $(this).toggleClass('active');
    }
  });

  $('.submenu__close').on('click', function (e) {
    e.preventDefault();
    $('.submenu').removeClass('active');
    $('.menu__close').addClass('active');
  });
  // end submenu

};