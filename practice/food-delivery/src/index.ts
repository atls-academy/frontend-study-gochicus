document.addEventListener('DOMContentLoaded', () => {
  const menuParent: HTMLElement = document.querySelector('.slideHeaderItems')
  const menuImage: NodeListOf<Element> = document.querySelectorAll('.slideContent')
  const menuItems: NodeListOf<Element> = document.querySelectorAll('.slideHeaderItem')

  function hideContent(): void {
    menuImage.forEach((image) => {
      image.classList.add('hide')
      image.classList.remove('show', 'fade')
    })
    menuItems.forEach((item) => {
      item.classList.remove('slideHeaderItem-active')
    })
  }

  function showContent(index = 0): void {
    menuImage[index].classList.add('show', 'fade')
    menuImage[index].classList.remove('hide')
    menuItems[index].classList.add('slideHeaderItem-active')
  }

  hideContent()
  showContent()

  menuParent.addEventListener('click', (evt) => {
    const { target } = evt
    if (target && (target as HTMLElement).classList.contains('slideHeaderItem')) {
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

  function changeSlide(num: number) {
    slideIndex += num
    showSlides(slideIndex)
  }

  previousSlide.addEventListener('click', () => {
    changeSlide(-1)
  })

  nextSlide.addEventListener('click', () => {
    changeSlide(1)
  })
  /* slider pagination */

  const slider: HTMLElement = document.querySelector('.offer__slider')
  slider.style.position = 'relative'

  const dotContainer: HTMLOListElement = document.createElement('ol')
  const dots: Array<HTMLElement> = []

  dotContainer.classList.add('sliderIndicators')
  slider.append(dotContainer)

  for (let i = 0; i < offerSlides.length; i += 1) {
    const dot = document.createElement('li')
    dot.classList.add('sliderDot')
    dotContainer.append(dot)
    dots.push(dot)
    dot.addEventListener('click', () => {
      offerSlides.forEach((slide: HTMLElement) => slide.classList.add('hide'))
      offerSlides[i].classList.add('show')
      offerSlides[i].classList.remove('hide')
      dots.forEach((element: HTMLElement) => element.classList.remove('sliderDot-current'))
      dots[i].classList.add('sliderDot-current')
      currentSlide.textContent = `0${i + 1}`
    })
  }
  /*  calories calculator */

  const calcResultValue: HTMLElement = document.querySelector('.calculatingResult span')
  let sex: string = 'female'
  let heightData
  let weightData
  let ageData
  let activityLevel: number = 1.375

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex')
  } else {
    sex = 'female'
    localStorage.setItem('sex', 'female')
  }

  if (localStorage.getItem('activityLevel')) {
    activityLevel = Number(localStorage.getItem('activityLevel'))
  } else {
    activityLevel = 1.375
    localStorage.setItem('activityLevel', (1.375).toString())
  }

  function initLocalSettings(selector: string, active: string) {
    const elements = document.querySelectorAll(selector)

    elements.forEach((element) => {
      element.classList.remove(active)
      if (element.getAttribute('id') === localStorage.getItem('sex')) {
        element.classList.add(active)
      }

      if (element.getAttribute('data-activityLevel') === localStorage.getItem('activityLevel')) {
        element.classList.add(active)
      }
    })
  }

  initLocalSettings('#gender', 'calculatingChoose-itemActive')
  initLocalSettings('.calculatingChoose-big', 'calculatingChoose-itemActive')

  function calculateTotal() {
    if (!sex || !heightData || !weightData || !ageData || !activityLevel) {
      calcResultValue.textContent = '___'
      return
    }

    if (sex === 'female') {
      calcResultValue.textContent = Math.round(
        (447.6 + 9.2 * weightData + 3.1 * heightData - 4.3 * ageData) * activityLevel
      ).toString()
    } else {
      calcResultValue.textContent = Math.round(
        (88.36 + 13.4 * weightData + 4.8 * heightData - 5.7 * ageData) * activityLevel
      ).toString()
    }
  }

  calculateTotal()

  function getStaticInformation(selector: string, activeClass: string) {
    const elements = document.querySelectorAll(selector)

    elements.forEach((element: HTMLElement) => {
      element.addEventListener('click', (e: Event) => {
        if ((e.target as HTMLElement).getAttribute('data-activityLevel')) {
          activityLevel = Number((e.target as HTMLElement).getAttribute('data-activityLevel'))
          localStorage.setItem(
            'activityLevel',
            (e.target as HTMLElement).getAttribute('data-activityLevel')
          )
        } else {
          sex = (e.target as HTMLElement).getAttribute('id')
          localStorage.setItem('sex', (e.target as HTMLElement).getAttribute('id'))
        }

        elements.forEach((activeElement: HTMLElement) => {
          activeElement.classList.remove(activeClass)
          ;(e.target as HTMLElement).classList.add(activeClass)
        })

        calculateTotal()
      })
    })
  }

  getStaticInformation('#gender div', 'calculatingChoose-itemActive')
  getStaticInformation('.calculatingChoose-big div', 'calculatingChoose-itemActive')

  function getDynamicInformation(selector: string) {
    const inputField: HTMLInputElement = document.querySelector(selector)

    inputField.addEventListener('input', () => {
      if (inputField.value.match(/\D/g)) {
        inputField.style.border = '2px solid red'
      } else {
        inputField.style.border = 'none'
      }

      switch (inputField.getAttribute('id')) {
        case 'height':
          heightData = +inputField.value
          break
        case 'weight':
          weightData = +inputField.value
          break
        case 'age':
          ageData = +inputField.value
          break
        default:
          heightData = 0
          weightData = 0
          ageData = 0
      }
    })

    calculateTotal()
  }

  getDynamicInformation('#height')
  getDynamicInformation('#weight')
  getDynamicInformation('#age')
})
