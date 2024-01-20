const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');

//viewport
const optAndGrid = document.createElement('div'); 
optAndGrid.classList.add('optAndGrid');
const options = document.createElement('div');
options.classList.add('options');
const grid = document.createElement('div');
grid.classList.add('grid');

//options(to change the colors of our pen(or paint brush whatever))
let color='black';      //default color
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
inputBtn.innerText='Change size';

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

body.appendChild(container);

//functions
function addPixels(dimensions) {           //Adds pixels to the grid based on the given dimensions
    let pixelHeight = 460/dimensions;
    
    for (let i=0; i<(dimensions*dimensions); i++) {             
        const pixel = document.createElement('div');
        pixel.classList.add('pixels')
        pixel.style.height=`${pixelHeight}px`
        pixel.style.width=`${pixelHeight}px`
        grid.appendChild(pixel);
    }
    staticColorEffect();
}

function removePixels() {                   //Removes all the pixels from grid
    const pixels = document.querySelectorAll('.pixels');
    pixels.forEach((pixel) => {
        grid.removeChild(pixel);
    });
}

function staticColorEffect() {               //changes the color of pixels when interacted with
    const pixels = document.querySelectorAll('.pixels');
    pixels.forEach((pixel) => {
        pixel.addEventListener('dragenter', () => {
            pixel.style.background=color;
            pixel.style.opacity='1';        //to remove shade effect
        });
        pixel.addEventListener('mousedown', () => {
            pixel.style.background=color;
            pixel.style.opacity='1';
        });
    });
}

function rainbowEffect() {                  //randomize color changes
    const pixels = document.querySelectorAll('.pixels');
    pixels.forEach((pixel) => {
        pixel.addEventListener('dragenter', () => {
            const colors = ['rebeccapurple', 'lightblue', 'blue', 'green', 'yellow', 'orange', 'red'];
            const randomIndex = Math.floor(Math.random()*colors.length);
            pixel.style.background=colors[randomIndex];
            pixel.style.opacity='1';
        });
        pixel.addEventListener('mousedown', () => {
            const colors = ['rebeccapurple', 'lightblue', 'blue', 'green', 'yellow', 'orange', 'red'];
            const randomIndex = Math.floor(Math.random()*colors.length);
            pixel.style.background=colors[randomIndex];
            pixel.style.opacity='1';
        });
    });
}

function shadeEffect() {                    //progressive darkening effect
    const pixels = document.querySelectorAll('.pixels');
    pixels.forEach((pixel) => {
        let density = 0;
        pixel.addEventListener('dragenter', () => {
            density = density+0.1;
            pixel.style.opacity = `${density}`;
        });
        pixel.addEventListener('mousedown', () => {
            density = density+0.1;
            pixel.style.opacity = `${density}`;
        });
    });
}

addPixels(16);              //default grid

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

blackPen.addEventListener('click', () => {
    staticColorEffect();
    color = 'black';
});

eraser.addEventListener('click', () => {
    staticColorEffect();
    color = 'none';
});

clearBtn.addEventListener('click', () => {
    // location.reload();
    const pixels = document.querySelectorAll('.pixels');
    pixels.forEach((pixel) => {
        pixel.style.background='none';
        pixel.style.opacity='1';        //resets opacity 
    });
    staticColorEffect();
});

rainbowPen.addEventListener('click', () => {
    rainbowEffect();
});

shadeBtn.addEventListener('click', () => {
    shadeEffect();
});

const footer = document.createElement('div');
footer.classList.add('footer');
footer.innerHTML='Photo by <a href="https://unsplash.com/@pbernardon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pascal Bernardon</a> on <a href="https://unsplash.com/photos/illustration-of-marvels-avengers-zWHZ_QsU4rc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
body.appendChild(footer);

const gitHubLink = document.createElement('div');
gitHubLink.innerHTML='<a href="https://github.com/uttamkn" target="_blank"><i class="fab fa-github"></i>  uttamkn</a>';
gitHubLink.classList.add('gitLink');
body.appendChild(gitHubLink);