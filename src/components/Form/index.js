import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { StyledForm } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { onInputChange, onSubmit, clearForm } from "../../actions";
const Form = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state);
  const onTextChange = event => {
    dispatch(onInputChange(event.target.name, event.target.value));
  };
  const onFormSubmit = event => {
    event.preventDefault();
    dispatch(onSubmit());
    dispatch(clearForm());
  };
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <TextField
        required
        id="location-name"
        label="Descripción"
        margin="normal"
        name="name"
        value={info.name}
        onChange={onTextChange}
      />
      <TextField
        required
        id="address"
        label="Dirección"
        margin="normal"
        name="address"
        value={info.address}
        onChange={onTextChange}
      />
      <TextField
        id="phone"
        label="Número teléfonico"
        margin="normal"
        name="phone"
        value={info.phone}
        onChange={onTextChange}
      />

      <TextField
        required
        id="x-coordinate"
        label="Coordinada X"
        margin="normal"
        name="coordinateX"
        value={info.coordinateX}
        onChange={onTextChange}
      />
      <TextField
        required
        id="y-coordinate"
        label="Coordinada Y"
        margin="normal"
        name="coordinateY"
        value={info.coordinateY}
        onChange={onTextChange}
      />
      <FormControl margin="normal">
        <InputLabel htmlFor="age-simple">Categoría</InputLabel>
        <Select
          value={info.category}
          onChange={onTextChange}
          inputProps={{
            name: "category",
            id: "age-simple"
          }}
        >
          <MenuItem value={10}>Comercial</MenuItem>
          <MenuItem value={20}>Residencial</MenuItem>
          <MenuItem value={30}>Mixta</MenuItem>
        </Select>
      </FormControl>
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
};

export default Form;
