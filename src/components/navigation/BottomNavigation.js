import React from "react";
import { Link, useLocation } from "react-router-dom";
import paths from "./navigationPath";

function BottomNavigation() {
  const location = useLocation();
  return (
    <div className="bottom-navigation">
      {paths.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={location.pathname == item.path && "active"}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default BottomNavigation;
