import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "../components/Sidebar/index";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Grid>
        <Sidebar />
      </Grid>
    </div>
  );
};

export default Dashboard;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
`;
