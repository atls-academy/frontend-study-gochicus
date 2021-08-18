const movieDB = {
  movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...'],
}
function replaceOrder() {
  const filmOrder: Array<string> = movieDB.movies.sort()
  const ul = document.querySelector('.promo__interactive-list') as HTMLElement
  ul.innerHTML = ''
  filmOrder.forEach((item, i): void => {
    ul.innerHTML += ` <li class="promo__interactive-item"> ${i + 1}) ${item}
      <div class="delete"></div>
    </li>`
  })
}
replaceOrder()

function removeAds(): void {
  const element: NodeListOf<Element> = document.querySelectorAll('.promo__adv-title ~ img ')
  element.forEach((item, i): void => {
    item.remove()
  })
}
removeAds()
function changeGenre() {
  const genre = document.querySelector('.promo__genre') as HTMLElement
  genre.textContent = 'Драма'
}
changeGenre()

function changeBackground() {
  const backgroundImage = document.querySelector('.promo__bg') as HTMLElement
  backgroundImage.style.backgroundImage = 'url("img/bg.jpg")'
}
changeBackground()
