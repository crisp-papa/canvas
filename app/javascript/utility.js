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