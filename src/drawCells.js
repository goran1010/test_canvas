export default function drawCells(canvas) {
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
      singleCell.style.width = `${canvas.clientWidth / cells}px`;
      singleCell.style.height = `${canvas.clientHeight / cells}px`;

      singleCell.addEventListener(`mouseover`, () => {
        singleCell.classList.toggle(`showCell`);
      });

      row.appendChild(singleCell);
    }
  }
}
