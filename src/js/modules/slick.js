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
    prevArrow: "<div class='prev'><svg width=\"20\" height=\"33\" viewBox=\"0 0 20 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 1L1 16.5L19 32\"/></svg></div>",
    nextArrow: "<div class='next'><svg width=\"20\" height=\"33\" viewBox=\"0 0 20 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 32L19 16.5L1 0.999999\"/></svg></div>"
  });



  let arrScale =      [22, 32, 50];
  let arrTransformX = [23, 33, 51];
  let arrTransformY = [24, 34, 52];

  // console.log(param);
  $('#cosmetics-slider__list').on('afterChange', function(event, slick, currentSlide, nextSlide){
    // console.log('arr = ' + arr[slick.currentSlide]);
    // console.log(slick.currentSlide);
    console.log('obj = ' + arrScale[currentSlide]);
  });
  // end slickSlider from cosmetic page

};