import React from "react";
import { Link } from "react-router-dom";

const MusicTypes = (props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "450px",
        height: "50px",
        marginTop: "5%",
        justifyContent: "space-between",
      }}
    >
      {props.soundType.map((item) => (
        <Link key={item.tag} to={"/sounds/" + item.tag}>
          <div
            className={
              props.pathname === "/sounds/" + item.tag
                ? "soundIcon-active"
                : "soundIcon"
            }
          >
            <img src={item.source} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MusicTypes;
