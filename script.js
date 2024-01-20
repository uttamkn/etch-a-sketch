const container = document.createElement('div');
const optAndGrid = document.createElement('div'); 
const options = document.createElement('div');
const grid = document.createElement('div');
const inputContainer = document.createElement('div');
const inputWrapper = document.createElement('div');
const userInputBox = document.createElement('input');
const inputBtn = document.createElement('button');

container.classList.add('container');
optAndGrid.classList.add('optAndGrid');
options.classList.add('options');
grid.classList.add('grid');
inputContainer.classList.add('inputContainer');
inputWrapper.classList.add('inputWrapper')
userInputBox.setAttribute('type', 'number');
userInputBox.setAttribute('id', 'userInput');
inputBtn.classList.add('inputBtn');
inputBtn.innerText='enter';

optAndGrid.appendChild(options);
optAndGrid.appendChild(grid);

inputWrapper.appendChild(userInputBox);
inputWrapper.appendChild(inputBtn);
inputContainer.appendChild(inputWrapper);

container.appendChild(optAndGrid);
container.appendChild(inputContainer);

document.querySelector('body').appendChild(container);

function addPixels(dimensions) {           //Adds pixels to the grid based on the given dimensions
    let pixelHeight = 280/dimensions;
    
    for (let i=0; i<(dimensions*dimensions); i++) {             
        const pixel = document.createElement('div');
        pixel.classList.add('pixels')
        pixel.style.height=`${pixelHeight}px`
        pixel.style.width=`${pixelHeight}px`
        grid.appendChild(pixel);
    }
    dragEffect();
}

function removePixels() {                   //Removes all the pixels from grid
    const pixels = document.querySelectorAll('.pixels');
    pixels.forEach((pixel) => {
        grid.removeChild(pixel);
    });
}

function dragEffect(){
    const pixels = document.querySelectorAll('.pixels');
    pixels.forEach((pixel) => {
        pixel.addEventListener('dragenter', () => {
            pixel.style.background='black';
        });
        pixel.addEventListener('mousedown', () => {
            pixel.style.background='black';
        });
    });
}

addPixels(16);                               //default grid

inputBtn.addEventListener('click', () => {
    let userInput = Number(userInputBox.value);

    if(userInput>0 && userInput <=100) {
        removePixels();                     //to change the dimensions of grid
        addPixels(userInput);
    }
    else {
        alert("ERROR: Input a number between 1 and 100");
    }
});






