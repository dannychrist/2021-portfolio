// React and State Components
import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

// UI Components
import styled from 'styled-components'

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
    >
      <Wrapper className='side-drawer' onClick={props.onClick}>
        {props.children}
      </Wrapper>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

const Wrapper = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  background: black;
  box-shadow: var(--bs-light);
  width: 70%;
`;

export default SideDrawer;