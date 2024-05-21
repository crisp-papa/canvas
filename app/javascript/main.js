import { getRandomRGB, getAvatarSourceImageValues } from './utility.js';

const canvas = document.getElementById('main');
const context = canvas.getContext('2d');
const output = document.getElementById('output');

function handleMouseDown(event) { 
  if (event.button == 0) { 
    // Left click (move / attack / pick up item / use door / open chest / etc)
  }
}

function handleMouseMovement(event) {
  output.innerText = `Mouse position X: ${event.offsetX}, Mouse position Y: ${event.offsetY}`;
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
  
  let avatar = new Image();
  avatar.src = 'assets/oryx/Avatar.png';
  avatar.onload = () => {
    const [sx, sy, sw, sh] = getAvatarSourceImageValues('right');
    const [dx, dy, dw, dh] = [0, 0, 16, 24];
    // image, sx, sy, sw, sh, dx, dy, dw, dh
    context.drawImage(avatar, sx, sy, sw, sh, dx, dy, dw, dh);
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