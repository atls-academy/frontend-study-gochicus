function menuTabs(slideSelector, itemsSelector, slideParentSelector) {
  const menuParent: HTMLElement = document.querySelector(slideParentSelector)
  const menuImage: NodeListOf<Element> = document.querySelectorAll(slideSelector)
  const menuItems: NodeListOf<Element> = document.querySelectorAll(itemsSelector)

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
}
export { menuTabs }
