import React from 'react';
import PropTypes from 'prop-types';

// Components
import Cell from '../Cell';

// Styled
import { StyledStage } from './StyledStage';

function Stage({ stage }) {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row, i) =>
        row.map(
          (cell, j) =>
            console.log(cell) || <Cell key={`${i}.${j}`} type={cell[0]} />
        )
      )}
    </StyledStage>
  );
}

Stage.propTypes = {
  stage: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      )
    )
  ),
};

export default Stage;
