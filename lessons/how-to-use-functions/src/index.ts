/* eslint-disable no-alert, no-console */
let countOfFilms: number = +prompt('Сколько фильмов вы уже посмотрели?', '')

const moviesCount = (): void => {
  while (countOfFilms === null || Number.isNaN(countOfFilms)) {
    countOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
  }
}

moviesCount()
interface Database {
  count: number
  movies: Object
  actors: Object
  genres: Array<string>
  private: boolean
}
const MoviesDB: Database = {
  count: countOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i += 1) {
    const lastFilm: string = prompt('Один из последних просмотренных фильмов?', '')
    const filmRating: number = +prompt('Какую оценку вы бы ему поставили?', '')

    if (lastFilm != null && filmRating != null && lastFilm !== '' && lastFilm.length < 50) {
      MoviesDB.movies[lastFilm] = filmRating
    } else {
      i -= 1
    }
  }
}

rememberMyFilms()

function detectPersonalLevel(): void {
  if (MoviesDB.count < 10) {
    console.log('Вы смотрите фильмы довольно редко')
  } else if (MoviesDB.count >= 10 && MoviesDB.count < 30) {
    console.log('Обычный кинозритель')
  } else if (MoviesDB.count >= 30) {
    console.log('Да вы киноман!')
  } else {
    console.log('Ошибка!')
  }
}

detectPersonalLevel()

function showMyDB() {
  if (MoviesDB.private === true) {
    console.log('Отказано в доступе')
  } else {
    console.log(MoviesDB)
  }
}

showMyDB()

function writeYourGenres() {
  for (let i = 1; i <= 3; i += 1) {
    MoviesDB.genres[i] = prompt(`Ваш любимый жанр № ${i}?`)
  }
  console.log(MoviesDB.genres)
}

writeYourGenres()
