import { menuTabs } from './modules/menuTabs'
import { productSlider } from './modules/productSlider'
import { caloriesCalculator } from './modules/caloriesCalculator'
import { menu } from './modules/menuCards'
import { formDataExtraction } from './modules/formsDataExtraction'
import { countdownTimer } from './modules/countdownTimer'
import { userModalWindow } from './modules/modalWindow'

document.addEventListener('DOMContentLoaded', () => {
  menuTabs('.slideContent', '.slideHeaderItem', '.slideHeaderItems')
  caloriesCalculator()
  menu()
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
