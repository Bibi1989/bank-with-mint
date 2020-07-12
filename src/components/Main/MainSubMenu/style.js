import styled from "styled-components";

export const SubNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
`;
export const ShowingStyle = styled.div``;
export const ArrowDown = styled.div`
  margin-right: 20px;

  span {
    font-family: Segoe UI;
    font-size: 14px;
    line-height: 19px;
    color: #1875f0;
    padding-right: 7px;
  }
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
export const P = styled.div`
  padding-right: 20px;
  font-family: Segoe UI;
  font-size: 13px;
  line-height: 17px;
  color: #262626;
`;
export const FormStyle = styled.div``;
export const DivGroup = styled.div`
  border-bottom: 0.5px solid #787878;
  display: flex;
  align-items: center;
  padding: 5px 0;
  width: 336px;
  margin-left: 37px;
  margin-right: 137px;
`;
export const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
  margin-left: 7px;

  &::placeholder {
    font-family: Segoe UI;
    font-size: 11px;
    line-height: 15px;
    color: #787878;
  }
`;

export const DropDown = styled.div`
  display: flex;
  align-items: center;
`;
export const Span = styled.div`
  font-family: Segoe UI;
  font-size: 13px;
  line-height: 17px;
  color: #000000;
`;
export const Select = styled.div`
  margin-left: 16px;
  padding: 8px 16px;
  border: 1px solid #ced0da;
  box-sizing: border-box;
  border-radius: 2px;
  width: 150px;
  display: flex;
  justify-content: space-between;
  position: relative;

  span {
    font-family: Segoe UI;
    font-size: 13px;
    line-height: 17px;
    color: #414042;
  }
`;
export const Ul = styled.ul`
  list-style: none;
  position: absolute;
  background: #ffffff;
  border: 1px solid #ededed;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  left: 0;
  right: 0;
  top: 100%;
  z-index: 20;

  li:last-child {
    border-radius: 0px 0px 6px 6px;
  }
`;
export const Li = styled.li`
  font-family: Segoe UI;
  font-size: 13px;
  line-height: 17px;
  color: #414042;
  padding: 8px 18px;
`;
