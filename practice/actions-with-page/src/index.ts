const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
function replaceOrder() {
  const filmOrder: Array<string> = movieDB.movies.sort();
  const ul: HTMLElement = document.querySelector(".promo__interactive-list");
  ul.innerHTML = "";
  filmOrder.forEach((item, i): void => {
    ul.innerHTML += ` <li class="promo__interactive-item"> ${i + 1}) ${item}
      <div class="delete"></div>
    </li>`;
  });
}
replaceOrder();

function removeAds(): void {
  const element: NodeListOf<Element> = document.querySelectorAll(
    ".promo__adv-title ~ img "
  );
  element.forEach((item, i): void => {
    item.remove();
  });
}
removeAds();
function changeGenre(): string {
  const genre: HTMLElement = document.querySelector(".promo__genre");
  return (genre.textContent = "Драма");
}
changeGenre();

function changeBackground(): string {
  const backgroundImage: HTMLElement = document.querySelector(".promo__bg");
  return (backgroundImage.style.backgroundImage = 'url("img/bg.jpg")');
}
changeBackground();
