import React from "react";
import { Container, Button, Ul, Li, Icon, Span } from "./style";

const index = () => {
  return (
    <Container>
      <Button>GENERATE INVOICE</Button>
      <Ul>
        <Li>
          <Icon>
            <img src='./assets/overview.svg' alt='overview' />
          </Icon>
          <Span>Overview</Span>
        </Li>
      </Ul>
    </Container>
  );
};

export default index;
