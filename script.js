const container = document.createElement('div');
const optAndGrid = document.createElement('div'); 
const options = document.createElement('div');
const grid = document.createElement('div');
const inputContainer = document.createElement('div');
const inputWrapper = document.createElement('div');

container.classList.add('container');
optAndGrid.classList.add('optAndGrid');
options.classList.add('options');
grid.classList.add('grid');
inputContainer.classList.add('inputContainer');

function addPixels(dimensions) {           //Adds pixels to the grid based on the given dimensions
    let pixelHeight = 360/dimensions;
    
    for (let i=0; i<(dimensions*dimensions); i++) {             
        const pixel = document.createElement('div');
        pixel.classList.add('pixels')
        pixel.style.height=`${pixelHeight}px`
        pixel.style.width=`${pixelHeight}px`
        grid.appendChild(pixel);
    }
}
addPixels(16)

optAndGrid.appendChild(options);
optAndGrid.appendChild(grid);

inputContainer.appendChild(inputWrapper);

container.appendChild(optAndGrid);
container.appendChild(inputContainer);

document.querySelector('body').appendChild(container);



