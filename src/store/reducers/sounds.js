import SOUNDS from "../../Data/dummyData";
import { ADD_TO_SOUNDS, DELETE_FROM_SOUNDS } from "../actions/sounds";

const initialState = {
  sounds: SOUNDS,
};

const soundsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SOUNDS:
      console.log("Adding sound", action.sound);
      return { ...state };
    case DELETE_FROM_SOUNDS:
      // const undeletedSounds = [...state.sounds];

      // const deleteType = undeletedSounds.find(
      //   (item) => item.type !== action.deleteSound.soundType
      // );
      // console.log("deleteType", deleteType);

      // const deletedSounds = deleteType.sounds.filter(
      //   (item) => item.id !== action.deleteSound.soundId
      // );
      // console.log("deletedSounds", deletedSounds);

      // deleteType.sounds = deletedSounds;
      // return { ...state };

      console.log("DELETING SOUND");
      return { ...state };

    default:
      return state;
  }
};

export default soundsReducer;
