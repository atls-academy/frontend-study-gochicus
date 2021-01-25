let numberOfFilms: number = +prompt("Сколько фильмов вы уже посмотрели?", "");

const moviesCount = (): void => {
  while (numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
};

moviesCount();
interface Database {
  count: number;
  movies: Object;
  actors: Object;
  genres: Array<string>;
  private: boolean;
}
const personalMoviesDB: Database = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastFilm: string = prompt(
      "Один из последних просмотренных фильмов?",
      ""
    );
    const filmRating: number = +prompt("Какую оценку вы бы ему поставили?", "");

    if (
      lastFilm != null &&
      filmRating != null &&
      lastFilm !== "" &&
      lastFilm.length < 50
    ) {
      personalMoviesDB.movies[lastFilm] = filmRating;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel(): void {
  if (personalMoviesDB.count < 10) {
    console.log("Вы смотрите фильмы довольно редко");
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log("Обычный кинозритель");
  } else if (personalMoviesDB.count >= 30) {
    console.log("Да вы киноман!");
  } else {
    console.log("Ошибка!");
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMoviesDB.private === true) {
    console.log("Отказано в доступе");
  } else {
    console.log(personalMoviesDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMoviesDB.genres[i] = prompt(`Ваш любимый жанр № ${i}?`);
  }
  console.log(personalMoviesDB.genres);
}

writeYourGenres();
