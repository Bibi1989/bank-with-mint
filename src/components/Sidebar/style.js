import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 168px;
`;
export const Button = styled.button`
  border: none;
  outline: none;
  background: #27ae60;
  border-radius: 30px;
  padding: 9px 25px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  letter-spacing: 0.2px;
  color: #ffffff;
  margin: 33px auto;
  margin-bottom: 0px;
`;
export const Divider = styled.div`
  height: 4px;
  width: 100%;
  background-color: #f7f8fa;
`;
export const Ul = styled.ul`
  list-style: none;

  .li_header {
    font-family: Segoe UI;
    font-size: 11px;
    line-height: 15px;
    color: #647787;
    padding-bottom: 14px;
    padding-top: 32px;
  }

  .merchant_list {
    padding-top: calc(32px - 16px);
  }
`;
export const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 11px 42px;

  &.active {
    background-color: #e8f1fd;
    border-left: 4px solid #1875f0;
  }
`;
export const Icon = styled.div``;
export const Span = styled.span`
  padding-left: 14px;
  font-family: Segoe UI;
  font-size: 11px;
  line-height: 15px;
  color: #647787;
`;
