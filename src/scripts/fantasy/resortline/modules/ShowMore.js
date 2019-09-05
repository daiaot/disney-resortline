import $ from 'jquery'

export default class ShowMore {
  constructor(elem) {
    this.elem = elem
    this.bindEvents()
  }

  bindEvents() {
    $(window).on('load resize', function() {
      $(function() {
        $('._showmore').each(function() {
          $(this)
            .find('li:gt(5)')
            .each(function() {
              $(this).hide()
            })
          var btn = $('.gallery-wrap').find('.sec-btn__showmore')
          btn.click(function() {
            // $(this).parent().find("li").fadeIn(1000);
            $(this)
              .parent()
              .find('li')
              .fadeIn('slow')
            btn.remove()
            // $(this).fadeOut('fast');
          })
        })
      })
    })
  }
}
