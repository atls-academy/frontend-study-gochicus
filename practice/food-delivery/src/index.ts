document.addEventListener('DOMContentLoaded', () => {
  const menuParent: HTMLElement = document.querySelector('.slideheader__items')
  const menuImage: NodeListOf<Element> = document.querySelectorAll('.slidecontent')
  const menuItems: NodeListOf<Element> = document.querySelectorAll('.slideheader__item')

  function hideContent(): void {
    menuImage.forEach((image) => {
      image.classList.add('hide')
      image.classList.remove('show', 'fade')
    })
    menuItems.forEach((item) => {
      item.classList.remove('slideheader__item_active')
    })
  }

  function showContent(index = 0): void {
    menuImage[index].classList.add('show', 'fade')
    menuImage[index].classList.remove('hide')
    menuItems[index].classList.add('slideheader__item_active')
  }

  hideContent()
  showContent()

  menuParent.addEventListener('click', (evt) => {
    const { target } = evt
    if (target && (target as HTMLElement).classList.contains('slideheader__item')) {
      menuItems.forEach((item: HTMLElement, i: number) => {
        if (target === item) {
          hideContent()
          showContent(i)
        }
      })
    }
  })
  /* Countdown timer food delivery */
  const deadline: string = '2021-05-11'
  function getTimeRemaining(endTime: string): Object {
    const now: Date = new Date()
    const timeCurrent: number = Date.parse(endTime) - Number(now)
    const days: number = Math.floor(timeCurrent / (1000 * 60 * 60 * 24))
    const hours: number = Math.floor((timeCurrent / (1000 * 60 * 60)) % 24)
    const minutes: number = Math.floor((timeCurrent / 1000 / 60) % 60)
    const seconds: number = Math.floor((timeCurrent / 1000) % 60)

    return {
      total: timeCurrent,
      days,
      hours,
      minutes,
      seconds,
    }
  }
  function getZero(num: number): string | number {
    if (num >= 0 && num < 10) {
      return `0${num}`
    }
    return num
  }
  function setTimer(selector: any, endTime: string) {
    const timer: HTMLElement = document.querySelector(selector)
    const days: HTMLElement = timer.querySelector('#days')
    const hours: HTMLElement = timer.querySelector('#hours')
    const minutes: HTMLElement = timer.querySelector('#minutes')
    const seconds: HTMLElement = timer.querySelector('#seconds')
    const timeInterval = setInterval(updateTimer, 1000)
    updateTimer()
    function updateTimer() {
      const time: any = getTimeRemaining(endTime)
      days.innerHTML = String(getZero(time.days))
      hours.innerHTML = String(getZero(time.hours))
      minutes.innerHTML = String(getZero(time.minutes))
      seconds.innerHTML = String(getZero(time.seconds))
      if (time.total <= 0) {
        clearInterval(timeInterval)
      }
    }
  }
  setTimer('.timer', deadline)
  /* Modal Window */
  const modalTrigger: NodeListOf<Element> = document.querySelectorAll('[data-modal]')
  const modalWindow: HTMLElement = document.querySelector('.modal')

  modalTrigger.forEach((button) => {
    button.addEventListener('click', openModal)
  })
  function closeModal() {
    modalWindow.classList.add('hide')
    modalWindow.classList.remove('show')
    document.body.style.overflow = ''
  }
  function openModal() {
    modalWindow.classList.add('show')
    modalWindow.classList.remove('hide')
    document.body.style.overflow = 'hidden'
  }

  modalWindow.addEventListener('click', (event) => {
    if (
      event.target === modalWindow ||
      (event.target as HTMLElement).getAttribute('data-close') === ''
    ) {
      closeModal()
    }
  })
  /* Menu class */
  class MenuCard {
    imageSrc: string

    alt: string

    title: string

    description: string

    price: number

    parentSelector: HTMLElement

    classes: string[]

    defaultClass: string

    constructor(
      src: string,
      alt: string,
      title: string,
      description: string,
      price: number,
      parentSelector: string,
      defaultClass: string,
      ...classes: string[]
    ) {
      this.imageSrc = src
      this.alt = alt
      this.title = title
      this.description = description
      this.price = price
      this.classes = classes
      this.defaultClass = 'menu__item'
      this.parentSelector = document.querySelector(parentSelector)
    }

    render() {
      const element = document.createElement('div')

      if (this.classes.length === 0) {
        element.classList.add(this.defaultClass)
      } else {
        this.classes.forEach((className) => element.classList.add(className))
      }

      element.innerHTML = `
                <img src=${this.imageSrc} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `
      this.parentSelector.append(element)
    }
  }
  /* client-server interaction */

  getResource('https://6027afc0dd4afd001754a9b0.mockapi.io/api/menu').then((data) => {
    data.forEach(({ imgSrc, alt, title, description, price }) => {
      new MenuCard(
        imgSrc,
        alt,
        title,
        description,
        price,
        '.menu .container',
        'menu__item'
      ).render()
    })
  })
  async function getResource(url) {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return res.json()
  }
  async function sendFormData(url: string, data: string) {
    const result: Response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })

    return result.json()
  }

  const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('form')

  const serverMessage = {
    loading: '../src/assets/img/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    error: 'Что-то пошло не так...',
  }

  forms.forEach((item: HTMLFormElement) => {
    postData(item)
  })

  function postData(form: HTMLFormElement) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      const statusMessage: HTMLImageElement = document.createElement('img')
      statusMessage.src = serverMessage.loading
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `
      form.insertAdjacentElement('afterend', statusMessage)

      const formData: FormData = new FormData(form)

      const toJSON = JSON.stringify(Object.fromEntries(formData.entries()))

      sendFormData('https://6027afc0dd4afd001754a9b0.mockapi.io/api/users', toJSON)
        .then((response: Response) => {
          if (response.ok) {
            return Promise.resolve(response).then(() => {
              showThanksModal(serverMessage.success)
              statusMessage.remove()
            })
          }
          return Promise.reject(response).then(() => {
            showThanksModal(serverMessage.error)
          })
        })
        .catch(() => {
          showThanksModal(serverMessage.error)
        })
        .finally(() => {
          form.reset()
        })
    })
  }

  function showThanksModal(thanksMessage: string) {
    const previousModalDialog = document.querySelector('.modal__dialog')

    previousModalDialog.classList.add('hide')
    openModal()

    const thanksModal = document.createElement('div')
    thanksModal.classList.add('modal__dialog')
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${thanksMessage}</div>
            </div>
        `
    document.querySelector('.modal').append(thanksModal)
    setTimeout(() => {
      thanksModal.remove()
      previousModalDialog.classList.add('show')
      previousModalDialog.classList.remove('hide')
      closeModal()
    }, 4000)
  }
  /* slider */
  const offerSlides: NodeListOf<HTMLElement> = document.querySelectorAll('.offer__slide')
  const previousSlide: HTMLElement = document.querySelector('.offer__slider-prev')
  const nextSlide: HTMLElement = document.querySelector('.offer__slider-next')
  const totalSlidesCount: HTMLElement = document.querySelector('#total')
  const currentSlide = document.querySelector('#current')
  let slideIndex: number = 1

  slidesCounter()
  showSlides(slideIndex)

  function slidesCounter() {
    if (offerSlides.length < 10) {
      totalSlidesCount.textContent = `0${offerSlides.length}`
    } else {
      totalSlidesCount.textContent = `${offerSlides.length}`
    }
  }

  function showSlides(index: number) {
    if (index > offerSlides.length) {
      slideIndex = 1
    }
    if (index < 1) {
      slideIndex = offerSlides.length
    }
    offerSlides.forEach((slide: HTMLElement) => slide.classList.add('hide'))
    offerSlides[slideIndex - 1].classList.add('show')
    offerSlides[slideIndex - 1].classList.remove('hide')

    if (offerSlides.length < 10) {
      currentSlide.textContent = `0${slideIndex}`
    } else {
      currentSlide.textContent = `${slideIndex}`
    }
  }

  function changeSlide() {
    showSlides(slideIndex)
  }

  previousSlide.addEventListener('click', () => {
    slideIndex -= 1
    changeSlide()
  })

  nextSlide.addEventListener('click', () => {
    slideIndex += 1
    changeSlide()
  })
})
