import { useState } from 'react';
import styled from 'styled-components';
import { Container, SmallTitle, SubTitle } from './Common';

const TagContainer = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  width: 480px;
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  &:focus-within {
    border: 1px solid #4000c7;
  }
  > input {
    border: none;
    padding-bottom: 4px;
    margin: 0 0 8px 8px;
    :focus {
      outline: none;
    }
  }
`;
const TagStyle = styled.div`
  border-radius: 5px;
  background-color: #4000c7;
  color: #ffffff;
  padding: 7px;
  margin: 0 0 8px 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const DeleteStyle = styled.div`
  background-color: #ffffff;
  color: #4000c7;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  font-size: 14px;
  line-height: 13px;
  text-align: center;
  margin-left: 8px;
  :hover {
    cursor: pointer;
  }
`;
export default function Tag() {
  const [tagList, setTagList] = useState(['CodeStates', 'JJang']);
  const addTag = (e) => {
    if (e.key === 'Enter') {
      if (tagList.includes(e.target.value) || e.target.value === '') {
        return;
      }
      setTagList([...tagList, e.target.value]);
      e.target.value = '';
      console.log(e.target.value);
    }
  };

  const deleteTag = (deleteIdx) => {
    setTagList(tagList.filter((el, idx) => idx !== deleteIdx));
  };

  return (
    <>
      <SubTitle>Tag</SubTitle>
      <Container>
        <SmallTitle>Tag</SmallTitle>
        <TagContainer>
          {tagList.map((el, idx) => (
            <TagStyle key={idx}>
              {el}
              <DeleteStyle onClick={() => deleteTag(idx)}>×</DeleteStyle>
            </TagStyle>
          ))}
          <input
            onKeyUp={(e) => {
              addTag(e);
            }}
            placeholder="Press enter to add tags"
          />
        </TagContainer>
      </Container>
    </>
  );
}
