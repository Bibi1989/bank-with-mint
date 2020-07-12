import React from "react";
import { Container, Button, Ul, Li, Icon, Span } from "./style";

import { overviews, payments, orders, merchants } from "../../utils/data";

const index = () => {
  return (
    <Container>
      <Button>GENERATE INVOICE</Button>

      {/* main section list */}
      <Ul>
        <Li className='li_header'>Main</Li>
        {overviews.map(({ title, img }) => (
          <Li className='active'>
            <Icon>
              <img src={img} alt={title} />
            </Icon>
            <Span>{title}</Span>
          </Li>
        ))}
      </Ul>

      {/* payments section lists */}
      <Ul>
        <Li className='li_header'>Payments</Li>
        {payments.map(({ title, img }) => (
          <Li>
            <Icon>
              <img src={img} alt={title} />
            </Icon>
            <Span>{title}</Span>
          </Li>
        ))}
      </Ul>

      {/* order section lists */}
      <Ul>
        <Li className='li_header'>Orders</Li>
        {orders.map(({ title, img }) => (
          <Li>
            <Icon>
              <img src={img} alt={title} />
            </Icon>
            <Span>{title}</Span>
          </Li>
        ))}
      </Ul>

      {/* merchant section lists */}
      <Ul>
        <Li className='merchant_list'></Li>
        {merchants.map(({ title, img }) => (
          <Li>
            <Icon>
              <img src={img} alt={title} />
            </Icon>
            <Span>{title}</Span>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default index;
