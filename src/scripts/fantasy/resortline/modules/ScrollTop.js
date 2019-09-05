import $ from 'jquery'

export default class ScrollTop {
  constructor(elem) {
    this.elem = elem
    this.bindEvents()
  }
  // init() {
  //   this.bindEvents()
  // }
  bindEvents() {
    // scrollTop('js-button', 500);
    // function scrollTop(elem,duration) {
    //   let target = document.getElementById(elem);
    //   target.addEventListener('click', function() {
    //     let currentY = window.pageYOffset;
    //     let step = duration/currentY > 1 ? 10 : 100;
    //     let timeStep = duration/currentY * step;
    //     let intervalID = setInterval(scrollUp, timeStep);
    //     function scrollUp(){
    //       currentY = window.pageYOffset;
    //       if(currentY === 0) {
    //       clearInterval(intervalID);
    //       } else {
    //       scrollBy( 0, -step );
    //       }
    //     }
    //   });
    // }
    $(function() {
      var topBtn = $('#page-top')
      topBtn.hide()
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          topBtn.fadeIn()
        } else {
          topBtn.fadeOut()
        }
      })
      topBtn.click(function() {
        $('body,html').animate(
          {
            scrollTop: 0,
          },
          500
        )
        return false
      })
    })
  }
}
