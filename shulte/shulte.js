let table = document.querySelector('table');
let tr = document.querySelectorAll('tr');
let button = document.querySelector('button');
let timer = document.getElementById('timer');
let stopButton = document.getElementById('stop');
let startButton = document.getElementById('start');
let sizePlus = document.getElementById('sizePlus');
let sizeMinus = document.getElementById('sizeMinus');
let cellPlus = document.getElementById('plusCell');
let cellMinus = document.getElementById('minusCell');

let cell = 0;
let tdWidth = 50;
let tdHeight = 50;
let time = 0;
let count;

window.onload = () => {
    addCell(5);
}
startButton.addEventListener('click',() => start());
stopButton.addEventListener('click',() => stop());
cellPlus.addEventListener('click',() => addCell(cell+1));
cellMinus.addEventListener('click',() => addCell(cell-1));
sizePlus.addEventListener('click',() => size(true));
sizeMinus.addEventListener('click',() => size(false));

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
}

function interval(id) { //счетчик
    if (id) {
        clearInterval(count);
    } else {
        count = setInterval(() => {
            time++;
            timer.innerHTML = time;
        }, 1000);
    }
}

function start() { //начинаем игру
    let td = document.querySelectorAll('td');

    interval();
    counter();
    timer.innerHTML = '0';
    time = 0;

    let mas = [];
    for (let i=1; i<=(cell*cell); i++){
        mas[i-1] = i;
    }

    for(let i=0;i<td.length;i++){
        td[i].style.backgroundColor='white';
    }

    shuffle(mas);
    for (let i=0;i<(cell*cell);i++){
        td[i].innerHTML = mas[i];
    }
}

function counter(){ //выделяет зеленым последовательно
    let td = document.querySelectorAll('td');
    let count = 1;

    for (let i=0; i<td.length;i++){
        td[i].addEventListener('click',() => {
            if(td[i].innerHTML == count){
                if (count==25){
                    stop();
                }
                td[i].style.backgroundColor = '#C9F76F';
                count++;
            }
        })
    }
}

function stop(){
    interval(true);
}

function size(val) {
    let td = document.querySelectorAll('td');
    if(val && tdHeight>=50 && tdWidth>=50){
        for(let i=0; i<25; i++){
            td[i].style.width = (tdWidth + 10) + 'px';
            td[i].style.height = (tdHeight + 10) + 'px';
        }
        tdWidth += 10;
        tdHeight += 10;
        console.log(tdWidth);
    } else if (val == false && tdHeight>=60 && tdWidth>=60) {
        for(let i=0; i<25; i++){
            td[i].style.width = (tdWidth - 10) + 'px';
            td[i].style.height = (tdHeight - 10) + 'px';
        }
        tdWidth -= 10;
        tdHeight -= 10;
        console.log(tdWidth);
    }
}

function addCell(val) {
    if (val >= 5){
        let addTable = document.createElement('table');
        let table = document.querySelector('table');
        table.remove();

        cell = val;

        for(let i=0; i<val; i++){
            let addTr = document.createElement('tr');
            for(let j=0;j<val;j++){
                let td = document.createElement('td');
                addTr.appendChild(td);
            }
            addTable.appendChild(addTr);
        }

        document.getElementById('table').appendChild(addTable);
    }

}




