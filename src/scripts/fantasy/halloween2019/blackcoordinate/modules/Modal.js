import $ from 'jquery'

export default class Modal {
  constructor(elem) {

    this.elem = elem
    this.targetPhoto = this.elem.getAttribute('data-large')
    this.target = document.querySelectorAll('.modal__content')[0]
    this.targetWrap = this.target.querySelectorAll('.modal__wrap')[0]
    this.close = this.target.querySelectorAll(`[data-modal-role="close"]`)[0]
    this.overlay = document.querySelectorAll(`[data-modal-role="overlay"]`)[0]
    this.photoParam = document.querySelectorAll('.modal__photo')[0]
    this.showClass = 'is-show'
    this.closeClass = 'is-close'
    this.showFlg = false

    this.init()
  }

  init() {
    this.bindEvents()
  }

  bindEvents() {
    this.elem.addEventListener('click', () => {
      if (!this.showFlg) this.showModal()
    })

    // overlayが共通なので、flgで管理
    this.target.addEventListener('click', () => {
      if (this.showFlg) this.hideModal()
    })

    this.close.addEventListener('click', () => {
      if (this.showFlg) this.hideModal()
    })
  }

  showModal() {
    this.showFlg = true
    this.overlay.classList.add(this.showClass)
    this.close.classList.add(this.showClass)
    this.target.classList.add(this.showClass)
    this.targetWrap.classList.add(this.showClass)

    document.documentElement.style.overflow = 'hidden'


    if (this.targetPhoto) {
      this.addPhoto()
    }
  }

  addPhoto() {
    // const movieParam = this.movieTarget.getAttribute('data-modal-movie-param')
    let addImage = document.createElement('div')

    // const addElem = `
    //   <img src="${this.targetPhoto}" alt="">
    // `

    addImage.innerHTML = `
      <img src="${this.targetPhoto}" alt="">
      `
    this.photoParam.appendChild(addImage)

    /* movieParam.appendChild(addElem) */
  }

  hideModal() {
    this.showFlg = false

    // close時にで小さくする為に、closeのclassを付与
    this.overlay.classList.remove(this.showClass)
    this.target.classList.remove(this.showClass)
    this.close.classList.remove(this.showClass)
    document.documentElement.style.overflow = 'auto'

    if (this.photoParam) {
      this.removeMovie()
    }
  }

  removeMovie() {
    this.photoParam.textContent = null
  }
}
