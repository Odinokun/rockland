module.exports = function() {

  // begin Slick slider
  $('#index-men-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg width=\"20\" height=\"33\" viewBox=\"0 0 20 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 1L1 16.5L19 32\"/></svg></div>",
    nextArrow: "<div class='next'><svg width=\"20\" height=\"33\" viewBox=\"0 0 20 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 32L19 16.5L1 0.999999\"/></svg></div>",
    responsive: [
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('#medical-steps__slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg width=\"20\" height=\"33\" viewBox=\"0 0 20 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 1L1 16.5L19 32\"/></svg></div>",
    nextArrow: "<div class='next'><svg width=\"20\" height=\"33\" viewBox=\"0 0 20 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 32L19 16.5L1 0.999999\"/></svg></div>",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('#index-reviews-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay:true,
    fade: true,
    prevArrow: "<div class='prev'><svg width=\"20\" height=\"33\" viewBox=\"0 0 20 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 1L1 16.5L19 32\"/></svg></div>",
    nextArrow: "<div class='next'><svg width=\"20\" height=\"33\" viewBox=\"0 0 20 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 32L19 16.5L1 0.999999\"/></svg></div>"
  });
  // end Slick slider

  // begin slickSlider from cosmetic page
  $('#cosmetics-slider__list').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    fade: true,
    speed: 1,
    prevArrow: "<div class='prev'><svg width=\"20\" height=\"33\" viewBox=\"0 0 20 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 1L1 16.5L19 32\"/></svg></div>",
    nextArrow: "<div class='next'><svg width=\"20\" height=\"33\" viewBox=\"0 0 20 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 32L19 16.5L1 0.999999\"/></svg></div>"
  });

  let img = $('#move-field__img');
  //array with offset coordinates
  let arrTransformImg =      ['',
    '90%, 90%', '70%, 90%', '50%, 90%', '30%, 90%', '10%, 90%', '-10%, 90%', '-30%, 90%', '-50%, 90%', '-70%, 90%', '-90%, 90%',
    '90%, 70%', '70%, 70%', '50%, 70%', '30%, 70%', '10%, 70%', '-10%, 70%', '-30%, 70%', '-50%, 70%', '-70%, 70%', '-90%, 70%',
    '90%, 50%', '70%, 50%', '50%, 50%', '30%, 50%', '10%, 50%', '-10%, 50%', '-30%, 50%', '-50%, 50%', '-70%, 50%', '-90%, 50%',
    '90%, 30%', '70%, 30%', '50%, 30%', '30%, 30%', '10%, 30%', '-10%, 30%', '-30%, 30%', '-50%, 30%', '-70%, 30%', '-90%, 30%',
    '90%, 10%', '70%, 10%', '50%, 10%', '30%, 10%', '10%, 10%', '-10%, 10%', '-30%, 10%', '-50%, 10%', '-70%, 10%', '-90%, 10%',
    '90%,-10%', '70%,-10%', '50%,-10%', '30%,-10%', '10%,-10%', '-10%,-10%', '-30%,-10%', '-50%,-10%', '-70%,-10%', '-90%,-10%',
    '90%,-30%', '70%,-30%', '50%,-30%', '30%,-30%', '10%,-30%', '-10%,-30%', '-30%,-30%', '-50%,-30%', '-70%,-30%', '-90%,-30%',
    '90%,-50%', '70%,-50%', '50%,-50%', '30%,-50%', '10%,-50%', '-10%,-50%', '-30%,-50%', '-50%,-50%', '-70%,-50%', '-90%,-50%',
    '90%,-70%', '70%,-70%', '50%,-70%', '30%,-70%', '10%,-70%', '-10%,-70%', '-30%,-70%', '-50%,-70%', '-70%,-70%', '-90%,-70%',
    '90%,-90%', '70%,-90%', '50%,-90%', '30%,-90%', '10%,-90%', '-10%,-90%', '-30%,-90%', '-50%,-90%', '-70%,-90%', '-90%,-90%'
  ];

  $('#cosmetics-slider__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
    let activePosition = $(this).find('.slick-active').data('position');

    if(activePosition === 0) {
      //conditions for the first slide
      $(img).css({ transform: 'translate(0, 0) scale(1)'});
    }else {
      //current square number
      $(img).css({ transform: 'translate(' + arrTransformImg[activePosition] + ') scale(2)'});
    }
  });
  // end slickSlider from cosmetic page

};