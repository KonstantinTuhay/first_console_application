"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "").trim();

  while (
    numberOfFilms === null ||
    numberOfFilms === "" ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "").trim();
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB["count"] <= 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB["count"] > 10 && personalMovieDB["count"] <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB["count"] > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB["privat"]);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    const genre = prompt(`Ваш любимы жанр под номером ${i + 1}`, "");
    personalMovieDB["genres"][i] = genre;
  }
}
writeYourGenres();
console.log(personalMovieDB);
