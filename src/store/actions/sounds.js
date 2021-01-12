export const ADD_TO_SOUNDS = "ADD_TO_SOUNDS";
export const DELETE_FROM_SOUNDS = "DELETE_FROM_SOUNDS";

export const addToSounds = (sound) => {
  return { type: ADD_TO_SOUNDS, sound };
};

export const deleteFromSounds = (soundType, soundId) => {
  return { type: DELETE_FROM_SOUNDS, deleteSound: { soundType, soundId } };
};
