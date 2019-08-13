const INITIAL_DOTS_STATE = (name, address, phone, x, y) => {
  return {
    name: name || "My house",
    address: address || "Av. Libertador 3134",
    phone: phone || "549115125864",
    x: x || 42,
    y: y || -77
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
  dots: []
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
    case "DELETE_DOT": {
      const { activeDot } = action.payload;
      const activeDotIndex = state.dots.findIndex(
        dot => dot.name === activeDot.name
      );
      let newState = [];
      if (activeDotIndex === 0) {
        newState = state.dots.slice(1, state.dots.length);
      } else if (activeDotIndex === state.dots.length - 1) {
        newState = state.dots.slice(0, state.dots.length - 1);
      } else {
        const firstHalf = state.dots.slice(0, activeDotIndex);
        const secondHalf = state.dots.slice(
          activeDotIndex + 1,
          state.dots.length
        );

        newState = firstHalf.concat(secondHalf);
      }

      return {
        ...state,
        dots: newState
      };
    }
    default: {
      return state;
    }
  }
};
export default rootReducer;
