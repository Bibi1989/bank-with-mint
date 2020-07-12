import React from "react";
import styled from "styled-components";

import Card from "./Cards";
import { cardsDetails } from "../../utils/data";
console.log(cardsDetails);

const days = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const Main = () => {
  return (
    <div>
      <Row>
        {cardsDetails.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </Row>

      {/* second section */}
      <Grid>
        <GridOne>
          <DivOne>
            <H4>Today: 5, Aug 2018</H4>
            <Shape>
              <Select>
                <span>1 Jan - 1 Jun</span>
                <img src='./assets/arrow_down.svg' alt='arrow down' />
              </Select>
            </Shape>
          </DivOne>
          <Days>
            {days.map((day) => (
              <h4>{day}</h4>
            ))}
          </Days>
          <DivTwo>
            <img src='./assets/big_chart.svg' alt='big chart' />
          </DivTwo>
        </GridOne>
        <GridTwo></GridTwo>
      </Grid>
    </div>
  );
};

export default Main;

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 689px 379px;
  background: #ffffff;
  border: 1px solid #eef8fd;
  box-sizing: border-box;
  border-radius: 2px;
  margin-top: 27px;
`;
export const GridOne = styled.div``;
export const GridTwo = styled.div`
  background: red;
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
  padding: 0 30px;

  h4 {
    font-family: Segoe UI;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
  }
`;
export const Shape = styled.div``;
export const ShapeDiv = styled.div``;
