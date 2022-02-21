/** @jsxImportSource @emotion/react */

import React from "react";
import { formatDashString } from "utils";
import { keyframes } from "@emotion/react";
import { useSelector } from "react-redux";
const diagram = (height) => keyframes`
  0%{
    height: 100px
  }
  90%{
    height: ${height}
  }`;

function PokemonStats(props) {
  const s = useSelector(({ reducer }) => reducer);
  return (
    <>
      <p css={{ fontWeight: "bold", fontSize: "30px" }}>Stats</p>
      <div
        css={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {s.detailPokemon.data?.stats &&
          s.detailPokemon.data?.stats.slice(0, 6).map((s, key) => (
            <div
              key={key}
              css={{
                marginTop: "20px",
                position: "relative",
                marginLeft: key > 0 && "50px",
              }}
              className="diagram-container"
              data-testid="diagram-stat"
            >
              <div
                className="diagram-status"
                css={{
                  backgroundColor: "#f8f8f8",
                  width: "40px",
                  height: s.base_stat > 150 ? 0 : 150 - s.base_stat,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "flex-end",
                  animation: `${diagram(
                    s.base_stat > 150 ? 0 : 150 - s.base_stat
                  )} 2s linear`,
                  marginLeft: "10px",
                }}
              >
                <span>{s.base_stat}</span>
              </div>
              <div
                className="diagram-status"
                css={{
                  backgroundColor: "#ffcc01",
                  width: "40px",
                  height: s.base_stat > 150 ? 150 : 150 + s.base_stat,
                  animation: `${diagram(
                    s.base_stat > 150 ? 0 : 150 - s.base_stat
                  )} 2s linear`,
                  marginLeft: "10px",
                }}
              ></div>
              <div
                css={{
                  textAlign: "center",
                  width: "10px",
                  writingMode: "vertical-rl",
                  position: "absolute",
                  bottom: 0,
                }}
              >
                {formatDashString(s.stat.name)}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default PokemonStats;
