import { useState, useEffect, useCallback } from 'react';

export default function useGameStatus(rowsCleared) {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    // Check if we have score
    if (rowsCleared > 0) {
      // This is how original tetris score is calculated
      setScore(
        prevScore => prevScore + linePoints[rowsCleared - 1] * (level + 1)
      );
      setRows(prevRows => prevRows + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
}
