import { useState } from 'react';
import styled from 'styled-components';
import { Container, SmallTitle, SubTitle } from './Common';

const TabContainer = styled.div`
  right: 0px;
  width: 660px;
  height: 260px;
  position: absolute;
`;

const TabSelectorList = styled.div`
  background-color: #e0e0e0;
  width: 660px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
`;

const TabSelector = styled.div`
  background-color: ${({ idx, select }) => (idx === select ? '#4000c7' : null)};
  color: ${({ idx, select }) => (idx === select ? '#ffffff' : null)};
  width: 205px;
  height: 50px;
  font-weight: 700;
  line-height: 50px;
  padding-left: 10px;
  :hover {
    cursor: pointer;
  }
`;

const ViewMenu = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const tabs = [
  { tab: 'Tab1', menu: 'ONE' },
  { tab: 'Tab2', menu: 'TWO' },
  { tab: 'Tab3', menu: 'THREE' },
];

export default function Tab() {
  const [select, setSelect] = useState(0);

  const selectHandler = (number) => {
    setSelect(number);
  };
  console.log(select);
  return (
    <>
      <SubTitle>Tab</SubTitle>

      <Container>
        <SmallTitle>Tab</SmallTitle>
        <TabContainer>
          <TabSelectorList>
            {tabs.map((el, idx) => (
              <TabSelector
                key={idx}
                idx={idx}
                select={select}
                onClick={() => {
                  selectHandler(idx);
                }}
              >
                {el.tab}
              </TabSelector>
            ))}
          </TabSelectorList>
          <ViewMenu>
            <div>{`Tab menu ${tabs[select].menu}`}</div>
          </ViewMenu>
        </TabContainer>
      </Container>
    </>
  );
}
