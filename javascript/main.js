import { getRandomRGB } from './utility.js';

const canvas = document.getElementById('main');
const context = canvas.getContext('2d');
const consoleDisplay = document.getElementById('console');
const instructions = document.getElementById('information');
let drawing = false;

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

function handleMouseMovement(event) {
  if (drawing) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
  }

  consoleDisplay.innerText = `Mouse position X: ${event.offsetX}, Mouse position Y: ${event.offsetY}`;
}

function handleMouseUp(event) {
  drawing = false;
}

function initialize() {
  if (canvas.getContext) {
    // Resize the canvas based on the size of the body element and the default html margins
    initializeCanvas();

    // Draw button event listener
    document.getElementById('draw').addEventListener('click', initializeDrawButton);

  } else {
    // canvas-unsupported code here
  }
}

function initializeDrawButton() {
  // Event listeners for mouse movement and clicks on the canvas
  canvas.addEventListener('mousemove', handleMouseMovement);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mouseup', handleMouseUp);

  canvas.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // Prevent the default context menu from appearing
  });

  instructions.innerText = 'Left click to draw on the canvas.\nRight click to clear the canvas.';

  hideButtons();

  // Display functions related to drawing
  const functions = document.getElementById('draw-functions')
  functions.classList.toggle('hidden');
  functions.querySelector('#line-color').addEventListener('input', (event) => {
    context.strokeStyle = event.target.value;
  });

  functions.querySelector('#line-width').addEventListener('input', (event) => {
    context.lineWidth = event.target.value;
  });

  functions.querySelector('#background-color').addEventListener('input', (event) => { 
    context.fillStyle = event.target.value;
    context.fillRect(0, 0, canvas.width, canvas.height);
  });

  context.lineCap = 'round';
}

function hideButtons() {
  document.getElementById('draw').classList.toggle('hidden');
}

function initializeCanvas() { 
  const display = window.getComputedStyle(document.querySelector('.display'));
  canvas.setAttribute('width', display.getPropertyValue('width'));
  canvas.setAttribute('height', window.innerHeight - 24);
}

window.addEventListener('load', initialize);