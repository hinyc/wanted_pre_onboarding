/* eslint-disable array-callback-return */
import { useState } from 'react';
import styled from 'styled-components';
import { Container, SmallTitle, SubTitle } from './Common';

const boxShadow = '0 4px 6px #d8d9d9';

const InputContainer = styled.div`
  border: 1px solid #f0f0f1;
  border-radius: ${({ dropDownList }) => (dropDownList.length > 0 ? '10px 10px 0 0' : '10px')};
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  position: relative;
  > input {
    font-size: 16px;
    width: 100%;
    border: none;
    :focus {
      outline: none;
    }
  }
  > span.delete {
    :hover {
      cursor: pointer;
    }
  }
  &:focus-within {
    box-shadow: ${boxShadow};
  }
`;

const DropDownContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #f0f0f1;
  border-radius: 0 0 10px 10px;
  width: 100%;
  padding: 7px 0;
  position: absolute;
  left: 0;
  top: 171px;
  box-shadow: ${boxShadow};
  > div.list {
    font-size: 14px;
    padding-left: 16px;
    :hover {
      background-color: #efefef;
    }
  }
`;

const AutoCompleteList = ['rustic', 'antique', 'vinyl', 'vintage', 'refurbished', '신품', '빈티지', '중고A급', '중고B급', '골동품'];

export default function AutoComplete() {
  const [inputValue, setInputValue] = useState('');

  const dropDownList = AutoCompleteList.filter((el) => {
    if (inputValue !== '') {
      return el.includes(inputValue);
    }
  });

  const deleteInputValue = () => {
    setInputValue('');
  };

  return (
    <>
      <SubTitle>AutoComplete</SubTitle>
      <Container>
        <SmallTitle>AutoComplete</SmallTitle>
        <InputContainer dropDownList={dropDownList}>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <span className="delete" onClick={deleteInputValue}>
            ×
          </span>
        </InputContainer>
        {dropDownList.length > 0 ? (
          <DropDownContainer>
            {dropDownList.map((el, idx) => (
              <div
                className="list" //
                key={idx}
                onClick={() => setInputValue(el)}
              >
                {el}
              </div>
            ))}
          </DropDownContainer>
        ) : null}
      </Container>
    </>
  );
}
