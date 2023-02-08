const canvasEl = document.querySelector('.canvas');
const inputRangeEl = document.querySelector('.range');
const rangeValue1 = document.querySelector('#rangeValue');
const rangeValue2 = document.querySelector('#rangeValue2');
const clearBtnEl = document.querySelector('.clr-btn');
const colorEl = document.querySelector('.color-picker');
const introTextEl = document.querySelector('.intro')
const rainbow = document.querySelector('.rainbow');

const generateRandomRGB = function() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return [r,g,b];
}

const gridCanvas = function(size, styleForCanvas) {
    for (let j=0; j < size; j++) {
        styleForCanvas += 'auto ';
    }
    canvasEl.style['grid-template-columns'] = styleForCanvas;
}

clearBtnEl.addEventListener('click', () => {
    let boxes = [...canvasEl.childNodes]
    boxes.forEach((box) => {
        box.style.backgroundColor = '#fff';
        box.style.borderColor = '#000';
    })
})

const createBoxes = function(size, boxDimension) {
    canvasEl.innerHTML = '';
    for(let i=1; i < (size*size)+1; i++) {
        temp = '';
        const box = document.createElement('div');
        box.classList.add(`box${i}`);
        box.classList.add('box');
        box.style.width = boxDimension;
        box.style.height = boxDimension;
        box.addEventListener('click', (e) => {
            e.target.style.borderColor = `${colorEl.value}`;
            e.target.style.backgroundColor = `${colorEl.value}`;
        });
        canvasEl.appendChild(box)
    }    
}

function getRangeValue(newVal) {
    let styleForCanvas = '';
    let boxDimension = Math.floor(800/newVal);
    rangeValue1.innerText = newVal;
    rangeValue2.innerText = newVal;
    gridCanvas(newVal, styleForCanvas);
    createBoxes(newVal, boxDimension);
}


