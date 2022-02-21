/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";

// helper
import { capitalize, getHalfChances, getMoves } from "utils";
import { imageUrl } from "constants";

// components
import PokemonForms from "./components/PokemonForms";
import PokemonAbility from "./components/PokemonAbility";
import ListPokemonDetail from "./ListPokemonDetail";
import PokemonStats from "./components/PokemonStats";
import PokemonTypes from "components/pokemon/PokemonTypes";
import PokemonMovew from "components/pokemon/PokemonMoves";
import LoadingPage from "components/loading/LoadingPage";

// image
import PokemonBg from "assets/pokemon_bg.png";

function DetailPokemon(props) {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const s = useSelector(({ reducer }) => reducer);
  const [nickname, setNickname] = useState("");

  const [isSuccess, setIsSuccess] = useState(null);
  const [caughtMessage, setCaughtMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch({ type: "FETCH_POKEMON_DETAIL_REQUESTED", id: params.id });
  }, [params.id]);

  const catchPokemon = () => {
    setLoading(true);
    if (!nickname) {
      setIsSuccess(false);
      setCaughtMessage("Please enter a valid nickname");
      setLoading(false);

      return;
    }

    let isPossible = getHalfChances();

    if (isPossible) {
      // check if my pokemon exist
      let checkLocal = localStorage.getItem("myPokemon");
      if (!checkLocal) {
        let newPokemon = [
          { nickname, id: params.id, name: s.detailPokemon.data.name },
        ];
        localStorage.setItem("myPokemon", JSON.stringify(newPokemon));
        setIsSuccess(true);
        setCaughtMessage("Congratulation, you caugth the pokemon!");
        setNickname("");
        setLoading(false);

        setTimeout(() => {
          navigate("/my-pokemon");
        }, 600);
      } else {
        // check if nickname of pokemon exist
        let myPokemonArray = JSON.parse(checkLocal);

        let isNicknameExist = myPokemonArray.findIndex(
          (pokemon) => pokemon.nickname == nickname
        );

        if (isNicknameExist == -1) {
          myPokemonArray.unshift({
            nickname,
            id: params.id,
            name: s.detailPokemon.data.name,
          });
          localStorage.setItem("myPokemon", JSON.stringify(myPokemonArray));
          setIsSuccess(true);
          setCaughtMessage("Congratulation, you caugth the pokemon!");
          setNickname("");
          setLoading(false);

          setTimeout(() => {
            navigate("/my-pokemon");
          }, 600);
        } else {
          setIsSuccess(false);
          setCaughtMessage("Please try another nickname");
          setLoading(false);
        }
      }
    } else {
      setIsSuccess(false);
      setCaughtMessage("Sorry, the pokemon has been run");
      setLoading(false);
    }
  };

  if (s.detailPokemon.loading || loading) {
    return <LoadingPage />
  }

  return (
    <>
      <div className="pokemon-detail-main">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="pokemon-image-container">
              <div className="pokemon-image-bg">
                <img src={PokemonBg} />
              </div>
              <div className="pokemon-image">
                <img src={imageUrl + params.id + ".svg"} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="detail-pokemon">
              <PokemonTypes />

              <div className="mt-3">
                <PokemonMovew />
              </div>

              <div className="my-3 game-catch">
                <p
                  css={{
                    color: isSuccess ? "green" : "red",
                  }}
                  data-testid={`catch-message-${isSuccess}`}
                >
                  {caughtMessage && isSuccess != null && caughtMessage}
                </p>
                <p className="game-title">Ready to play a game?</p>
                <input
                  placeholder="Pokemon's Nickname"
                  css={{
                    border: "none",
                    marginTop: "1.2em",
                    padding: "1em",
                    borderRadius: "10px",
                  }}
                  name="nickname"
                  value={nickname}
                  onChange={({ target }) => setNickname(target.value)}
                />
                <div>
                  <button
                    css={{
                      backgroundColor: "red",
                      borderRadius: "10px",
                      padding: "10px 30px",
                      color: "white",
                      border: "none",
                      "&:hover": {
                        backgroundColor: "rgba(255, 0, 0, 0.428);",
                      },
                      marginTop: "1.2em",
                    }}
                    onClick={catchPokemon}
                  >
                    Catch {capitalize(s.detailPokemon?.data?.name || "")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6 mt-lg-0">
          <div
            className="diagram-card-container"
            css={{ padding: "2em 0 2em 2em" }}
          >
            <div
              css={{
                backgroundColor: "white",
                padding: "1.2em",
                borderRadius: "10px",
              }}
            >
              <PokemonStats />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 mt-lg-0">
          <div
            className="forms-card-container"
            css={{ padding: "2em 2em 2em 0" }}
          >
            <div
              css={{
                backgroundColor: "#ffcc01",
                padding: "1.2em",
                borderRadius: "10px",
              }}
            >
              <div className="row">
                <div className="col-12 col-lg-6">
                  <ListPokemonDetail
                    data={s.detailPokemon.data?.forms}
                    title="Forms"
                    Component={PokemonForms}
                  />
                  <ListPokemonDetail
                    data={s.detailPokemon.data?.abilities}
                    title="Abilities"
                    Component={PokemonAbility}
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <div>
                    <p css={{ color: "white", fontWeight: "bold" }}>Weight</p>
                    <p css={{ color: "#0e61a7" }}>
                      {s.detailPokemon.data.weight / 10 || "-"} kg
                    </p>
                  </div>
                  <div>
                    <p css={{ color: "white", fontWeight: "bold" }}>Height</p>
                    <p css={{ color: "#0e61a7" }}>
                      {s.detailPokemon.data.height / 10 || "-"} m
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div css={{ padding: "0 2em 4em 2em" }}>
        <div
          css={{
            backgroundColor: "white",
            padding: "1.2em",
            borderRadius: "10px",
          }}
        >
          <p css={{ fontWeight: "bold", fontSize: "30px" }}>Moves</p>
          <div>{getMoves(s.detailPokemon.data.moves)}.</div>
        </div>
      </div>
    </>
  );
}

export default DetailPokemon;
