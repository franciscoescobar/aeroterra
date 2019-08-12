import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { StyledForm } from "./styled";
const Form = ({ info, onTextFieldChange, onSubmit }) => (
  <StyledForm onSubmit={onSubmit}>
    <TextField
      id="location-name"
      label="Descripción"
      margin="normal"
      name="name"
      value={info.name}
      onChange={onTextFieldChange}
    />
    <TextField
      id="address"
      label="Dirección"
      margin="normal"
      name="address"
      value={info.address}
      onChange={onTextFieldChange}
    />
    <TextField
      id="phone"
      label="Número teléfonico"
      margin="normal"
      name="phone"
      value={info.phone}
      onChange={onTextFieldChange}
    />

    <TextField
      id="x-coordinate"
      label="Coordinada X"
      margin="normal"
      name="coordinateX"
      value={info.coordinateX}
      onChange={onTextFieldChange}
    />
    <TextField
      id="y-coordinate"
      label="Coordinada Y"
      margin="normal"
      name="coordinateY"
      value={info.coordinateY}
      onChange={onTextFieldChange}
    />
    <TextField
      id="category"
      label="Categoría"
      margin="normal"
      name="category"
      value={info.category}
      onChange={onTextFieldChange}
    />
    <Button
      type="submit"
      variant="contained"
      color="primary"
      style={{ marginTop: "50px" }}
    >
      Agregar
    </Button>
  </StyledForm>
);

export default Form;
