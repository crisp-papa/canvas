import { getRandomRGB } from './utility.js';

const canvas = document.getElementById('main');
const context = canvas.getContext('2d');
const consoleDisplay = document.getElementById('console');
let drawing = false;


function manySquares(squareSize) {
  const canvasWidth = context.canvas.width;
  const canvasHeight = context.canvas.height;
  
  for (let i = 0; i < canvasWidth; i += 10) {
    for (let j = 0; j < canvasHeight; j += 10) { 
      context.fillStyle = getRandomRGB();
      context.fillRect(i, j, squareSize, squareSize);
    }
  }
}

function handleMouseMovement(event) {
  if (drawing) { 
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
  }

  consoleDisplay.innerText = `Mouse position X: ${event.offsetX}, Mouse position Y: ${event.offsetY}`;
}

function handleMouseDown(event) { 
  if (event.button == 0) { 
    drawing = true;
    context.beginPath();
  }

  if (event.button === 2) { 
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleMouseUp(event) {
  drawing = false;
}

function initialize() {
  // Resize the canvas based on the size of the body element and the default html margins
  const canvasStyles = window.getComputedStyle(canvas);
  canvas.setAttribute('width', canvasStyles.getPropertyValue('width'));
  canvas.setAttribute('height', window.innerHeight - 16);

  // Event listeners for mouse movement and clicks on the canvas
  canvas.addEventListener('mousemove', handleMouseMovement);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mouseup', handleMouseUp);

  canvas.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // Prevent the default context menu from appearing
  });

  if (canvas.getContext) {

  } else {
    // canvas-unsupported code here
  }
}

window.addEventListener('load', initialize);