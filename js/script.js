"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');
let movie = prompt('Один из последних просмотренных фильмов?', 'Logan');
let quality = prompt('На сколько оцените его?', '8.1');
let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};

    personalMovieDB.movies[movie] = quality;
    

console.log(personalMovieDB);
console.log(personalMovieDB.movies);