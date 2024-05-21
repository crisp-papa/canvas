import { drawPlayerImage } from './draw.js';
import { Player } from './player.js';

const canvas = document.getElementById('main');
const context = canvas.getContext('2d');
const output = document.getElementById('output');
const player = new Player();
let xPosMouse = 0, yPosMouse = 0;

function handleMouseDown(event) { 
  if (event.button == 0) { 
    // Left click (move / attack / pick up item / use door / open chest / etc)
    player.updatePlayerOrientation(xPosMouse);
    player.x = xPosMouse;
    player.y = yPosMouse;
    drawPlayerImage(player, context);
  }
}

function handleMouseMovement(event) {
  output.innerText = `Mouse position X: ${event.offsetX}, Mouse position Y: ${event.offsetY}`;
  xPosMouse = event.offsetX;
  yPosMouse = event.offsetY;
}

function handleMouseUp(event) {
  // Unclick
}

function initialize() {
  if (canvas.getContext) {
    // Resize the canvas based on the size of the body element and the default html margins
    initializeCanvas();
  } else {
    // canvas-unsupported code here
  }
}

function initializeCanvas() { 
  const display = window.getComputedStyle(document.querySelector('.display'));

  canvas.setAttribute('width', display.getPropertyValue('width'));
  console.log(`Setting width to ${display.getPropertyValue('width')}`);

  canvas.setAttribute('height', window.innerHeight - 24);
  console.log(`Setting height to ${window.innerHeight - 24}`);

  context.fillStyle = "#212121"; 
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  let image = player.image;
  image.onload = () => {
    drawPlayerImage(image, context);
  }

  // Key handler
  document.addEventListener('keydown', (event) => {
      switch (event.code) {
        default:
          console.log(`Key Down: ${event.key} (code: ${event.code})`);
          break;
      }
  });

  canvas.addEventListener('mousemove', handleMouseMovement);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mouseup', handleMouseUp);
}

window.addEventListener('load', initialize);