/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

import NewestPokemonCaught from "./NewestPokemonCaught";
import { useDispatch } from "react-redux";
import ListCaugthPokemon from "./ListCaugthPokemon";
function MyPokemon(props) {
  const dispatch = useDispatch();
  const myPokemon = localStorage.getItem("myPokemon");
  const parsedPokemon = myPokemon ? JSON.parse(myPokemon) : [];
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (parsedPokemon[0]?.id) {
      dispatch({
        type: "FETCH_POKEMON_DETAIL_REQUESTED",
        id: parsedPokemon[0]?.id,
      });
    }
  }, [parsedPokemon[0]?.id, trigger]);

  const deletePokemon = (index) => {
    let currentMyPokemon = parsedPokemon;
    if (!index) {
      if (currentMyPokemon.length <= 1) {
        localStorage.removeItem("myPokemon");
      } else {
        currentMyPokemon.splice(0, 1);
        localStorage.setItem("myPokemon", JSON.stringify(currentMyPokemon));
      }
    } else {
      currentMyPokemon.splice(index, 1);
      localStorage.setItem("myPokemon", JSON.stringify(currentMyPokemon));
    }

    setTrigger((trigger) => !trigger);
  };

  return (
    <div>
      <div className="row">
        <div
          className="col-12 col-lg-4"
          css={css`
            background-color: #ffcc01;
            @media (min-width: 480px) {
              min-height: 100vh;
            }
            padding: 2em;
          `}
        >
          <NewestPokemonCaught
            myPokemon={myPokemon}
            nickname={parsedPokemon[0]?.nickname}
            id={parsedPokemon[0]?.id}
            deletePokemon={deletePokemon}
          />
        </div>
        <div className="col-12 col-lg-8" css={{ padding: "2em" }}>
          <ListCaugthPokemon
            myPokemon={myPokemon}
            parsedPokemon={parsedPokemon}
            deletePokemon={deletePokemon}
          />
        </div>
      </div>
    </div>
  );
}

export default MyPokemon;
