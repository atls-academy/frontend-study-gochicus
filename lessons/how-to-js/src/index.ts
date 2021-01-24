let numberOfFilms: number = +prompt("Сколько фильмов вы просмотрели?", "");
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
const lastFilm: string = prompt("Последний просмотренный фильм?", "");
const filmRating: number = +prompt("На сколько оцените его?", "");
const nextLastFilm: string = prompt("Последний просмотренный фильм?", "");
const nextFilmRating: number = +prompt("На сколько оцените его?", "");

personalMoviesDB.movies[lastFilm] = filmRating;
personalMoviesDB.movies[nextLastFilm] = nextFilmRating;

console.log(personalMoviesDB);
