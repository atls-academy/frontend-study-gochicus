/* eslint-disable no-alert, no-console */
const numberOfFilms: number = +prompt('Сколько фильмов вы просмотрели?', '')

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}
const lastFilm: string = prompt('Последний просмотренный фильм?', '')
const filmRating: number = +prompt('На сколько оцените его?', '')
const nextLastFilm: string = prompt('Последний просмотренный фильм?', '')
const nextFilmRating: number = +prompt('На сколько оцените его?', '')

personalMoviesDB.movies[lastFilm] = filmRating
personalMoviesDB.movies[nextLastFilm] = nextFilmRating

console.log(personalMoviesDB)
