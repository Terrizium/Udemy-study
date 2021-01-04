"use strict";

let numberOfFilms;


let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false

};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        }
        else {
            console.log('error');
            i--;
        }
        
    }
}

rememberMyFilms();
start();

function detectedPersonalLevel() {
 
  if (personalMovieDB.count < 10) {
    console.log ('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log ('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 30 && personalMovieDB.count <= 50) {
    console.log('Вы киноман');
} else {
    console.log('ошибка');  
}
}



function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}



function showMyDB() {
    if (!personalMovieDB.private){
    console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Ваш любимый жанр под номером: " + (i+1));
        personalMovieDB.genres[i] = a;
    }
}

writeYourGenres();
detectedPersonalLevel();