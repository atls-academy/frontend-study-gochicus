/* eslint-disable no-alert, no-console */
const personalMovies = {
  moviesCount: (): number => {
    personalMovies.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    while (personalMovies.count == null || Number.isNaN(personalMovies.count)) {
      personalMovies.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
    return personalMovies.count
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i += 1) {
      const lastFilm = prompt('Один из последних просмотренных фильмов?', '')
      const filmRating = prompt('Какую оценку вы бы ему поставили?', '')

      if (
        lastFilm != null &&
        filmRating != null &&
        lastFilm !== '' &&
        filmRating !== '' &&
        lastFilm.length < 50
      ) {
        personalMovies.movies[lastFilm] = filmRating
      } else {
        i -= 1
      }
    }
  },
  detectPersonalLevel: (): void => {
    if (personalMovies.count < 10) {
      console.log('Вы смотрите фильмы довольно редко')
    } else if (personalMovies.count >= 10 && personalMovies.count < 30) {
      console.log('Обычный кинозритель')
    } else if (personalMovies.count >= 30) {
      console.log('Да вы киноман!')
    } else {
      console.log('Ошибка!')
    }
  },
  toggleVisibleMyDB: (): void => {
    if (personalMovies.private === false) {
      personalMovies.private = true
    } else {
      personalMovies.private = false
    }
  },
  showMyDB: () => {
    if (personalMovies.private === true) {
      console.log('Отказано в доступе')
    } else {
      console.log(personalMovies)
    }
  },
  writeYourGenres: (): void => {
    for (let i = 1; i <= 3; i += 1) {
      const genre: string = prompt(`Ваш любимый жанр № ${i}?`)
      if (genre === '' || genre === null) {
        alert('Вы ввели некорректные данные')
        i -= 1
      } else {
        personalMovies.genres[i] = genre
      }
    }
    personalMovies.genres.forEach((item, i): void => {
      console.log(`Любимый жанр № ${i} - это ${personalMovies.genres[i]} `)
    })
    console.log(personalMovies.genres)
  },
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}
personalMovies.moviesCount()
personalMovies.rememberMyFilms()
personalMovies.detectPersonalLevel()
personalMovies.showMyDB()
personalMovies.toggleVisibleMyDB()
personalMovies.showMyDB()
personalMovies.writeYourGenres()
