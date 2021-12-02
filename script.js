const container = document.querySelector('.container');
const content = document.querySelector('.content')
const bottombuttons = document.querySelector('.bottombuttons')
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const clear = document.getElementById('cleargrid');
const small = document.getElementById('16x16');
const medium = document.getElementById('32x32');
const large = document.getElementById('64x64');
let currentColor = 'black';
let defaultSize = 16;

//Creates initial grid
createGrid(defaultSize, defaultSize);

//Creates grid size when button clicked
const bottomBtns = bottombuttons.querySelectorAll('button');
bottomBtns.forEach((button) => {
    button.addEventListener('click', () => {
        let currentSize = button.id;
        clearGrid();
        createGrid(currentSize,currentSize);
    });
});

//Clears grid of all color
function clearGrid()    {
    container.innerHTML = "";
}


//Changes color of grid
function colorGrid(grid) {
    if (currentColor === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      grid.style.backgroundColor = 'red';
      //e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentColor === 'black') {
      grid.style.backgroundColor = 'black';
    } 
}

//Create the divs inside the grid
function createGrid(col, rows)   {
    for(let i = 0; i < (col * rows); i++)    {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover',() => colorGrid(grid));
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(grid); 
    }
}