import $ from 'jquery'

export default class KvFade {
  constructor(selector) {
    // console.log('KvFade : constructor()')
    this.body = document.querySelectorAll('body')[0]
    this.kv = document.getElementsByClassName('sec-kv__content')
    this.ttl = document.getElementsByClassName('sec-kv__title')
    this.lead = document.getElementsByClassName('sec-kv__lead')
    this.logo = document.getElementsByClassName('sec-kv__logo')
    this.scroll = document.getElementsByClassName('sec-kv__scroll')
    this.bindEvents()
  }

  bindEvents() {
    // console.log('KvFade : bindEvents()')
    $(window).on('load', () => {
      // this.showKeyVisual()
      setTimeout(() => {
        this.showKeyVisual()
      }, 500)
    })
  }

  showKeyVisual() {
    // console.log('KvFade : showKeyVisual()')
    this.kv[0].classList.add('is-show')
    // setTimeout(() => {
    //   this.fadeTitle()
    // }, 1000)
  }

  fadeTitle() {
    // console.log('KvFade : fadeTitle()')
    this.ttl[0].classList.add('is-show')
    // DOMの削除
    setTimeout(() => {
      this.fadeLead()
    }, 1000)
  }

  fadeLead() {
    // console.log('KvFade : fadeLead()')
    this.lead[0].classList.add('is-show')
    // DOMの削除
    setTimeout(() => {
      this.fadeLogo()
    }, 1000)
  }

  fadeLogo() {
    // console.log('KvFade : fadeLogo()')
    this.logo[0].classList.add('is-show')
    this.fadeScroll()
  }

  fadeScroll() {
    // console.log('KvFade : fadeScroll()')
    this.scroll[0].classList.add('is-show')
  }
}
