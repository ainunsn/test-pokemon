import React from "react";
import { Link, useLocation } from "react-router-dom";
import paths from "./navigationPath";

import Logo from "assets/logo.png";

function TopNavigation(props) {
  const location = useLocation();

  return (
    <div className="top-navigation-container">
      <div className="top-navigation">
        <Link to={"/"}>
          <img src={Logo} width="200" />
        </Link>
        {paths.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname == item.path && "active"}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNavigation;
