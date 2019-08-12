import React, { useState } from "react";
import Form from "../Form";
import BaseMap from "../Map";
import { Wrapper } from "./styled";
function App() {
  const [info, setInfo] = useState({
    name: "",
    address: "",
    phone: "",
    category: "",
    coordinateX: "",
    coordinateY: ""
  });
  const [submit, setSubmit] = useState(false);
  const handleTextFieldChange = event => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    setSubmit(!submit);
  };

  const addedPoint = () => setSubmit(false);
  return (
    <Wrapper>
      <Form
        info={info}
        onTextFieldChange={handleTextFieldChange}
        onSubmit={handleSubmit}
      />
      <BaseMap info={info} onAddedPoint={addedPoint} onSubmit={submit} />
    </Wrapper>
  );
}

export default App;
