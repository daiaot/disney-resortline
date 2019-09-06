import ScrollReveal from 'scrollreveal'
import { TweenMax, Power3, TimelineMax } from 'gsap'

export default class ScrollFade {
  constructor(elem, opts) {
    this.elem = elem
    this.opts = opts
    this.flg = false
    this.init()
  }

  init() {
    if (this.opts.type === 'fade_up') {
      TweenMax.set(this.elem, { y: 20, opacity: 0 })
      window.addEventListener('scroll', this.fadeInScroll.bind(this))
    }
    if (this.opts.type === 'splash') {
      this.LottieAnimation = new LottieAnimation(this.elem)
      window.addEventListener('scroll', this.lottieAnimScroll.bind(this))
    }
  }

  fadeInScroll() {
    const elemTopOffset = this.elem.getBoundingClientRect().top
    if (elemTopOffset < window.innerHeight * 0.8) {
      if (!this.flg) {
        this.flg = true
        TweenMax.to(this.elem, 0.5, { y: 0, opacity: 1, ease: Power3.easeOut })
      }
    }
  }
  lottieAnimScroll() {
    const elemTopOffset = this.elem.getBoundingClientRect().top
    if (elemTopOffset < window.innerHeight * 0.8) {
      if (!this.flg) {
        this.flg = true
        this.LottieAnimation.play()
      }
    }
  }

}
