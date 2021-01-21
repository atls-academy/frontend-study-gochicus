let numberofFilms: number = +prompt("Сколько фильмов вы просмотрели?", "");
interface Database {
  count: number;
  movies: Object;
  actors: Object;
  genres: Array<string>;
  private: boolean;
}
const personalMoviesDB: Database = {
  count: numberofFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
const a: string = prompt("Последний просмотренный фильм?", "");
const b: number = +prompt("На сколько оцените его?", "");
const c: string = prompt("Последний просмотренный фильм?", "");
const d: number = +prompt("На сколько оцените его?", "");

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
