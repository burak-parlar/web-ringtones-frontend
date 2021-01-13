import {
  ADD_TO_SOUNDS,
  DELETE_FROM_SOUNDS,
  FETCH_SOUNDS,
} from "../actions/sounds";

const initialState = {
  sounds: [],
};

const soundsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SOUNDS:
      return { ...state, sounds: action.SOUNDS };
    case ADD_TO_SOUNDS:
      return { ...state };
    case DELETE_FROM_SOUNDS:
      return { ...state };

    default:
      return state;
  }
};

export default soundsReducer;
