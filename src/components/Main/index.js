import React from "react";
import styled from "styled-components";
import {
  Row,
  Grid,
  GridOne,
  GridTwo,
  DivOne,
  DivTwo,
  Select,
  Days,
  H4,
  Shape,
  ArrowButtons,
} from "./Style";

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
              <ArrowButtons>
                <img src='./assets/left_button.svg' alt='left button' />
                <img src='./assets/right_button.svg' alt='right button' />
              </ArrowButtons>
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

        {/* second grid */}
        <GridTwo>
          <Order>
            <H3>Orders</H3>
            <Progress>
              <ProgressBar></ProgressBar>
            </Progress>
            <List>
              <P>
                <SpanTitle>Pending Orders:</SpanTitle>
                <SpanAmountYellow>20</SpanAmountYellow>
              </P>
              <P>
                <SpanTitle>Reconcilled Orders:</SpanTitle>
                <SpanAmountGreen>20</SpanAmountGreen>
              </P>
              <P>
                <SpanTitle>Total Orders:</SpanTitle>
                <SpanAmountBlue>20</SpanAmountBlue>
              </P>
            </List>
          </Order>
          <Order>
            <H3>Payments</H3>
            <Progress>
              <ProgressBar></ProgressBar>
            </Progress>
            <List>
              <P>
                <SpanTitle>Pending Orders:</SpanTitle>
                <SpanAmountYellow>20</SpanAmountYellow>
              </P>
              <P>
                <SpanTitle>Reconcilled Orders:</SpanTitle>
                <SpanAmountGreen>20</SpanAmountGreen>
              </P>
              <P>
                <SpanTitle>Total Orders:</SpanTitle>
                <SpanAmountBlue>20</SpanAmountBlue>
              </P>
            </List>
          </Order>
        </GridTwo>
      </Grid>
    </div>
  );
};

export default Main;

export const Order = styled.div`
  padding: 21px 25px;
  background: #ffffff;
`;
export const H3 = styled.h3`
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 16px;
  color: #262626;
  padding-bottom: 11px;
`;
export const Progress = styled.div`
  background: #fdc203;
  height: 4px;
  width: calc(242px + 63px);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 11px;
`;
export const ProgressBar = styled.div`
  background: #27ae60;
  width: 242px;
  height: 100%;
`;
export const List = styled.div``;
export const P = styled.p`
  display: flex;
  padding-bottom: 11px;
`;
export const SpanTitle = styled.span`
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 16px;
  color: #262626;
  padding-right: 5px;
`;
export const SpanAmountYellow = styled.span`
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 16px;
  color: #fdc203;
`;
export const SpanAmountGreen = styled.span`
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 16px;
  color: #27ae60;
`;
export const SpanAmountBlue = styled.span`
  font-family: Segoe UI;
  font-size: 14px;
  line-height: 16px;
  color: #1860ec;
`;
