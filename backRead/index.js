document.getElementById('start').addEventListener('click',() => {
    let textBefore = '';
    let text = document.getElementById('text').value;
    text = text.split(' ');
    for (let i=0; i < text.length; i++){
        let punc = '';
        let word = text[i].split('');
        console.log(word);
        punc = removePunc(word,['.',',','!','?',':',';']);
        textBefore += word.reverse().join('') + punc + ' ';
    }
    document.getElementById('textBefore').innerHTML = textBefore;
});

function removePunc(mas, value) {
    let punc = '';
    for (let i=0; i < value.length; i++){
        if(mas.indexOf(value[i]) != -1){
            punc = value[i];
        }
    }
    if (punc != ''){
        mas.splice(mas.indexOf(punc),1);
    }
    return(punc);
}