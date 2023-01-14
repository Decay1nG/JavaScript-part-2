/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const marketingPictures = document.querySelectorAll('.promo__adv img');
const marketingText = document.querySelector('.promo__adv-title');
const moviesCollection = document.querySelector('.promo__interactive-list');

const deleteElements = function () {
    marketingPictures.forEach(item => {
        item.remove();
    });
    marketingText.remove();
}
deleteElements();

document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.cssText = ("background: url('img/bg.jpg') center center / cover no-repeat");

moviesCollection.innerHTML = '';
movieDB["movies"].sort();
movieDB["movies"].forEach((item, i) => {
    const test = document.createElement('div');
    test.classList.add('promo__interactive-item');
    test.append(++i + ' ' + item);
    moviesCollection.append(test);
});

// movieDB["movies"].forEach((item, i) => {
//     moviesCollection.innerHTML += `
//         <li class="promo__interactive-item"> ${++i + ' ' + item}
//             <div class="delete"></div>
//         </li>
//     `
// });
