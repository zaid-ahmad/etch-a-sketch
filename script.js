const canvasEl = document.querySelector('.canvas');
const inputRangeEl = document.querySelector('.range');
const rangeValue1 = document.querySelector('#rangeValue');
const rangeValue2 = document.querySelector('#rangeValue2');

let size = 0;

const gridCanvas = function(size, styleForCanvas) {
    for (let j=0; j < size; j++) {
        styleForCanvas += 'auto ';
    }
    console.log(styleForCanvas);
    canvasEl.style['grid-template-columns'] = styleForCanvas;
}

function getRangeValue(newVal) {
    let styleForCanvas = '';
    rangeValue1.innerText = newVal;
    rangeValue2.innerText = newVal;
    size = newVal;
    gridCanvas(size, styleForCanvas);
}


/*
for(let i=1; i < (size*size)+1; i++) {
    const box = document.createElement('div');
    box.classList.add(`box${i}`);
    box.classList.add('box');
}
*/
