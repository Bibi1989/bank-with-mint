import React from "react";
import { Row, H1 } from "./Style";

import Card from "./Cards";
import { cardsDetails } from "../../utils/data";
import Chart from "./Chart";
import SubMenu from "./MainSubMenu/SubMenu";
console.log(cardsDetails);

const Main = () => {
  return (
    <div>
      <Row>
        {cardsDetails.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </Row>

      {/* second section */}
      <Chart />

      {/* payment title */}
      <H1>Payments</H1>

      <SubMenu />
    </div>
  );
};

export default Main;
