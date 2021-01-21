let numberOfFilms: number = +prompt("Сколько фильмов вы уже посмотрели?", "");

const moviesCount = (): void => {
  while (typeof numberOfFilms === null || isNaN(numberOfFilms)) {
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
let personalMoviesDB: Database = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms(): unknown {
  for (let i = 0; i < 2; i++) {
    let a: string = prompt("Один из последних просмотренных фильмов?", "");
    let b: number = +prompt("Какую оценку вы бы ему поставили?", "");

    if (typeof a != null && typeof b != null && a !== "" && a.length < 50) {
      return (personalMoviesDB.movies[a] = b);
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
