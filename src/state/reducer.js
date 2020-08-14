export const initialState = {
  user: null,
  basket: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT_USER":
      localStorage.removeItem("jwtToken");
      return {
        ...state,
        user: null,
      };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    default:
      return { ...state };
  }
}

export default reducer;
