document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const ul: HTMLElement = document.querySelector(".promo__interactive-list");
  const form: HTMLFormElement = document.querySelector("form.add");
  const input: HTMLInputElement = form.querySelector(".adding__input");
  const checkbox: HTMLInputElement = form.querySelector("[type='checkbox']");
  const bin: NodeListOf<Element> = document.querySelectorAll(".delete");

  bin.forEach((item, i) => {
    item.addEventListener("click", (): void => {
      item.parentElement.remove();
      movieDB.movies.splice(i, 1);
      createMoviesList(movieDB.movies, ul);
    });
  });

  form.addEventListener("submit", (event): void => {
    event.preventDefault();
    let newFilm: string = input.value;
    const check: boolean = checkbox.checked;
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

  function createMoviesList(films: Array<string>, parent: HTMLElement) {
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

  const sortArr = (array: Array<string>): void => {
    array.sort();
  };
});
