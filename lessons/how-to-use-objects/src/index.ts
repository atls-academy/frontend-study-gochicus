const personalMoviesDB = {
  moviesCount: (): number => {
    personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    while (personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
      personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
    return personalMoviesDB.count
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const lastFilm = prompt('Один из последних просмотренных фильмов?', '')
      const filmRating = prompt('Какую оценку вы бы ему поставили?', '')

      if (
        lastFilm != null &&
        filmRating != null &&
        lastFilm !== '' &&
        filmRating !== '' &&
        lastFilm.length < 50
      ) {
        personalMoviesDB.movies[lastFilm] = filmRating
      } else {
        i--
      }
    }
  },
  detectPersonalLevel: (): void => {
    if (personalMoviesDB.count < 10) {
      console.log('Вы смотрите фильмы довольно редко')
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
      console.log('Обычный кинозритель')
    } else if (personalMoviesDB.count >= 30) {
      console.log('Да вы киноман!')
    } else {
      console.log('Ошибка!')
    }
  },
  toggleVisibleMyDB: (): void => {
    if (personalMoviesDB.private === false) {
      personalMoviesDB.private = true
    } else {
      personalMoviesDB.private = false
    }
  },
  showMyDB: () => {
    if (personalMoviesDB.private === true) {
      console.log('Отказано в доступе')
    } else {
      console.log(personalMoviesDB)
    }
  },
  writeYourGenres: (): void => {
    for (let i = 1; i <= 3; i++) {
      const genre: string = prompt(`Ваш любимый жанр № ${i}?`)
      if (genre === '' || genre === null) {
        alert('Вы ввели некорректные данные')
        i--
      } else {
        personalMoviesDB.genres[i] = genre
      }
    }
    personalMoviesDB.genres.forEach((item, i): void => {
      console.log(`Любимый жанр № ${i} - это ${personalMoviesDB.genres[i]} `)
    })
    console.log(personalMoviesDB.genres)
  },
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}
personalMoviesDB.moviesCount()
personalMoviesDB.rememberMyFilms()
personalMoviesDB.detectPersonalLevel()
personalMoviesDB.showMyDB()
personalMoviesDB.toggleVisibleMyDB()
personalMoviesDB.showMyDB()
personalMoviesDB.writeYourGenres()
