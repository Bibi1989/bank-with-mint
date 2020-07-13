import React from "react";
import styled from "styled-components";

const Cards = ({ card: { title, number, img, naira } }) => {
  return (
    <Card>
      <Div>
        <P>{title}</P>
        <H3>
          {naira && <span>&#8358;</span>}
          {number}
        </H3>
      </Div>
      <Chart>
        <img src={img} alt={title} />
      </Chart>
    </Card>
  );
};

export default Cards;

export const Card = styled.div`
  padding: 18px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #eef8fd;
  border-radius: 2px;
`;
export const Div = styled.div``;
export const Chart = styled.div``;
export const H3 = styled.h3`
  font-family: Segoe UI;
  font-size: 18px;
  line-height: 24px;
  color: #262626;
`;
export const P = styled.p`
  font-family: Segoe UI;
  font-size: 12px;
  line-height: 16px;
  color: #787c90;
`;
