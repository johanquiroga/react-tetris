import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { StyledDisplay } from './StyledDisplay';

function Display({ gameOver, text }) {
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;
}

Display.propTypes = {
  gameOver: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Display.defaultProps = {
  gameOver: false,
};

export default Display;
