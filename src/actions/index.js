export const onInputChange = (name, value) => {
  return {
    type: "ON_INPUT_CHANGE",
    payload: { name, value }
  };
};
export const onSubmit = () => {
  return {
    type: "ON_SUBMIT"
  };
};
export const clearForm = () => {
  return {
    type: "CLEAR_FORM"
  };
};
export const onMapClick = (x, y) => {
  return {
    type: "ON_MAP_CLICK",
    payload: { x, y }
  };
};
export const deleteDot = activeDot => {
  return {
    type: "DELETE_DOT",
    payload: { activeDot }
  };
};
