/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// component
import PokemonMoves from "components/pokemon/PokemonMoves";
import PokemonTypes from "components/pokemon/PokemonTypes";

// helper
import { imageUrl } from "constants";
import { capitalize } from "utils";
import ModalDelete from "./ModalDelete";

function NewestPokemonCaught({ myPokemon, id, nickname, deletePokemon }) {
  const s = useSelector(({ reducer }) => reducer);
  const [isDelete, setIsDelete] = useState(false);

  const toggle = () => setIsDelete((prev) => !prev);

  return (
    <>
      {isDelete && (
        <ModalDelete
          toggle={toggle}
          nickname={nickname}
          deletePokemon={deletePokemon}
        />
      )}

      <p css={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
        Newest Pokemon caught
      </p>
      {!myPokemon ? (
        <>
          <p>You have not catch any pokemon yet :(</p>
          <p>
            Please checkout pokemon{" "}
            <Link css={{ textDecoration: "none", color: "red" }} to="/">
              here
            </Link>
          </p>
        </>
      ) : (
        <>
          <div css={{ marginTop: "2em" }}>
            <div
              css={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                css={{
                  padding: "2em",
                  border: "2px solid red",
                  borderRadius: 50,
                }}
              >
                <div
                  css={{
                    padding: "2em",
                    border: "2px solid white",
                    borderRadius: 50,
                  }}
                >
                  <img src={imageUrl + id + ".svg"} width="200" />
                  <p
                    css={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {capitalize(s?.detailPokemon?.data?.name || "-")}
                  </p>
                  <p
                    css={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    as
                  </p>
                  <p
                    css={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  >
                    {capitalize(nickname || "-")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-pokemon">
            <PokemonTypes />

            <div css={{ marginTop: "1.2em" }}>
              <PokemonMoves />
            </div>
            <div
              css={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2em",
              }}
            >
              <button
                css={{
                  backgroundColor: "red",
                  border: "none",
                  color: "white",
                  textAlign: "center",
                  padding: "1em 2em",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#0e61a7",
                  },
                }}
                onClick={toggle}
              >
                Remove Pokemon
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NewestPokemonCaught;
