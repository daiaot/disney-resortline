import $ from 'jquery'

export default class LoadScroll {
  constructor(elem) {
    this.elem = elem
    this.bindEvents()
  }

  bindEvents() {

    var targetOffset;

    setTimeout(() => {
      if (window.location.hash && $(window.location.hash).length != 0 && window.location.hash != '#tdl-1' && window.location.hash != '#tdl-2' && window.location.hash != '#tds-1' && window.location.hash != '#tds-2') {
        var target = $( window.location.hash );
        targetOffset = $(target).offset().top;
        $('html,body').animate({scrollTop: targetOffset}, "slow");
      } else {
        targetOffset = $('#content-area').offset().top;
        $('html,body').stop().animate({scrollTop: targetOffset}, "slow");
      }
    }, 1000)

  }
}
