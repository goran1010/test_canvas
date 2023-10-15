const canvas = document.querySelector(`.canvas`);

const setSize = document.querySelector(`.sizeOfCanvas>input`);
const setCells = document.querySelector(`.numberOfCells>input`);

let size;
let cells;

function drawCanvas() {
  size = document.querySelector(`.sizeOfCanvas>input`).value;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;
}

function createCanvas() {
  drawCanvas();
  if (document.querySelector(`.numberOfCells>input`).value) {
    drawCells();
  }
}

function createCanvasResize() {
  size = canvas.clientWidth;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;
  drawCells();
}

function drawCells() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  let cells = document.querySelector(`.numberOfCells>input`).value;
  if (!cells) {
    console.log("No cells");
    return;
  }
  for (let i = 0; i < cells; i++) {
    let row = document.createElement(`div`);
    canvas.appendChild(row);
    for (let j = 0; j < cells; j++) {
      let singleCell = document.createElement(`div`);
      singleCell.style.width = `${size / cells}px`;
      singleCell.style.height = `${size / cells}px`;

      singleCell.addEventListener(`mouseover`, () => {
        singleCell.classList.toggle(`showCell`);
      });

      row.appendChild(singleCell);
    }
  }
}

setSize.addEventListener(`keyup`, createCanvas);
setCells.addEventListener(`keyup`, drawCells);
canvas.addEventListener(`mouseup`, createCanvasResize);

createCanvas();
