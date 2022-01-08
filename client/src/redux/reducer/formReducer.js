const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  description: "",
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_FIRST_NAME":
      return { ...state, firstName: action.firstName };
    case "SET_USER_LAST_NAME":
      return { ...state, lastName: action.lastName };
    case "SET_USER_EMAIL":
      return { ...state, email: action.email };
    case "SET_USER_DESCRIPTION":
      return { ...state, description: action.description };
    default:
      return state;
  }
};

export default formReducer;
