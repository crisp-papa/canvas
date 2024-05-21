export class Player {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;

    // Can update this later to be dynamic when we have more tilesets for avatars
    this.image = new Image();
    this.image.src = 'assets/oryx/Avatar.png';
  }

  updatePlayerOrientation(xLocation) { 
    if (xLocation < this.x) {
      this.orientation = 'left';
    } else { 
      this.orientation = 'right';
    }
  }
}