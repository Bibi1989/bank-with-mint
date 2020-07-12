import React from "react";

import {
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
  Order,
  Progress,
  ProgressBar,
  H3,
  List,
  P,
  SpanTitle,
  SpanAmountBlue,
  SpanAmountGreen,
  SpanAmountYellow,
} from "./Style";

import { days } from "../../utils/data";

const Chart = () => {
  return (
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
  );
};

export default Chart;
