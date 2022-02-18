import Badge from "components/badge/Badge";
import React from "react";
import { useSelector } from "react-redux";
import { capitalize } from "utils";

function PokemonTypes(props) {
  const s = useSelector(({ reducer }) => reducer);
  return (
    <div>
      <p>Types</p>
      <div css={{ display: "flex", flexWrap: "wrap" }}>
        {s.detailPokemon.data.types &&
          s.detailPokemon.data.types.map((type) => (
            <span key={type.slot}>{capitalize(type?.type?.name || "-")}</span>
          ))}
      </div>
    </div>
  );
}

export default PokemonTypes;
