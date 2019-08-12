import React from "react";
import Form from "../Form";
import Map from "../Map";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
function App() {
  return (
    <Wrapper>
      <Form />
      <Map />
    </Wrapper>
  );
}

export default App;
