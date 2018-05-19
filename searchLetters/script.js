let
    td = document.querySelectorAll('td'),
    tr = document.querySelectorAll('tr'),
    buttonStart = document.getElementById('buttonStart'),
    find = document.getElementById('whatFind'),
    count, timer,
    time = document.getElementById('time');


buttonStart.addEventListener('click',() => start());

function interval(val) {
    if(!val){
        clearInterval(count);
    } else {
        count = setInterval(() => {
            timer++;
            time.innerHTML = timer;
        },1000)
    }
} //счетчик времени в секундах
function start() {
    interval(false);
    interval(true);

    alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split(''),
    timer = 0;
    time.innerHTML = 0;
    alphabet = massive(alphabet);

    for(let i=0; i<td.length;i++){
        td[i].innerHTML = alphabet[i];
    }
    find.innerHTML = alphabet[4];
    counter();
} //нажата кнопка старт, новая игра
function shuffle(array) { //перемешиваем массив
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
} // перемешивание
function massive(mas) {
    mas = shuffle(mas);
    mas.length = 6;
    mas = mas.concat(mas,mas,mas,mas,mas,mas,mas,mas,mas,mas,mas,mas,mas,mas,mas,mas,mas,mas,mas);
    shuffle(mas);
    return mas;
} // преобразуем массив
function counter() {
    let count = 0,c = 0;
    for (let i=0; i<td.length;i++){
        if (td[i].innerHTML == find.innerHTML){
            count++;
        }
    }
    for (let i=0; i<td.length;i++){
        td[i].addEventListener('click',() => {
            if (find.innerHTML == td[i].innerHTML && td[i].style.backgroundColor == ''){
                td[i].style.backgroundColor = 'green';
                c++;
            };
            if (c == count){
                interval(false);
                alert(timer);
            }
        });
    }
}