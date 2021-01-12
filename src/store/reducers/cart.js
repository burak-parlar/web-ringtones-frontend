import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cart";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedCart = [...state.cart];
      if (!addedCart.includes(action.sound)) {
        addedCart.push(action.sound);
        return { ...state, cart: addedCart };
      } else {
        return { ...state };
      }
    case DELETE_FROM_CART:
      const undeletedCart = [...state.cart];
      const deletedCart = undeletedCart.filter(
        (item) => item.id !== action.soundId
      );

      return { ...state, cart: deletedCart };
    default:
      return state;
  }
};

export default cartReducer;
