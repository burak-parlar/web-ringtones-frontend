import React from "react";

import PlayIcon from "../../../Assets/icons/PlayIcon.svg";
import PauseIcon from "../../../Assets/icons/PauseIcon.svg";
import PrevIcon from "../../../Assets/icons/PrevIcon.svg";
import NextIcon from "../../../Assets/icons/NextIcon.svg";
import AddCart from "../../../Assets/icons/AddToCart.svg";

import "../SoundsPage.css";

const MusicPlayer = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        width: "552px",

        alignItems: "center",
      }}
    >
      <div className="music-button-container"></div>
      <div className="music-button-container">
        <div className="music-button" onClick={props.prevSound}>
          <img className="music-button-icon" src={PrevIcon} />
        </div>
      </div>
      <div className="music-button-container">
        <div className="music-button" onClick={props.toggleSound}>
          <img
            className="music-button-icon"
            src={props.isPaused ? PlayIcon : PauseIcon}
          />
        </div>
      </div>
      <div className="music-button-container">
        <div className="music-button" onClick={props.nextSound}>
          <img className="music-button-icon" src={NextIcon} />
        </div>
      </div>
      <div className="addCartIcon-container">
        <div className="addCartIcon" onClick={props.AddToCart}>
          <img src={AddCart} />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
