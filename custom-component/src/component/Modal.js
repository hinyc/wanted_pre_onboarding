import { useState } from 'react';
import styled from 'styled-components';
import { Container, SmallTitle, SubTitle } from './Common';

const ModalButton = styled.div`
  background-color: #4000c7;
  width: 130px;
  height: 60px;
  border-radius: 30px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;
const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #adadad;
  opacity: 0.6;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalWindow = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  width: 300px;
  height: 90px;
  text-align: center;
  position: absolute;
  z-index: 999;
`;

const CloseButton = styled.div`
  text-align: center;
  margin-top: 5px;
  :hover {
    cursor: pointer;
  }
`;
const ModalText = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <SubTitle>Modal</SubTitle>
      <Container>
        <SmallTitle>Modal</SmallTitle>
        <ModalButton onClick={showModalHandler}>Open Modal</ModalButton>
        {showModal ? (
          <>
            <ModalWindow>
              <CloseButton onClick={showModalHandler}>x</CloseButton>
              <ModalText>HELLO CODESTATES!</ModalText>
            </ModalWindow>
            <ModalBackground onClick={showModalHandler} />
          </>
        ) : null}
      </Container>
    </>
  );
}
