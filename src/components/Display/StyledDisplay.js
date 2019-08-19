import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  line-height: 1.6;
  /* A link that has not been visited */
  a:link {
    color: white;
  }
  /* A link that has been visited */
  a:visited {
    color: white;
  }
  /* A link that is hovered on */
  a:hover {
    color: white;
  }
  /* A link that is selected */
  a:active {
    color: white;
  }
`;
