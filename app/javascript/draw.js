import { getAvatarSourceImageValues } from './utility.js';
import { TILE_WIDTH, TILE_HEIGHT } from './constants.js';

export function drawPlayerImage(player, context) { 
  const [sx, sy, sw, sh] = getAvatarSourceImageValues(player.orientation);
  const [dx, dy, dw, dh] = [player.x, player.y, TILE_WIDTH, TILE_HEIGHT];
  // image, sx, sy, sw, sh, dx, dy, dw, dh
  context.drawImage(player.image, sx, sy, sw, sh, dx, dy, dw, dh);
}