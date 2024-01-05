import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

const initialState = {
  firstName: "",
  secondName: "",
  email: "",
  time: "",
  phoneNumber: 0,
  numberOfGuests: 0,
  additionalRequest: "",
};
function reserveReducer(state, action) {
  const { type } = action;
  switch (type) {
    case "Submit":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

export const StateProvider = ({ children }) => {
  const [state, dispach] = useReducer(reserveReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispach }}>
      {children}
    </StateContext.Provider>
  );
};
export default StateContext;
