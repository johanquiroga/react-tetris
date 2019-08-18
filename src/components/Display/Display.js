import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { StyledDisplay } from './StyledDisplay';

function Display({ gameOver, text }) {
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;
}

Display.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Display;
