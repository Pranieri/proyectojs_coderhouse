const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorForm = document.getElementById('color-form');
const borrowColorInput = document.getElementById('borrow-color');

let currentColor = '#ff0000';

colorForm.addEventListener('change', (event) => {
  currentColor = event.target.value;
});

let painting = false;
let borrowing = false;

canvas.addEventListener('mousedown', (event) => {
  painting = true;
  if (borrowing) {
    const pixelData = ctx.getImageData(event.offsetX, event.offsetY, 1, 1).data;
    currentColor = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
    borrowColorInput.checked = false;
    borrowing = false;
  }
  drawPixel(event.offsetX, event.offsetY, currentColor);
});

canvas.addEventListener('mousemove', (event) => {
  if (painting) {
    drawPixel(event.offsetX, event.offsetY, currentColor);
  }
});

canvas.addEventListener('mouseup', () => {
  painting = false;
});

borrowColorInput.addEventListener('change', () => {
  borrowing = borrowColorInput.checked;
});

function drawPixel(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}
