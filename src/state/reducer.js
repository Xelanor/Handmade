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
    case "SET_BASKET":
      return {
        ...state,
        basket: [...state.basket, ...action.basket],
      };
    case "ADD_TO_BASKET":
      let storage = JSON.parse(localStorage.getItem("cart"));
      if (storage) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...storage, action.item.id])
        );
      } else {
        localStorage.setItem("cart", JSON.stringify([action.item.id]));
      }

      return { ...state, basket: [...state.basket, action.item.id] };

    default:
      return { ...state };
  }
}

export default reducer;
