export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export const addToCart = (sound) => {
  return { type: ADD_TO_CART, sound };
};

export const deleteFromCart = (soundId) => {
  return { type: DELETE_FROM_CART, soundId };
};
