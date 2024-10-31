
"use strict";

let numberOfFilms;

function start() {  
    numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели"," "));
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели",""));
    }
}


start();

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDb)
    }
};



function writeYourGenres() {
    for (let i = 0; i <= 2;i++) {
        personalMovieDb.genres[i] = prompt(`Ваш любимый жанр под номером ${personalMovieDb.genres.length + 1}`, "");
    }  
};


function detectPersonLvl() {
    (personalMovieDb.count < 10 && personalMovieDb.count !== null) ? (alert("Просмотрено довольно мало фильмов")) : (personalMovieDb.count > 10  && personalMovieDb.count < 30) ? (alert("Вы классический зритель")) : 
    (personalMovieDb.count >= 30) ? (alert("Вы киноман")) : alert("Произошла ошибка");
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let movie = prompt("Один из последних просмотренных фильмов?", ""), score_movie = +prompt("Насколько оцените его?", "")
        if (movie === null || movie.length > 50 || movie === '' || score_movie === 0 || score_movie === '') {
            i--;
            continue;
        }
        else { 
            personalMovieDb.movies[movie] = score_movie
        }
    };
    alert('Спасибо за ответ!')
} 

detectPersonLvl();

showMyDB(personalMovieDb.privat);


writeYourGenres();

rememberMyFilms();




console.log(personalMovieDb);