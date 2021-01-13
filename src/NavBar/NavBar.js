import React from "react";
import { Link, useLocation } from "react-router-dom";
import SoundIcon from "../Assets/icons/SoundIcon.svg";
import CartIcon from "../Assets/icons/CartIcon.svg";
import AdminIcon from "../Assets/icons/Admin.svg";

import "./NavBar.css";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <div className="nav-container">
        <ul className="nav-links">
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Natural Sounds</h2>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,

              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Link to="/sounds">
              <li>
                <div
                  className={
                    pathname.includes("sounds")
                      ? "nav-button-active"
                      : "nav-button"
                  }
                >
                  <img className="button-icon" src={SoundIcon} />
                </div>
              </li>
            </Link>
            <Link to="/cart">
              <li>
                <div
                  className={
                    pathname === "/cart" ? "nav-button-active" : "nav-button"
                  }
                >
                  <img className="button-icon" src={CartIcon} />
                </div>
              </li>
            </Link>
          </div>
          <div className="admin-icon-container">
            <Link to="/admin">
              <div className="admin-icon">
                <img src={AdminIcon} />
              </div>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
