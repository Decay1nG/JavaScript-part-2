"use strict";

// =========================--------------||| Снизу функции |||--------------=========================
// функция к кол-ву фильмов
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}
// функция к коммуникации с пользователем
function RememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const answer = prompt('Один из последних просмотренных фильмов?', '');
        const answer2 = +prompt('На сколько оцените его', '');
        if ((answer == false || answer2 == false) || (answer === null || answer2 === null) || (answer.length > 10)) {
            --i;
            console.log('Error');
        }
        personalMovieDB.movies [answer] = answer2;
    }
}
// функция к оценке пользователя
function detectPersonalLevel() {
    if (personalMovieDB ["count"] < 10) {
        alert('Вы посмотрели слишком мало фильмов');
    } else if (personalMovieDB ["count"] >= 10 && personalMovieDB ["count"] <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB ["count"] > 30) {
        alert ('Вы киноман');
    } else {
        alert('ошибка')
    }
}
// функция к проверке привата
function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    }
}
// функция к топу жанров
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres [i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
// =========================--------------||| Сверху функции |||--------------=========================


let numberOfFilms;

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


RememberMyFilms();

detectPersonalLevel();

showMyDB();

writeYourGenres();

console.log(personalMovieDB);
