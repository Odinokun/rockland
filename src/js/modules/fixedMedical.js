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

  function blockFix() {
    //если прокрутка < высота прокручиваемого блока - высота окна
    if($(window).scrollTop() < (heightElem - $(window).height())) {
      fixedCard.addClass("fixed");
    } else {
      fixedCard.removeClass("fixed");
    }
  }

  $(window).scroll(function() {
    blockFix()
  });

  blockFix()
  // end fixed card in scroll

};