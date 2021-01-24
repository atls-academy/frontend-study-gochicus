const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const lastFilm: string = prompt(
    "Один из последних просмотренных Вами фильмов?",
    ""
  );
  const filmRating: number = +prompt("Какую оценку вы бы ему поставили?", "");

  if (
    lastFilm != null &&
    filmRating != null &&
    lastFilm !== "" &&
    lastFilm.length < 50
  ) {
    personalMovieDB.movies[lastFilm] = filmRating;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Вы довольно редко смотрите фильмы");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы среднестатистический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Да вы киноман!");
} else {
  console.log("Ошибка!");
}

console.log(personalMovieDB);
