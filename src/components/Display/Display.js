import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { StyledDisplay } from './StyledDisplay';

function Display({ gameOver, text, children }) {
  return <StyledDisplay gameOver={gameOver}>{text || children}</StyledDisplay>;
}

Display.propTypes = {
  gameOver: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.node,
};

Display.defaultProps = {
  gameOver: false,
  text: '',
  children: <></>,
};

export default Display;
