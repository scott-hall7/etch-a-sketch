const main = document.querySelector('.main');

const container = document.querySelector('.container');


for (let i = 0; i < 16; i++) {
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    grid.style.width = "98px";
    grid.style.height = "98px";
    grid.style.border = '1px solid black'
    container.appendChild(grid);
}
