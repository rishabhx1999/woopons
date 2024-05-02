const initialState = false;

const changeLoginBoxOpenState = (state = initialState, action) => {
  switch (action.type) {
    case "OPENLOGINBOX":
      return (state = true);
    case "CLOSELOGINBOX":
      return (state = false);
    default:
      return state;
  }
};

export default changeLoginBoxOpenState;
