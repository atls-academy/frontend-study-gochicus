document.addEventListener("DOMContentLoaded", () => {
  function createMoviesList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);
    films.forEach((item, i) => {
      parent.innerHTML += ` <li class="promo__interactive-item"> ${
        i + 1
      }) ${item}
      <div class="delete"></div>
    </li>`;
    });
  }
  const sortArr = (arr) => {
    arr.sort();
  };
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const ul = document.querySelector(".promo__interactive-list");
  const form = document.querySelector("form.add");
  const input = form.querySelector(".adding__input");
  const checkbox = form.querySelector("[type='checkbox']");
  document.querySelectorAll(".delete").forEach((item, i) => {
    item.addEventListener("click", () => {
      item.parentElement.remove();
      movieDB.movies.splice(i, 1);
      createMoviesList(movieDB.movies, ul);
    });
  });

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let newFilm = input.value;
    const check = checkbox.checked;
    if (newFilm.length > 21) {
      newFilm = `${newFilm.substr(0, 22)}...`;
    }
    if (check === true) {
      console.log(`${newFilm} - любимый фильм`);
    }
    if (newFilm) {
      movieDB.movies.push(newFilm);
      createMoviesList(movieDB.movies, ul);
      form.reset();
    } else {
      alert("Введите корректные данные");
    }
  });
});
