import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { StyledCell } from './StyledCell';

// Utils
import { TETROMINOS } from '../../utils/tetrominos';

function Cell({ type }) {
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
}

Cell.propTypes = {
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default React.memo(Cell);
