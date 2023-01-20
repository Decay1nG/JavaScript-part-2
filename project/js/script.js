'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const deleteElements = function (item1, item2) {
        item1.forEach(item => {
            item.remove();
        });
        item2.remove();
    }
    const changes = function () {
        document.querySelector('.promo__genre').textContent = 'драма';
        document.querySelector('.promo__bg').style.cssText = ("background: url('img/bg.jpg') center center / cover no-repeat");
    }

    const marketingPictures = document.querySelectorAll('.promo__adv img'),
          marketingText = document.querySelector('.promo__adv-title'),
          moviesCollection = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('.add'),
          answer = form.querySelector('.adding__input'),
          checkbox = form.querySelector('[type="checkbox"]');


    function contentCreate(films, parent) {
        parent.innerHTML = '';
        films.sort();
        films.forEach((item, i) => {
            parent.innerHTML += `
                 <li class="promo__interactive-item"> ${++i + ' '} ${item}
                     <div class="delete"></div>
                 </li>
             `;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', function() {
                item.parentElement.remove();
                films.splice(i, 1);
                contentCreate(films, parent);
            });
        });
    }

    deleteElements(marketingPictures, marketingText);

    changes();

    contentCreate(movieDB["movies"], moviesCollection);


    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (checkbox.checked) {
            alert('Добавили ваш любимый фильм!');
        }
        if (answer.value.length > 10) {
            answer.value = `${answer.value.substring(0, 10)}...`
        }
        if (answer.value) {
            movieDB.movies.push(answer.value);
            contentCreate(movieDB["movies"], moviesCollection);
            answer.value = '';
        }

    });

});