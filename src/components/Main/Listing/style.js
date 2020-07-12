import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Grid = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: 45% 10% 13% 10% 17% 5%;

  .header {
    background: #eaeef0;
    font-family: Segoe UI;
    font-size: 14px;
    line-height: 19px;
    color: #7f8fa4;
  }
`;
export const Li = styled.p`
  padding: 12px 26px;
  background: white;
  margin-bottom: 2px;
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 16px;
  color: #7f8fa4;

  &.title {
    font-family: Segoe UI;
    font-size: 14px;
    line-height: 19px;
    color: #414042;
  }
`;

export const Button = styled.button`
  border: 1px solid #cccfd4;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 9px 12px;
  background: transparent;
  font-family: Segoe UI;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  width: 100%;

  color: ${({ color }) =>
    color === "reconcilled"
      ? "#27AE60"
      : color === "pending"
      ? "#EBC315"
      : "#7F8FA4"};

  span {
    padding-left: 8px;
  }

  .circle {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${({ color }) =>
      color === "reconcilled"
        ? "#27AE60"
        : color === "pending"
        ? "#EBC315"
        : "#7F8FA4"};
  }
`;
