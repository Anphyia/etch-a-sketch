const container = document.querySelector('.container');
const resizeButton = document.getElementById('resizeButton');
let cells;

function makeDiv(num) {
    for (let i = 0; i < (num * num); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell);
    }

    const containerWidth = 720;
    const cellSize = containerWidth / num;

    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerWidth}px`;

    cells = container.querySelectorAll('div');
    cells.forEach(div => {
        div.style.width = `${cellSize}px`;
        div.style.height = `${cellSize}px`;
    });

    colorDiv();
}

function colorDiv() {
    cells.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
      });
    });    
}

function setDivSize() {
    let cellNumber = prompt("Enter the number of squares per side (Max: 100)", 32);
    cellNumber = parseInt(cellNumber, 10);

    if (isNaN(cellNumber)) {
        alert("You must enter a valid integer.");
        return;
    } else if (cellNumber > 100) {
        alert("You must enter a number less than 100.");
        return;
    } else if (cellNumber <= 0) {
        alert("You must enter a positive integer.");
        return;
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        makeDiv(cellNumber);
    }
}



makeDiv(32);
resizeButton.addEventListener('click', () => {
    setDivSize();
});
