import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "../components/Sidebar/index";
import Main from "../components/Main/index";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Grid>
        <Sidebar />
        <Div>
          <Main />
        </Div>
      </Grid>
    </div>
  );
};

export default Dashboard;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  background: #f7f8fa;
`;
const Div = styled.div`
  padding: 33px 80px 33px 30px;
`;
