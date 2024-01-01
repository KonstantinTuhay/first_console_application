"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: () => {
    personalMovieDB.count = +prompt(
      "Сколько фильмов вы уже посмотрели?",
      ""
    ).trim();

    while (
      personalMovieDB.count === null ||
      personalMovieDB.count === "" ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "Сколько фильмов вы уже посмотрели?",
        ""
      ).trim();
    }
  },

  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = +prompt("На сколько оцените его?", "").trim();

      if (
        a === "" ||
        b === "" ||
        a === null ||
        b === null ||
        a.length > 50 ||
        b.length > 50
      ) {
        i--;
      } else {
        personalMovieDB["movies"][a] = b;
      }
    }
  },

  detectPersonalLevel: () => {
    if (personalMovieDB["count"] <= 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (
      personalMovieDB["count"] > 10 &&
      personalMovieDB["count"] <= 30
    ) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB["count"] > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },

  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: () => {
    for (let i = 0; i < 3; i++) {
      const genre = prompt(`Ваш любимы жанр под номером ${i + 1}`, "");

      genre === "" || genre === null
        ? i--
        : (personalMovieDB["genres"][i] = genre);
    }

    this.genres.forEach((item, index, array) => {
      console.log(`Любимый жанр №${index + 1} - это ${item}`);
    });
  },

  toggleVisibleMyDB: () => {
    this.privat ? (this.privat = false) : (this.privat = true);
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB["privat"]);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);
