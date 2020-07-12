import React from "react";
import styled from "styled-components";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AppStyle>
      <Dashboard />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  max-width: 1440px;
  margin: auto;
`;
