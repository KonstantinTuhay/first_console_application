"use strict";

//1)
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

// 2)

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
