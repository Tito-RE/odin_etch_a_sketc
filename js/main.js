//Change the color of the div from the event
function changeDivColor(e) {
  e.target.classList.add("marked");
}

//Create a grid of div's given quantity per side 
function drawGrid(quantity) {
  for (let i = 0; i < quantity; i++) {
    let div = document.createElement('div');
    div.classList.add("row");
    for (let j = 0; j < quantity; j++) {
      let item = document.createElement('div');
      item.classList.add("item");
      item.addEventListener('mouseover', (event) => {
        changeDivColor(event);
      });
      div.appendChild(item);
    }
    container.appendChild(div);
  }
}

//Delete the elements of the container element (grid)
function deleteGrid() {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}

//Ask to the user for the size of the grid
function generateGrid() {
  let gridSize;
  do {
    gridSize = prompt("What's quantity of squares per side you want?");
  } while (gridSize >= 100 || gridSize <= 0);
  deleteGrid();
  drawGrid(gridSize);
}

const container = document.querySelector('.container');
const button = document.querySelector('#new-grid'); 
button.addEventListener('click', (event) => {
  generateGrid();
});
drawGrid(64);