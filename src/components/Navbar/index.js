import React from "react";
import { NavStyle, LogoText, Ul, Li, Flex, Span, P, Div } from "./style";

const index = () => {
  return (
    <NavStyle>
      <LogoText>TransMoniter</LogoText>
      <Ul>
        <Li>Suport</Li>
        <Li>FAQ</Li>
        <Li>
          <img src='./assets/bell.svg' alt='bell notification' />
        </Li>
        <Li>
          <Flex>
            <Div>
              <Span>Hello</Span>
              <P>Oluwaleke Ojo</P>
            </Div>
            <img src='./assets/user.svg' alt='user' />
          </Flex>
        </Li>
      </Ul>
    </NavStyle>
  );
};

export default index;
