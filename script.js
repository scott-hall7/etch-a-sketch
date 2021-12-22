const defaultSize = 16;
const defaultColor = 'black';
let currentColor;
let currentSize;

const container = document.querySelector('.container');
const content = document.querySelector('.content');
const bottomButtons = document.querySelector('.bottombuttons');
const gridSelector = bottomButtons.querySelectorAll('button');
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const clear = document.getElementById('cleargrid');
const small = document.getElementById('16x16');
const medium = document.getElementById('32x32');
const large = document.getElementById('64x64');

//Creates initial grid
createGrid(defaultSize)


//Create the divs inside the grid
function createGrid(size)   {
    for(let i = 0; i < (size * size); i++)    {
        let grid = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'black';
        });
        container.appendChild(grid).classList.add('box');
    }
}

function gridSize() {
    gridSelector.forEach((button) => {
        button.addEventListener('click', () => {
            clearGrid();
            let size = button.id;
            createGrid(size);
            resetGrid();
        });
    });
}

function blackColor() {
    const boxes = container.querySelectorAll('.box');
    black.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        }));
    });
}
function rainbowColor() {
    const boxes = container.querySelectorAll('.box');
    rainbow.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
        }));
    });
}

clear.addEventListener('click', emptyGrid);

function emptyGrid() {
    clearGrid();
    createGrid(defaultSize);
    resetGrid();
}
    
function clearGrid()  {
    container.innerHTML = "";
}
function resetGrid()    {
    gridSize();
    blackColor();
    rainbowColor();
}

resetGrid();