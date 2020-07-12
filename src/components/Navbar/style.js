import styled from "styled-components";

export const NavStyle = styled.nav`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
  height: 60px;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoText = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  color: #1875f0;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  padding-left: 36px;
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 19px;
  color: #647787;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Div = styled.div`
  padding-right: 12px;
`;

export const P = styled.p`
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #647787;
`;

export const Span = styled.span`
  display: block;
  font-family: Segoe UI;
  font-size: 10px;
  line-height: 13px;
  text-align: right;
  color: #647787;
`;
