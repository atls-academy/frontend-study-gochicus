const personalMoviesDB = {
  moviesCount: () => {
    personalMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMoviesDB.count === "" ||
      personalMoviesDB.count == null ||
      isNaN(personalMoviesDB.count)
    ) {
      personalMoviesDB.count = +prompt(
        "Сколько фильмов вы уже посмотрели?",
        ""
      );
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Один из последних просмотренных фильмов?", "");
      let b = prompt("Какую оценку вы бы ему поставили?", "");

      if (a != null && b != null && a !== "" && b !== "" && a.length < 50) {
        personalMoviesDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMoviesDB.count < 10) {
      console.log("Вы смотрите фильмы довольно редко");
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
      console.log("Обычный кинозритель");
    } else if (personalMoviesDB.count >= 30) {
      console.log("Да вы киноман!");
    } else {
      console.log("Ошибка!");
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMoviesDB.private === false) {
      personalMoviesDB.private = true;
    } else {
      personalMoviesDB.private = false;
    }
  },
  showMyDB: () => {
    if (personalMoviesDB.private === true) {
      console.log("Отказано в доступе");
    } else {
      console.log(personalMoviesDB);
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр № ${i}?`);
      if (genre === "" || genre === null) {
        alert("Вы ввели некорректные данные");
        i--;
      } else {
        personalMoviesDB.genres[i] = genre;
      }
    }
    personalMoviesDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр № ${i} - это ${personalMoviesDB.genres[i]} `);
    });
    console.log(personalMoviesDB.genres);
  },
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
personalMoviesDB.moviesCount();
personalMoviesDB.rememberMyFilms();
personalMoviesDB.detectPersonalLevel();
personalMoviesDB.showMyDB();
personalMoviesDB.toggleVisibleMyDB();
personalMoviesDB.showMyDB();
personalMoviesDB.writeYourGenres();
