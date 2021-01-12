import React from "react";

import "../SoundsPage.css";

const ListBox = (props) => {
  return (
    <div
      style={{
        flexDirection: "row",
        marginTop: "2%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <div className="listBox">
        <ul className="list">
          {props.SOUNDS.map((item) => {
            let soundList;
            if ("/sounds/" + item.type === props.pathname) {
              soundList = item.sounds.map((sound) => (
                <li
                  key={sound.id}
                  className={
                    props.currentSound && sound.name === props.currentSound.name
                      ? "listItem-active"
                      : "listItem"
                  }
                  onClick={() => props.playSound(sound)}
                >
                  <h5>{sound.name}</h5>
                </li>
              ));
            }
            return soundList;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListBox;
