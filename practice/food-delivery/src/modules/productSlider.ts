function productSlider({ container, image, nextArrow, previousArrow, totalCount, currentCount }) {
  const offerSlides: NodeListOf<HTMLElement> = document.querySelectorAll(image)
  const previousSlide: HTMLElement = document.querySelector(nextArrow)
  const nextSlide: HTMLElement = document.querySelector(previousArrow)
  const totalSlidesCount: HTMLElement = document.querySelector(totalCount)
  const currentSlide = document.querySelector(currentCount)
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

  const slider: HTMLElement = document.querySelector(container)
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
}

export { productSlider }
