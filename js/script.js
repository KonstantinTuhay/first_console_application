"use strict";

//1)
let numberOfFilms;
console.log(numberOfFilms);

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();
// 2)

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// 3)

function remenberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (
      a !== "" &&
      a !== null &&
      a.length < 50 &&
      b !== "" &&
      b !== null &&
      b.length < 50
    ) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
remenberMyFilms();

function personalLevel() {
  if (personalMovieDB.count <= 10) {
    alert("Просмотрено мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}
personalLevel();
console.log(personalMovieDB.movies);

function showMyDB(hid) {
  if (hid != false) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
  console.log(personalMovieDB.genres);
}
writeYourGenres();
