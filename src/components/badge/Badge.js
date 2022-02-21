/** @jsxImportSource @emotion/react */

import React from "react";
import { capitalize } from "utils";

function Badge({ value }) {
  return (
    <p
      data-testid="custom-badge"
      css={{
        textAlign: "center",
        backgroundColor: "#0e61a7",
        borderRadius: "50px",
        color: "white",
        padding: "0.2em 1.2em",
      }}
      className="bagde"
    >
      {value && capitalize(value)}
    </p>
  );
}

export default Badge;
