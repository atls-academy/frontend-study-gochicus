function caloriesCalculator() {
  const calcResultValue = document.querySelector('.calculatingResult span') as HTMLElement
  let sex: string = 'female'
  let heightData: number
  let weightData: number
  let ageData: number
  let activityLevel: number = 1.375

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex') as string
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

  initLocalSettings('#gender', 'calculatingChooseItem-active')
  initLocalSettings('.calculatingChooseBig', 'calculatingChooseItem-active')

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

    elements.forEach((element: Element) => {
      element.addEventListener('click', (e: Event) => {
        if ((e.target as HTMLElement).getAttribute('data-activityLevel')) {
          activityLevel = Number((e.target as HTMLElement).getAttribute('data-activityLevel'))
          localStorage.setItem(
            'activityLevel',
            (e.target as HTMLElement).getAttribute('data-activityLevel') as string
          )
        } else {
          sex = (e.target as HTMLElement).getAttribute('id') as string
          localStorage.setItem('sex', (e.target as HTMLElement).getAttribute('id') as string)
        }

        elements.forEach((activeElement: Element) => {
          activeElement.classList.remove(activeClass)
          ;(e.target as HTMLElement).classList.add(activeClass)
        })

        calculateTotal()
      })
    })
  }

  getStaticInformation('#gender div', 'calculatingChooseItem-active')
  getStaticInformation('.calculatingChooseBig div', 'calculatingChooseItem-active')

  function getDynamicInformation(selector: string) {
    const inputField = document.querySelector(selector) as HTMLInputElement

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
}

export { caloriesCalculator }
