import Badge from "components/badge/Badge";
import React from "react";
import { useSelector } from "react-redux";
import { capitalize } from "utils";

function PokemonMoves(props) {
  const s = useSelector(({ reducer }) => reducer);
  return (
    <>
      <p className="title">Top 10 Moves</p>
      <div className="list-of-detail">
        {s.detailPokemon.data.moves &&
          s.detailPokemon.data.moves
            .slice(0, 10)
            .map((move, key) => (
              <span key={key}>{capitalize(move.move.name)}</span>
            ))}
      </div>
    </>
  );
}

export default PokemonMoves;
