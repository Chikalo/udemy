"use strict";

//const answer = prompt("Вам есть 18?", "18");
//console.log(typeof(answer))

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели,', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies : {},
    actors: {},
    genres: [],
    privat : false
};

const a = prompt('Один из последних просмотренных фильмов?',  ''),
b = prompt('На сколько оцените его?', ''),
c = prompt('Один из последних просмотренных фильмов?', ''),
d = prompt('На сколько оцените его?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);