
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных Вами фильмов?", "");
  const b = prompt("Какую оценку вы бы ему поставили?", "");

  if (a != null && b != null && a !== "" && b !== "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
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