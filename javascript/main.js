import { getRandomRGB } from './utility.js';

const canvas = document.getElementById('main');
const context = canvas.getContext('2d');
const consoleDisplay = document.getElementById('console');
let drawing = false;

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

function initializeCanvas() { 
  const display = window.getComputedStyle(document.querySelector('.display'));
  canvas.setAttribute('width', display.getPropertyValue('width'));
  canvas.setAttribute('height', window.innerHeight - 16);

  // Event listeners for mouse movement and clicks on the canvas
  canvas.addEventListener('mousemove', handleMouseMovement);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mouseup', handleMouseUp);

  canvas.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // Prevent the default context menu from appearing
  });
}

function initialize() {
  if (canvas.getContext) {
    // Resize the canvas based on the size of the body element and the default html margins
    initializeCanvas();
  } else {
    // canvas-unsupported code here
  }
}

window.addEventListener('load', initialize);