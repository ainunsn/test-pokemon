import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import routes from "./routes";

function RoutesConfig(props) {
  return (
    <Routes>
      {routes.map((r) => (
        <Route key={r.path} {...r} component={() => <p>hahaah</p>} />
      ))}
    </Routes>
  );
}

export default RoutesConfig;
