let words = 'Кошка, дом, машина, яблоко, шкаф, река, карандаш, телефон, рубашка, бумага, трава, краска, шуба, сыр, стакан, лейка, газета, гвоздика, мороженое, ковш, гвоздь, хлеб, пианино, зеркало, медведь, компьютер, лампа, ящик, батон, вилка, газон, дорога, ёжик, замок, иголка, капля, рисунок, свисток, туфли, ухо, фонарь, хвост, цапля, чучело, шампур, щука, экран, юла, янтарь, ананас' +
    ' Арбалет, бровь, вишня, гитара, доска, ель, жвачка, звонок, искры, клетка, лебедь, молоко, ноготь, опилки, поросёнок, розетка, стул, тумбочка, угольник, фисташки, хлыст, цистерна, чердак, шлейф, щётка, якорь, апельсин, будильник, вентилятор, грибы, дыня, енот, жаркое, зима, иней, косметика, лимон, мёд, носилки, океан, пирог, резинка, стебель, труба, урна, фантики, хлопушки, циркуль, червяк, шляпа' +
    ',Ястреб, Африка, белка, войлок, грабли, дождь, зелень, индекс, клавиатура, линолеум, муха, носки, облако, простыня, ремень, стол, турник, уж, фонтан, хворост, центрифуга, чернила, шайба, щетина, электробритва, юг, язь, астра, борщ, вата, гармонь, дихлофос, ельник, жаба, запеканка, ил, квартира, лыжи, манка, нос, окорочек, кислота, липучка, мельница, нарзан, окно, питарда, радуга, скрепка, танк';
let text = document.getElementById('text');
let input = document.querySelector('input');
let all = -1, success = 0;

words = shuffle(words.split(','));
console.log(words);
document.getElementById('next').addEventListener('click',() => next());

function next(){
    if(all != -1){
        if(input.value == words[all].trim()){
            console.log('success');
            success++;
            document.getElementById('success').innerHTML = success;
        }
        console.log(words[all],input.value);
        input.value = '';
        console.log(all);
        all++;
        document.getElementById('all').innerHTML = all;
        text.innerHTML = shuffle(words[all].trim().split('')).join('').toLowerCase();
    } else {
        all++;
        text.innerHTML = shuffle(words[all].trim().split('')).join('');
    }

}

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