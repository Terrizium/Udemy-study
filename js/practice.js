"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};



for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    }
    else {
        console.log('error');
        i--;
    }
        
};

if (personalMovieDB.count < 10) {
    console.log ('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log ('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 30 && personalMovieDB.count <= 50) {
    console.log('Вы киноман');
} else console.log('ошибка');

console.log(personalMovieDB);



