const container = document.querySelector('.container');
let cells;

function makeDiv(num) {
    for (let i = 0; i < (num * num); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell);
    }

    const containerWidth = 960;
    const cellSize = containerWidth / num;

    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerWidth}px`;

    cells = container.querySelectorAll('div');
    cells.forEach(div => {
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;
    });
}

function colorDiv() {
    cells.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
      });
    });    
}

makeDiv(32);
colorDiv();

