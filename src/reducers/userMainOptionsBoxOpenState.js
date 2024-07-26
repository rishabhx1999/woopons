const initialState = false;

const toggleUserMainOptionsBoxOpenState = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLEUSERMAINOPTIONSBOX":
      if (state == true) return (state = false);
      else return (state = true);
    default:
      return state;
  }
};

export default toggleUserMainOptionsBoxOpenState;
