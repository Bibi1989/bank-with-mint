import React from "react";
import { ShowingStyle, Flex, P } from "../MainSubMenu/style";

import styled from "styled-components";

const Paginate = () => {
  return (
    <Container>
      <ShowingStyle>
        <Flex>
          <P>showing 1 to 10 of 500 entries</P>
        </Flex>
      </ShowingStyle>
      <PaginateButton>
        <Previous>Previous</Previous>
        <Number className='active'>1</Number>
        <Number>2</Number>
        <Next>Next</Next>
      </PaginateButton>
    </Container>
  );
};

export default Paginate;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 31px;
  padding-bottom: 72px;
`;

export const PaginateButton = styled.div`
  display: flex;
`;
export const Previous = styled.div`
  border: 1px solid #ced0da;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 5px 10px;

  font-family: Segoe UI;
  font-size: 13px;
  line-height: 17px;
  color: #000000;
`;
export const Next = styled.div`
  border: 1px solid #ced0da;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 5px 10px;

  font-family: Segoe UI;
  font-size: 13px;
  line-height: 17px;
  color: #000000;
`;
export const Number = styled.div`
  border: 1px solid #ced0da;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 5px 13px;

  &.active {
    background: #1875f0;
    color: #ffffff;
  }
`;
