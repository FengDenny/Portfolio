export const setUserFirstName = (firstName) => {
  return { type: "SET_USER_FIRST_NAME", firstName };
};

export const setUserLastName = (lastName) => {
  return { type: "SET_USER_LAST_NAME", lastName };
};

export const setUserEmail = (email) => {
  return { type: "SET_USER_EMAIL", email };
};
export const setUserDescription = (description) => {
  return { type: "SET_USER_DESCRIPTION", description };
};
export const setUserSubmit = (submit) => {
  return { type: "SET_USER_SUBMIT", submit };
};
