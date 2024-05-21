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


export function getAvatarSourceImageValues(orientation = 'left') {
  const map = new Map([
    // sx, sy, sw, sh
    ['shadow', [0, 0, 16, 24]],
    ['left', [16, 0, 16, 24]],
    ['leftMelee', [32, 0, 16, 24]],
    ['leftUnknown', [48, 0, 16, 24]], // Honestly not sure what this sprite is supposed to represent
    ['leftMeleeLarge', [64, 0, 16, 24]],
    ['leftRanged', [80, 0, 16, 24]],
    ['leftCrouched', [16, 24, 16, 24]],
    ['leftMeleeCrouched', [32, 24, 16, 24]],
    ['leftUnknownCrouched', [48, 24, 16, 24]],
    ['leftMeleeLargeCrouched', [64, 24, 16, 24]],
    ['leftRangedCrouched', [80, 24, 16, 24]],
    ['right', [16, 48, 16, 24]],
    ['rightMelee', [32, 48, 16, 24]],
    ['rightUnknown', [48, 48, 16, 24]], // Same
    ['rightMeleeLarge', [64, 48, 16, 24]],
    ['rightRanged', [80, 48, 16, 24]],
    ['rightCrouched', [16, 72, 16, 24]],
    ['rightMeleeCrouched', [32, 72, 16, 24]],
    ['rightUnknownCrouched', [48, 72, 16, 24]],
    ['rightMeleeLargeCrouched', [64, 72, 16, 24]],
    ['rightRangedCrouched', [80, 72, 16, 24]],
  ]);

  return map.get(orientation);
}