import drawCells from "./drawCells.js";
import { createCanvas, createCanvasResize } from "./createCanvas.js";

const canvas = document.querySelector(`.canvas`);
const setSize = document.querySelector(`.sizeOfCanvas>input`);
const setCells = document.querySelector(`.numberOfCells>input`);

//Make sure to wrap callback function in anon arrow function, so that I can send it canvas variable
setSize.addEventListener(`keyup`, () => {
  createCanvas(canvas);
});
setCells.addEventListener(`keyup`, () => {
  drawCells(canvas);
});
canvas.addEventListener(`mouseup`, () => {
  createCanvasResize(canvas);
});

createCanvas(canvas);
