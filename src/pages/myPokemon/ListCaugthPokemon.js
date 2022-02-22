/** @jsxImportSource @emotion/react */

import { imageUrl } from "constants";
import React, { useState } from "react";
import { capitalize } from "utils";
import PokemonName from "./PokemonName";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import ModalDelete from "./ModalDelete";
function ListCaugthPokemon({ myPokemon, parsedPokemon, deletePokemon }) {
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState(false);
  const [detail, setDetail] = useState({});

  const toggle = () => setIsDelete((prev) => !prev);

  return (
    <>
      {isDelete && (
        <ModalDelete
          toggle={() => setIsDelete((prev) => !prev)}
          nickname={detail?.nickname}
          deletePokemon={() => {
            deletePokemon(detail?.index + 1);
          }}
        />
      )}
      {!myPokemon || parsedPokemon?.length < 2 ? (
        <p>There's no pokemon</p>
      ) : (
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {parsedPokemon &&
            parsedPokemon.slice(1, parsedPokemon.length).map((i, key) => (
              <div
                key={key}
                css={{
                  backgroundColor: "white",
                  padding: "1.2em",
                  borderRadius: "10px",
                  margin: "1.2em",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#ebebeb",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <span
                  className="material-icons"
                  css={css`
                    color: red;
                    position: absolute;
                    right: 0;
                    top: 0;
                    font-size: 40px;
                    margin-right: -20px;
                    margin-top: -20px;
                  `}
                  onClick={() => {
                    toggle();
                    setDetail({ ...i, index: key });
                  }}
                >
                  remove_circle
                </span>

                <img
                  src={imageUrl + i.id + ".svg"}
                  width="200"
                  onClick={() => navigate(`/pokemon/${i.id}`)}
                />

                <div onClick={() => navigate(`/pokemon/${i.id}`)}>
                  <div css={{ marginTop: "1em" }}></div>
                  <PokemonName name={i.name} />
                  <p css={{ textAlign: "center" }}>as</p>
                  <PokemonName name={i.nickname} />
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default ListCaugthPokemon;
