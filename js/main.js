function paint(e) {
  e.target.classList.add("marked");
}

const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  let div = document.createElement('div');
  div.classList.add("item");
  div.addEventListener('mouseover', (event) => {
    paint(event);
  });
  container.appendChild(div);
}

