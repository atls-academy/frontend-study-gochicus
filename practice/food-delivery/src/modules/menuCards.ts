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

export default MenuCard
