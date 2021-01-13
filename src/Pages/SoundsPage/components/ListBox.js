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
          {props.error ? (
            <h4>An error occured.</h4>
          ) : props.loading ? (
            <h4>Loading...</h4>
          ) : props.sounds.length === 0 ? (
            <h4>No sounds found</h4>
          ) : (
            props.sounds.map((item) => {
              if ("/sounds/" + item.type === props.pathname) {
                return (
                  <li
                    key={item.id}
                    className={
                      props.currentSound &&
                      item.name === props.currentSound.name
                        ? "listItem-active"
                        : "listItem"
                    }
                    onClick={() => props.playSound(item)}
                  >
                    <h5>{item.name}</h5>
                  </li>
                );
              }
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default ListBox;
