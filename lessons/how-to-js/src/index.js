let  numberofFilms = +prompt('Сколько фильмов вы просмотрели?', '');
const personalMoviesDB = {
  count: numberofFilms,
  movies: {

  },
  actors: {

  },
  geners: [],
  private:false
};
const a =prompt('Последний просмотренный фильм?', '');
const b =prompt('На сколько оцените его?', '');
const c =prompt('Последний просмотренный фильм?', '');
const d =prompt('На сколько оцените его?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
