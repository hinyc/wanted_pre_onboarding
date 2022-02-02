import { useState } from 'react';
import styled from 'styled-components';
import { Container, SmallTitle, SubTitle } from './Common';

const ToggleContainer = styled.div`
  background-color: #dedede;
  border-radius: 20px;
  width: 90px;
  height: 40px;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 15px;
  :hover {
    cursor: pointer;
  }
`;

const ToggleBackgroundFiller = styled.div`
  background-color: #4000c7;
  width: ${({ toggleState }) => (toggleState ? '90px' : '0px')};
  height: 40px;
  transition: 0.4s;
`;

const Circle = styled.div`
  background-color: rgb(255, 255, 255);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: 0.5s;
  margin-left: ${({ toggleState }) => (toggleState ? '55px' : '5px')};
  position: absolute;
`;

export default function Toggle() {
  const [toggleState, setToggleState] = useState(false);

  const toggleHandler = () => {
    setToggleState(!toggleState);
  };

  return (
    <>
      <SubTitle>Toggle</SubTitle>
      <Container>
        <SmallTitle>Toggle</SmallTitle>
        <ToggleContainer onClick={toggleHandler}>
          <ToggleBackgroundFiller toggleState={toggleState} />
          <Circle toggleState={toggleState} />
        </ToggleContainer>
        <div>{`Toggle Switch ${toggleState ? 'ON' : 'OFF'}`}</div>
      </Container>
    </>
  );
}
