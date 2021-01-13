export const FETCH_SOUNDS = "FETCH_SOUNDS";
export const ADD_TO_SOUNDS = "ADD_TO_SOUNDS";
export const DELETE_FROM_SOUNDS = "DELETE_FROM_SOUNDS";

export const fetchSounds = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/api/sounds");
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      if (responseData.sounds.length === 0) {
        throw new Error("No sounds found.");
      }

      dispatch({ type: FETCH_SOUNDS, SOUNDS: responseData.sounds });
    } catch (err) {
      dispatch({ type: FETCH_SOUNDS, SOUNDS: [] });
      throw err;
    }
  };
};

export const addToSounds = (sound) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/api/sounds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sound),
      });

      const resData = await response.json();
      console.log(resData);

      dispatch({ type: ADD_TO_SOUNDS, sound: resData });
    } catch (err) {
      throw err;
    }
  };
};

export const deleteFromSounds = (soundId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/sounds/${soundId}`,
        {
          method: "DELETE",
        }
      );

      const resData = await response.json();
      console.log(resData);
      dispatch({ type: DELETE_FROM_SOUNDS, soundId });
    } catch (err) {
      throw err;
    }
  };
};
