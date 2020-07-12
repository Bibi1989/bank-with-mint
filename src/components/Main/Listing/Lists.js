import React from "react";
import { Container, Grid, Li, Button } from "./style";

import { listings } from "../../../utils/data";

const Lists = () => {
  return (
    <Container>
      <Grid>
        <Li className='header'>Item Type</Li>
        <Li className='header'>Price</Li>
        <Li className='header'>Transact No</Li>
        <Li className='header'>Time</Li>
        <Li className='header'></Li>
        <Li className='header'></Li>
      </Grid>

      {listings.map((list, index) => (
        <Grid key={index}>
          <Li className='title'>{list.title}</Li>
          <Li>${list.price}</Li>
          <Li>{list.transactin}</Li>
          <Li>{list.time}</Li>
          <Li>
            <Button color={list.status.toLowerCase()}>
              <div className='circle'></div>
              <span>{list.status}</span>
            </Button>
          </Li>
          <Li>
            <img src='./assets/arrow_down.svg' alt='arrow down' width='10px' />
          </Li>
        </Grid>
      ))}
    </Container>
  );
};

export default Lists;
