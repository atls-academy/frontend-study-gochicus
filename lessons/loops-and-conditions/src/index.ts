/* eslint-disable no-alert, no-console */
const numberOfMyFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const myPersonalMovieDB = {
  count: numberOfMyFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

for (let i = 0; i < 2; i += 1) {
  const lastFilm: string = prompt('Один из последних просмотренных Вами фильмов?', '')
  const filmRating: number = +prompt('Какую оценку вы бы ему поставили?', '')

  if (lastFilm != null && filmRating != null && lastFilm !== '' && lastFilm.length < 50) {
    myPersonalMovieDB.movies[lastFilm] = filmRating
  } else {
    i -= 1
  }
}

if (myPersonalMovieDB.count < 10) {
  console.log('Вы довольно редко смотрите фильмы')
} else if (myPersonalMovieDB.count >= 10 && myPersonalMovieDB.count < 30) {
  console.log('Вы среднестатистический зритель')
} else if (myPersonalMovieDB.count >= 30) {
  console.log('Да вы киноман!')
} else {
  console.log('Ошибка!')
}

console.log(myPersonalMovieDB)
