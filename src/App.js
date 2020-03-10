import React from "react";
import Body from "./body";
import Header from "./Header";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Body />
    </AppContainer>
  );
};

export default App;
