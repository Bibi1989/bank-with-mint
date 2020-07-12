import React from "react";

import {
  SubNav,
  ShowingStyle,
  Flex,
  P,
  ArrowDown,
  FormStyle,
  DivGroup,
  Input,
  DropDown,
  Select,
  Ul,
  Li,
  Span,
} from "./style";

const SubMenu = () => {
  return (
    <SubNav>
      <ShowingStyle>
        <Flex>
          <P>Showing</P>
          <ArrowDown>
            <span>20</span>
            <img src='./assets/arrow_down.svg' alt='arrow down' width='10px' />
          </ArrowDown>
          <P>out of 500 payments</P>
        </Flex>
      </ShowingStyle>
      <FormStyle>
        <DivGroup border='0.5px solid #000'>
          <img src='./assets/search_icon.svg' alt='' />
          <Input type='text' placeholder='Search Payments' />
        </DivGroup>
      </FormStyle>

      <DropDown>
        <Span>Show</Span>
        <Select>
          <span>All</span>
          <img src='./assets/arrow_down.svg' alt='arrow down' width='10px' />
          <Ul>
            <Li>All</Li>
            <Li>Reconcilled</Li>
            <Li>Un-reconcilled</Li>
            <Li>Settled</Li>
            <Li>Unsettled</Li>
          </Ul>
        </Select>
      </DropDown>
    </SubNav>
  );
};

export default SubMenu;
