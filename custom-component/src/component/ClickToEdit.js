import { useState } from 'react';
import styled from 'styled-components';
import { Container, SmallTitle, SubTitle } from './Common';

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div.verticalCenter {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    font-size: 16px;

    > div {
      margin-right: 15px;
    }

    > input {
      border: 1px solid #e4e4e4;
      width: 150px;
      height: 30px;
      text-align: center;
      font-size: 16px;
      :focus {
        font-size: 14px;
      }
    }
  }

  > input {
    margin-left: 10px;
  }
`;

export default function ClickToEdit() {
  const [content, setContent] = useState({ name: '김코딩', age: 20 });
  const [name, setName] = useState('김코딩');
  const [age, setAge] = useState(20);

  const contentHandler = () => {
    setContent({ name: name, age: age });
  };
  return (
    <>
      <SubTitle>ClickToEdit</SubTitle>
      <div onClick={contentHandler}>
        <Container>
          <SmallTitle>ClickToEdit</SmallTitle>
          <EditContainer>
            <div className="verticalCenter">
              <div className="content">이름</div>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="verticalCenter">
              <div className="content">나이</div>
              <input value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="verticalCenter">
              이름 {content.name} 나이 {content.age}
            </div>
          </EditContainer>
        </Container>
      </div>
    </>
  );
}
