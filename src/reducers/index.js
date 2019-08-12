const INITIAL_DOTS_STATE = (name, address, phone, x, y) => {
  return {
    geometry: {
      type: "point",
      x: Number(x) || 30,
      y: Number(y) || 50
    },
    symbol: {
      type: "simple-marker",
      color: [63, 81, 181], // indigo
      outline: {
        color: [0, 0, 0], // black
        width: 1
      }
    },
    attributes: {
      Address: address || "Av. Libertador 4673",
      Description: name || "Casa Arturo",
      CoordinateX: x || "30",
      CoordinateY: y || "50",
      Phone: phone
    },
    popipTemplate: {
      title: "{Description}",
      content:
        "Dirección: {Address} <br> Teléfono: {Phone} <br>Coordenadas:  X: {CoordinateX} Y:{CoordinateY}"
    }
  };
};
const INITIAL_STATE = {
  name: "",
  address: "",
  phone: "",
  category: 10,
  coordinateX: "",
  coordinateY: "",
  submit: false,
  dots: [
    INITIAL_DOTS_STATE(),
    INITIAL_DOTS_STATE("algo", "algo", "algo", "30.2", "50")
  ]
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ON_INPUT_CHANGE": {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };
    }
    case "ON_SUBMIT": {
      return {
        ...state,
        submit: true,
        dots: [
          ...state.dots,
          INITIAL_DOTS_STATE(
            state.name,
            state.address,
            state.phone,
            state.coordinateX,
            state.coordinateY
          )
        ]
      };
    }
    case "ON_MAP_CLICK": {
      const { x, y } = action.payload;
      return {
        ...state,
        coordinateX: x,
        coordinateY: y
      };
    }
    case "CLEAR_FORM": {
      return {
        ...state,
        name: "",
        address: "",
        phone: "",
        category: 10,
        coordinateX: "",
        coordinateY: "",
        submit: false
      };
    }
    default: {
      return state;
    }
  }
};
export default rootReducer;
