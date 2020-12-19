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
  const filmOrder = movieDB.movies.sort();
  const ul = document.querySelector(".promo__interactive-list");
  ul.innerHTML = "";
  filmOrder.forEach((item, i) => {
    ul.innerHTML += ` <li class="promo__interactive-item"> ${i + 1}) ${item}
      <div class="delete"></div>
    </li>`;
  });
}
replaceOrder();

function removeAds() {
  const el = document.querySelectorAll(".promo__adv-title ~ img ");
  el.forEach((item, i) => {
    item.remove();
  });
}
removeAds();
function changeGenre() {
  const genre = document.querySelector(".promo__genre");
  genre.textContent = "Драма";
}
changeGenre();

function changeBackground() {
  const bg = document.querySelector(".promo__bg");
  bg.style.backgroundImage = 'url("img/bg.jpg")';
}
changeBackground();
