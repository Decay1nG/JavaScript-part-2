"use strict";

const personalMovieDB = {
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB ['count'] = +prompt('Сколько фильмов вы посмотрели?', '');
        while (personalMovieDB ['count'] == '' || personalMovieDB ['count'] == null || isNaN(personalMovieDB ['count'])) {
            personalMovieDB ['count']= +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const answer = prompt('Один из последних просмотренных фильмов?', '');
            const answer2 = +prompt('На сколько оцените его', '');
            if (answer != null && answer2 != null && answer != '' && answer2 != '' && (answer.length > 10)) {
                personalMovieDB.movies [answer] = answer2;
            } else {
                i = 0;
                console.log('Error');
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB ["count"] < 10) {
            alert('Вы посмотрели слишком мало фильмов');
        } else if (personalMovieDB ["count"] >= 10 && personalMovieDB ["count"] <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB ["count"] > 30) {
            alert ('Вы киноман');
        } else {
            alert('ошибка')
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres [i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (personalMovieDB.genres [i - 1] == '' || personalMovieDB.genres [i - 1] == null) {
                i = 0;
            }
        }

        personalMovieDB ["genres"].forEach(function (item, i) {
            console.log(`Ваш любимый фильм номер ${++i} : ${item}`);
        })
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB ['privat'] == false) {
            personalMovieDB ['privat'] = true;
        } else {
            personalMovieDB ['privat'] = false;
        }
        console.log(personalMovieDB ["privat"]);
    }
};

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();

console.log(personalMovieDB);

