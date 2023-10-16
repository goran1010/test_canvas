import drawCells from "./drawCells.js";

function drawCanvas(canvas) {
  let size = document.querySelector(`.sizeOfCanvas>input`).value;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;
}

function createCanvas(canvas) {
  drawCanvas(canvas);
  if (document.querySelector(`.numberOfCells>input`).value) {
    drawCells(canvas);
  }
}

function createCanvasResize(canvas) {
  // Added +2 to the size, since clientWidth doesn't include border
  canvas.style.width = `${canvas.clientWidth + 2}px`;
  canvas.style.height = `${canvas.clientHeight + 2}px`;
  drawCells(canvas);
}

export { createCanvas, createCanvasResize };
