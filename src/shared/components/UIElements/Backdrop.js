// React and State Components
import React from 'react';
import ReactDOM from 'react-dom';

// UI Components
import styled from 'styled-components';

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <Wrapper
      isdisabled={props.isdisabled}
      onClick={() => {
        props.handleClick();
      }}
    ></Wrapper>,
    document.getElementById('backdrop-hook')
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 30;
  :hover {
    cursor: ${(props) => (props.isdisabled ? 'wait' : 'no-drop')};
  }
`;

export default Backdrop;
