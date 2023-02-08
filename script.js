const canvasEl = document.querySelector('.canvas');
const inputRangeEl = document.querySelector('.range');
const rangeValue1 = document.querySelector('#rangeValue');
const rangeValue2 = document.querySelector('#rangeValue2');

const gridCanvas = function(size, styleForCanvas) {
    for (let j=0; j < size; j++) {
        styleForCanvas += 'auto ';
    }
    console.log(styleForCanvas);
    canvasEl.style['grid-template-columns'] = styleForCanvas;
}

const createBoxes = function(size, boxDimension) {
    canvasEl.innerHTML = '';
    for(let i=1; i < (size*size)+1; i++) {
        const box = document.createElement('div');
        box.classList.add(`box${i}`);
        box.classList.add('box');
        box.style.width = boxDimension;
        box.style.height = boxDimension;

        canvasEl.appendChild(box)
    }    
}

function getRangeValue(newVal) {
    let styleForCanvas = '';
    let boxDimension = Math.floor(500/newVal);
    rangeValue1.innerText = newVal;
    rangeValue2.innerText = newVal;
    gridCanvas(newVal, styleForCanvas);
    createBoxes(newVal, boxDimension);
}


