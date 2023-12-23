"use strict";

//1)

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//2)

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//3)

let a, b;

for (let i = 0; i < 2; i++) {
  a = prompt("Один из последних просмотренных фильмов?", "");
  b = +prompt("На сколько оцените его?", "");

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

console.log(personalMovieDB);

// 4)

if (personalMovieDB["count"] <= 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB["count"] > 10 && personalMovieDB["count"] <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB["count"] > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
