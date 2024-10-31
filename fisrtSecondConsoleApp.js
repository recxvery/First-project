
// console.log(personalMovieDb)

"use strict";

const numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели",""));

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

(personalMovieDb.count < 10 && personalMovieDb.count !== null) ? (alert("Просмотрено довольно мало фильмов")) : (personalMovieDb.count > 10  && personalMovieDb.count < 30) ? (alert("Вы классический зритель")) : 
(personalMovieDb.count >= 30) ? (alert("Вы киноман")) : alert("Произошла ошибка");

for (let i = 0; i < 2; i++) {
    let movie = prompt("Один из последних просмотренных фильмов?"), score_movie = +prompt("Насколько оцените его?")
    if (movie === null || movie.length > 50 || movie === '' || score_movie === 0 || score_movie === '') {
        i--;
        continue;
    }
    else { 
        personalMovieDb.movies[movie] = score_movie
            }
            alert('Спасибо за ответ!')
        };
        
console.log(personalMovieDb);

// let c = 0;
// while (c < 2){
    //     let movie = prompt("Один из последних просмотренных фильмов?"), score_movie = +prompt("Насколько оцените его?");
    //     if (movie === null || movie.length > 50 || movie === '' || score_movie === 0 || score_movie === '') {
//         continue;
//     }
//     else { 
    //     personalMovieDb.movies[movie] = score_movie;
    //     c++
    // }
    // }
    
    
    // let c = 0;
    // do {
        //     let movie = prompt("Один из последних просмотренных фильмов?"), score_movie = +prompt("Насколько оцените его?");
        //     if (movie === null || movie.length > 50 || movie === '' || score_movie === 0 || score_movie === '') {
            //         continue;
            //     }
            //     else { 
                //     personalMovieDb.movies[movie] = score_movie;
                //     c++;
                //     }
                // }
                // while (c < 2);
                
                



                // const numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели",""));
                
                // let personalMovieDb = {
                //     count: numberOfFilms,
                //     movies: {},
                //     actors: {},
                //     genres: [],
                //     privat: false
                // };
                
                
                // if (personalMovieDb.count < 10 && personalMovieDb != null && typeof(17) === typeof(personalMovieDb.count[numberOfFilms])) {
                //     alert("Просмотрено довольно мало фильмов")
                // } else if (personalMovieDb >= 10 && personalMovieDb < 30) {
                //     alert("Вы классический зритель")
                // } else if (personalMovieDb >= 30) {
                //     alert("Вы киноман!")
                // } else {
                //     alert("Произошла ошибка")
                // }
                // console.log(personalMovieDb.count)
                
                // let n = 0
                // while (n < 3) {
                //     let lastFilm = prompt("Один из просмотренных фильмов?"),
                //        lastFilmPoint = +(prompt("Насколько оцените его?"));
                    
                //     if ((lastFilm.length <= 50 && lastFilm !== '' && lastFilm !== null) && (lastFilmPoint !== '' && lastFilmPoint !== null)) {
                //         personalMovieDb.movies[lastFilm] = lastFilmPoint;
                //     } else {
                //         continue
                //     }
                //     n += 1
                // }