import { drawPlayerImage } from './draw.js';
import { BACKGROUND_COLOR } from './constants.js';
import { Player } from './player.js';

const canvas = document.getElementById('main');
const context = canvas.getContext('2d');
const output = document.getElementById('output');
const player = new Player();
let xPosMouse = 0, yPosMouse = 0;
let keysPressed = {};

function handleMouseDown(event) { 
  if (event.button == 0) { 
    // Left click (move / attack / pick up item / use door / open chest / etc)
    player.updatePlayerOrientation(xPosMouse);
    // player.x = xPosMouse;
    // player.y = yPosMouse;
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
  const canvasWidth = Math.floor(display.getPropertyValue('width').slice(0, -2));

  canvas.setAttribute('width', canvasWidth);
  console.log(`Setting width to ${canvasWidth}`);

  canvas.setAttribute('height', window.innerHeight - 24);
  console.log(`Setting height to ${window.innerHeight - 24}`);

  clearCanvas();

  player.x = 100;
  player.y = 100;

  document.addEventListener('keydown', (event) => {
    keysPressed[event.code] = true;
  });

  // Key handler
  document.addEventListener('keyup', (event) => {
    keysPressed[event.code] = false;
  });

  canvas.addEventListener('mousemove', handleMouseMovement);
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mouseup', handleMouseUp);
}

function respondToKeypress() { 
  if (keysPressed['KeyW']) { 
    player.y -= 5;
  }

  if (keysPressed['KeyA']) { 
    player.x -= 5;
    player.orientation = 'left';
  }

  if (keysPressed['KeyS']) { 
    player.y += 5;
  }

  if (keysPressed['KeyD']) { 
    player.x += 5;
    player.orientation = 'right';
  }

  console.log(player.x, player.y);
}

window.addEventListener('load', initialize);

function clearCanvas() { 
  context.fillStyle = BACKGROUND_COLOR; 
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function update(progress) {
  // Update the state of the world for the elapsed time since last render
  respondToKeypress();
}

function draw() {
  // Draw the state of the world
  clearCanvas();
  drawPlayerImage(player, context);
}

function loop(timestamp) {
  var progress = timestamp - lastRender

  update(progress)
  draw()

  lastRender = timestamp
  window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)