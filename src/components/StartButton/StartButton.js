import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { StyledStartButton } from './StyledStartButton';

function StartButton({ callback }) {
  return <StyledStartButton onClick={callback}>Start Game</StyledStartButton>;
}

StartButton.propTypes = {
  callback: PropTypes.func,
};

StartButton.defaultProps = {
  callback: () => {},
};

export default StartButton;
