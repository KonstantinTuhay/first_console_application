"use strict";

//1)

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "Число");

//2)

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//3)

let a = prompt("Один из последних просмотренных фильмов?", ""),
  b = +prompt("На сколько оцените его?", "От 1 до 10", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = +prompt("На сколько оцените его?", "От 1 до 10");

personalMovieDB["movies"][a] = b;
personalMovieDB["movies"][c] = d;

console.log(personalMovieDB);
