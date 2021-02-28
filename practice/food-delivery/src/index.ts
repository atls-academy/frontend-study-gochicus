import { menuTabs } from './modules/menuTabs'
import { productSlider } from './modules/productSlider'
import { caloriesCalculator } from './modules/caloriesCalculator'
import MenuCard from './modules/menuCards'
import { formDataExtraction } from './modules/formsDataExtraction'
import { countdownTimer } from './modules/countdownTimer'
import { userModalWindow } from './modules/modalWindow'
import { getResource } from './services/service'

document.addEventListener('DOMContentLoaded', () => {
  menuTabs('.slideContent', '.slideHeaderItem', '.slideHeaderItems')
  caloriesCalculator()
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
  countdownTimer('.timer', '2021-12-31')
  formDataExtraction('form')
  userModalWindow('[data-modal]', '.modal')
  productSlider({
    container: '.offer__slider',
    image: '.offer__slide',
    nextArrow: '.offer__slider-next',
    previousArrow: '.offer__slider-prev',
    totalCount: '#total',
    currentCount: '#current',
  })
})
