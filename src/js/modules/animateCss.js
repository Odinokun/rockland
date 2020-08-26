module.exports = function() {

  // begin Animate CSS + WayPoints javaScript Plugin

  function animateLine() {
    let elem = document.querySelectorAll('.animate-decor');
    if(elem.length > 0) {
      for(let i = 0; i < elem.length; i++) {
        let waypoint = new Waypoint({
          element: elem[i],
          handler: function(direction) {
            this.element.classList.add('active');
          },
          offset: '80%'
        })
      }
    }
  }
  animateLine();

  function animateFadeIn() {
    let elem = document.querySelectorAll('.animate__animated');
    if(elem.length > 0) {
      for(let i = 0; i < elem.length; i++) {
        let waypoint = new Waypoint({
          element: elem[i],
          handler: function(direction) {
            this.element.classList.add('animate__fadeIn');
          },
          offset: '80%'
        })
      }
    }
  }
  animateFadeIn();

  // end Animate CSS + WayPoints javaScript Plugin

};