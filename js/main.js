//Change the color of the div from the event
function changeDivColor(e) {
  e.target.classList.add("marked");
}

//Create a grid of div's given quantity per side 
function createGrid(quantity) {
  for (let i = 0; i < quantity*4; i++) {
    let div = document.createElement('div');
    div.classList.add("item");
    div.addEventListener('mouseover', (event) => {
      changeDivColor(event);
    });
    container.appendChild(div);
  }
}

//Delete the elements of the container element (grid)
function deleteGrid() {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}

const container = document.querySelector('.container');
createGrid(4);
const gridSize = prompt("What's quantity of squares per side you want");
deleteGrid();
createGrid(gridSize);