import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 689px 379px;
  gap: 5px;

  border: 1px solid #eef8fd;
  box-sizing: border-box;
  border-radius: 2px;
  margin-top: 27px;
`;
export const GridOne = styled.div`
  background: #ffffff;
`;
export const GridTwo = styled.div`
  background: #ffffff;
`;
export const DivOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 30px 0px 34px;
  padding-bottom: 45px;
`;
export const DivTwo = styled.div``;
export const H4 = styled.h4``;
export const Select = styled.div`
  border: 1px solid #dde0e3;
  border-radius: 4.25px;
  padding: 10px 11px;
  font-family: Segoe UI;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: flex-end;

  color: #7f8fa4;
`;
export const Days = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;

  h4 {
    font-family: Segoe UI;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
  }
`;
export const Shape = styled.div`
  display: flex;
  align-items: center;
`;
export const ShapeDiv = styled.div``;
export const ArrowButtons = styled.div`
  padding-left: 39.5px;

  img:first-child {
    display: inline-block;
    padding-right: 13px;
  }
`;
