const container = document.createElement('div');
container.classList.add('container');

//viewport
const optAndGrid = document.createElement('div'); 
optAndGrid.classList.add('optAndGrid');
const options = document.createElement('div');
options.classList.add('options');
const grid = document.createElement('div');
grid.classList.add('grid');

//options
const blackPen = document.createElement('button');
blackPen.classList.add('optionBtns');
blackPen.innerText='Black';
const rainbowPen = document.createElement('button');
rainbowPen.classList.add('optionBtns');
rainbowPen.innerText='Rainbow';
const shadeBtn = document.createElement('button');
shadeBtn.classList.add('optionBtns');
shadeBtn.innerText='Shade';
const eraser = document.createElement('button');
eraser.classList.add('optionBtns');
eraser.innerText='Eraser';
const clearBtn = document.createElement('button'); 
clearBtn.classList.add('optionBtns');
clearBtn.innerText='Clear';

//input
const inputContainer = document.createElement('div');
inputContainer.classList.add('inputContainer');
const inputWrapper = document.createElement('div');
inputWrapper.classList.add('inputWrapper')
const userInputBox = document.createElement('input');
userInputBox.setAttribute('type', 'number');
userInputBox.setAttribute('id', 'userInput');
const inputBtn = document.createElement('button');
inputBtn.classList.add('inputBtn');
inputBtn.innerText='enter';

//appending elements
options.appendChild(blackPen);
options.appendChild(rainbowPen);
options.appendChild(shadeBtn);
options.appendChild(eraser);
options.appendChild(clearBtn);

optAndGrid.appendChild(options);
optAndGrid.appendChild(grid);

inputWrapper.appendChild(userInputBox);
inputWrapper.appendChild(inputBtn);
inputContainer.appendChild(inputWrapper);

container.appendChild(optAndGrid);
container.appendChild(inputContainer);

document.querySelector('body').appendChild(container);

//functions
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
            pixel.style.background=color;
        });
        pixel.addEventListener('mousedown', () => {
            pixel.style.background=color;
        });
    });
}

addPixels(16);                               //default grid

//Event listeners
inputBtn.addEventListener('click', () => {   //change the dimensions of grid based on the user input
    let userInput = Number(userInputBox.value);

    if(userInput>0 && userInput <=100) {
        removePixels();         
        addPixels(userInput);
    }
    else {
        alert("ERROR: Input a number between 1 and 100");
    }
});











