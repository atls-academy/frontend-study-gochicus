const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
function replaceOrder(): void {
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
  const el: NodeListOf<Element> = document.querySelectorAll(
    ".promo__adv-title ~ img "
  );
  el.forEach((item, i): void => {
    item.remove();
  });
}
removeAds();
function changeGenre(): void {
  const genre: HTMLElement = document.querySelector(".promo__genre");
  genre.textContent = "Драма";
}
changeGenre();

function changeBackground(): void {
  const bg: HTMLElement = document.querySelector(".promo__bg");
  bg.style.backgroundImage = 'url("img/bg.jpg")';
}
changeBackground();
