import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { StyledForm } from "./styled";
const Form = () => (
  <StyledForm>
    <TextField id="location-name" label="Nombre" margin="normal" />
    <TextField id="address" label="Dirección" margin="normal" />
    <TextField id="phone" label="Teléfono" margin="normal" />
    <TextField id="category" label="Categoría" margin="normal" />
    <TextField id="coordinates" label="Coord." margin="normal" />
    <Button variant="contained" color="primary" style={{ marginTop: "50px" }}>
      Agregar
    </Button>
  </StyledForm>
);

export default Form;
