import { TILE_WIDTH, TILE_HEIGHT } from './constants.js';

export function getRandomNumber(min = 0, max) {
  // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
  const randomNumber = Math.random();
  
  // Scale the random number to the desired range [min, max]
  const scaledNumber = randomNumber * (max - min + 1) + min;

  // Floor the scaled number to get an integer within the range [min, max]
  return Math.floor(scaledNumber);
}

export function getRandomRGB() { 
  return `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
}


export function getAvatarSourceImageValues(key = 'left') {
  const map = new Map([
    // sx, sy, sw, sh
    ['shadow', [0, 0, TILE_WIDTH, TILE_HEIGHT]],
    ['left', [16, 0, TILE_WIDTH, TILE_HEIGHT]],
    ['leftMelee', [32, 0, TILE_WIDTH, TILE_HEIGHT]],
    ['leftUnknown', [48, 0, TILE_WIDTH, TILE_HEIGHT]], // Honestly not sure what this sprite is supposed to represent
    ['leftMeleeLarge', [64, 0, TILE_WIDTH, TILE_HEIGHT]],
    ['leftRanged', [80, 0, TILE_WIDTH, TILE_HEIGHT]],
    ['leftCrouched', [16, 24, TILE_WIDTH, TILE_HEIGHT]],
    ['leftMeleeCrouched', [32, 24, TILE_WIDTH, TILE_HEIGHT]],
    ['leftUnknownCrouched', [48, 24, TILE_WIDTH, TILE_HEIGHT]],
    ['leftMeleeLargeCrouched', [64, 24, TILE_WIDTH, TILE_HEIGHT]],
    ['leftRangedCrouched', [80, 24, TILE_WIDTH, TILE_HEIGHT]],
    ['right', [16, 48, TILE_WIDTH, TILE_HEIGHT]],
    ['rightMelee', [32, 48, TILE_WIDTH, TILE_HEIGHT]],
    ['rightUnknown', [48, 48, TILE_WIDTH, TILE_HEIGHT]], // Same
    ['rightMeleeLarge', [64, 48, TILE_WIDTH, TILE_HEIGHT]],
    ['rightRanged', [80, 48, TILE_WIDTH, TILE_HEIGHT]],
    ['rightCrouched', [16, 72, TILE_WIDTH, TILE_HEIGHT]],
    ['rightMeleeCrouched', [32, 72, TILE_WIDTH, TILE_HEIGHT]],
    ['rightUnknownCrouched', [48, 72, TILE_WIDTH, TILE_HEIGHT]],
    ['rightMeleeLargeCrouched', [64, 72, TILE_WIDTH, TILE_HEIGHT]],
    ['rightRangedCrouched', [80, 72, TILE_WIDTH, TILE_HEIGHT]],
  ]);

  return map.get(key);
}