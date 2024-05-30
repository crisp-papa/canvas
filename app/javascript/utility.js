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


export function getAvatarSourceImageValues(key = 'left', up = false) {
  if (up) { 
    key += 'Up';
  }

  const map = new Map([
    // sx, sy, sw, sh
    // Row 1
    ['shadow', [0, 0, TILE_WIDTH, TILE_HEIGHT]],
    ['left', [32, 0, TILE_WIDTH, TILE_HEIGHT]],
    ['leftMelee', [64, 0, TILE_WIDTH, TILE_HEIGHT]],
    ['leftUnknown', [96, 0, TILE_WIDTH, TILE_HEIGHT]], // Honestly not sure what this sprite is supposed to represent
    ['leftMeleeLarge', [128, 0, TILE_WIDTH, TILE_HEIGHT]],
    ['leftRanged', [160, 0, TILE_WIDTH, TILE_HEIGHT]],
    ['leftUp', [192, 0, TILE_WIDTH, TILE_HEIGHT]],
    // Row 2
    ['leftCrouched', [32, TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT]],
    ['leftMeleeCrouched', [64, TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT]],
    ['leftUnknownCrouched', [96, TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT]],
    ['leftMeleeLargeCrouched', [128, TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT]],
    ['leftRangedCrouched', [160, TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT]],
    // Row 3
    ['right', [32, TILE_HEIGHT * 2, TILE_WIDTH, TILE_HEIGHT]],
    ['rightMelee', [64, TILE_HEIGHT * 2, TILE_WIDTH, TILE_HEIGHT]],
    ['rightUnknown', [96, TILE_HEIGHT * 2, TILE_WIDTH, TILE_HEIGHT]], // Same
    ['rightMeleeLarge', [128, TILE_HEIGHT * 2, TILE_WIDTH, TILE_HEIGHT]],
    ['rightRanged', [160, TILE_HEIGHT * 2, TILE_WIDTH, TILE_HEIGHT]],
    ['rightUp', [192, TILE_HEIGHT * 2, TILE_WIDTH, TILE_HEIGHT]],
    // Row 4
    ['rightCrouched', [32, TILE_HEIGHT * 3, TILE_WIDTH, TILE_HEIGHT]],
    ['rightMeleeCrouched', [64, TILE_HEIGHT * 3, TILE_WIDTH, TILE_HEIGHT]],
    ['rightUnknownCrouched', [96, TILE_HEIGHT * 3, TILE_WIDTH, TILE_HEIGHT]],
    ['rightMeleeLargeCrouched', [128, TILE_HEIGHT * 3, TILE_WIDTH, TILE_HEIGHT]],
    ['rightRangedCrouched', [160, TILE_HEIGHT * 3, TILE_WIDTH, TILE_HEIGHT]],
  ]);

  return map.get(key);
}