document.getElementById('b1').addEventListener('click',() => {
    let text = document.getElementById('text').value;
    let textBefore = '';
    let letters = ["а","у","о","ы","и","э","я","ю","е","ё"];
    for (let i=0; i<text.length; i++){
        let letter = text[i];
        if(letters.indexOf(letter.toLowerCase()) != -1){
            letter = '_';
        }
        textBefore += letter;
    }
    document.getElementById('textBefore').innerHTML = textBefore;
});

document.getElementById('b2').addEventListener('click', () => {
   let text = document.getElementById('text').value;
   let textBefore = '';
   let letters = ["б","в","г","д","ж","з","к","л","м","н","п","р","с","т","ф","х","ц","ч","ш","щ"];
   for(let i=0; i<text.length; i++){
       let letter = text[i];
       if (letters.indexOf(letter.toLowerCase()) != -1){
           letter = '_';
       }
       textBefore += letter;
   }
   document.getElementById('textBefore').innerHTML = textBefore;
});

document.getElementById('b3').addEventListener('click', () => {
    let text = document.getElementById('text').value;
    let textBefore = '';
    let letters = shuffle(["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"]).slice(5,11);
    for(let i=0; i<text.length; i++){
        let letter = text[i];
        if (letters.indexOf(letter.toLowerCase()) != -1){
            letter = '_';
        }
        textBefore += letter;
    }
    document.getElementById('textBefore').innerHTML = textBefore;
});

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