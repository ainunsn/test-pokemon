/** @jsxImportSource @emotion/react */

import React from "react";
import { capitalize } from "utils";

function PokemonName({ name }) {
  return (
    <p
      css={{
        textAlign: "center",
        color: "#0e61a7",
        fontWeight: "bold",
      }}
      data-testid="pokemon-name"
    >
      {capitalize(name)}
    </p>
  );
}

export default PokemonName;
