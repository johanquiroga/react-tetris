import React from 'react';

// Components
import Stage from '../Stage';
import Display from '../Display';
import StartButton from '../StartButton';

// Styled
import { StyledTetris, StyledTetrisWrapper } from './StyledTetris';

// Utils
import { createStage } from '../../utils/game';

function Tetris() {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display gameOver={false} text="Score" />
            <Display gameOver={false} text="Rows" />
            <Display gameOver={false} text="Level" />
          </div>
          <StartButton callback={() => {}} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}

export default Tetris;
