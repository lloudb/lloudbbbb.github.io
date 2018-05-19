let num = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,13];
let td = document.querySelectorAll('td');
let black = 1, red = 13;
let color = document.getElementById('color');
let time = document.getElementById('time');
let count, timer;

document.getElementById('startButton').addEventListener('click',() => start());
document.getElementById('stopButton').addEventListener('click', () => stop());
// true - red; false - black;


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
function interval(val) {
    if(!val){
        console.log('stop');
        clearInterval(count);
    } else {
        console.log('start');
        count = setInterval(() => {
            console.log('+1');
            timer++;
            time.innerHTML = timer;
        },1000)
    }
} //счетчик времени в секундах
function stop(){
    interval(false);
}
function start() {
    interval(false);
    interval(true);
    time.innerHTML = '0';
    timer = 0;

    shuffle(num);
    for (let i=0;i < td.length;i++){
        td[i].innerHTML = num[i];
    }
    for(let i=0;i <= 13;i++){
        let count = 0;
        for(let j=0; j<td.length;j++){
            if (i == td[j].innerHTML){
                count++;
                if(count == 1 || i == 13){
                    td[j].style.backgroundColor='red';
                } else if (count == 2) {
                    td[j].style.backgroundColor = 'black';
                }

            }
        }
    }

    for (let i=0; i<td.length;i++){
        td[i].addEventListener('click',() => {
            if(black+red == 14 && td[i].style.backgroundColor == 'red'){
                if (td[i].innerHTML == red){
                    td[i].style.backgroundColor = 'white';
                    red--;
                }
            }
            if(black+red==13 && td[i].style.backgroundColor == 'black'){
                if(td[i].innerHTML == black){
                    td[i].style.backgroundColor = 'white';
                    black++;
                }
            }
            if(black == 13 && red == 0){
                alert(time.innerHTML);
                interval(false);
            }
            isColor(black,red);
        });
    }

    function isColor(black,red) {
        if(black+red == 14){
            color.innerHTML = 'Красный max';
            color.style.color = 'red';
        } else if (black+red == 13){
            color.innerHTML = 'Черный min';
            color.style.color = 'black';
        }
    }
}