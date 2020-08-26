module.exports = function() {

  // begin fixed card in scroll
  let fixedCard = $("#medical-top__left"); //фиксируемый блок
  let scrollCard = $("#medical-top__right"); //прокручиваемый блок

  let heightElem;

  if(fixedCard.length > 0) {
    heightElem = scrollCard.outerHeight(); //высота прокручиваемого блока учитывая отступы
  } else {
    heightElem = 0;
  }

  $(window).scroll(function() {
    //если прокрутка < высота прокручиваемого блока - высота окна
    if($(window).scrollTop() < (heightElem - $(window).height())) {
      fixedCard.addClass("fixed");
    } else {
      fixedCard.removeClass("fixed");
    }
  });
  // end fixed card in scroll

};