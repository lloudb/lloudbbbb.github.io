document.getElementById('start').addEventListener('click',() => {
   let text = document.getElementById('text').value;
   let textBefore = document.getElementById('textBefore');
   textBefore.innerHTML = ' ';
   for(let i=0;i<text.length;i++){
       let div = document.createElement('div');
       div.innerHTML = text[i];
       div.style.MozTransform = 'rotate('+(getRandomInt())+'deg)';
       div.style.WebkitTransform = 'rotate('+(getRandomInt())+'deg)';
       div.style.OTransform = 'rotate('+(getRandomInt())+'deg)';
       div.style.MsTransform = 'rotate('+(getRandomInt())+'deg)';
       div.style.transform = 'rotate('+(getRandomInt())+'deg)';
       div.style.position = 'block';
       div.style.float = 'left';
       div.style.whiteSpace = 'pre';
       div.style.fontSize = '20px';
       textBefore.appendChild(div);
   };
   readText(text);
});

function readText(text) {
    let div = document.querySelectorAll('div');
    setInterval( ()=> {
        for(let i=0; i< div.length; i++){
            let rotate = '';
            let str = div[i].style.transform;
            for(let i=0; i<str.length;i++){
                if (isNumeric(str[i])){
                    rotate += str[i];
                }
            }
            rotate = +rotate + Math.floor(Math.random() * 5);
            div[i].style.transform = 'rotate(+'+rotate+'deg)';
            div[i].style.MozTransform = 'rotate('+rotate+'deg)';
            div[i].style.WebkitTransform = 'rotate'+rotate+'deg)';
            div[i].style.OTransform = 'rotate('+rotate+'deg)';
            div[i].style.MsTransform = 'rotate('+rotate+'deg)';
            div[i].style.transform = 'rotate('+rotate+'deg)';
        }
    },100);
}

function getRandomInt(){
    return Math.floor(Math.random() * (180-10))+10;
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}