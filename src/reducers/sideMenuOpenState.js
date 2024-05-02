const initialState = false;

const changeSideMenuOpenState = (state = initialState, action) => {
  switch (action.type) {
    case "OPENSIDEMEU":
      return (state = true);
    case "CLOSESIDEMEU":
      return (state = false);
    case "TOGGLESIDEMENU":
      return (state = !state);
    default:
      return state;
  }
};

export default changeSideMenuOpenState;
