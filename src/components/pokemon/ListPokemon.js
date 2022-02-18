import React from "react";
import Pokemon from "./Pokemon";

function ListPokemon({ pokemon }) {
  return (
    <div className="row justify-content-between">
      {pokemon.map((pok, index) => (
        <Pokemon {...pok} key={index} />
      ))}
    </div>
  );
}

export default ListPokemon;
