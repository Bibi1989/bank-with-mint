import React from "react";
import {
  NavStyle,
  LogoText,
  Ul,
  Li,
  Flex,
  Span,
  P,
  Div,
  DivLogo,
} from "./style";
import { FormStyle, DivGroup, Input } from "../Main/MainSubMenu/style";

const index = () => {
  return (
    <NavStyle>
      <DivLogo>
        <LogoText>TransMoniter</LogoText>
        <FormStyle>
          <DivGroup>
            <img src='./assets/search_icon.svg' alt='' />
            <Input type='text' placeholder='Search' />
          </DivGroup>
        </FormStyle>
      </DivLogo>
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
