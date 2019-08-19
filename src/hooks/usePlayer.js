import { useState, useCallback } from 'react';

// Utils
import { randomTetromino, TETROMINOS } from '../utils/tetrominos';
import { STAGE_WIDTH, checkCollision } from '../utils/game';

export default function usePlayer() {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const rotate = (tetromino, dir) => {
    // Make the row to become cols (transpose)
    const rotatedTetromino = tetromino.map((_, i) =>
      tetromino.map(col => col[i])
    );
    // Reverse each row to get a rotated matrix
    if (dir > 0) {
      return rotatedTetromino.map(row => row.reverse());
    }
    return rotatedTetromino.reverse();
  };

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      pos: { x: prevPlayer.pos.x + x, y: prevPlayer.pos.y + y },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
}
