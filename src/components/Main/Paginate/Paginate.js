import React from "react";
import { ShowingStyle, Flex, P } from "../MainSubMenu/style";
import { PaginateButton, Previous, Number, Next, Container } from "./style";

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
