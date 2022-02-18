/** @jsxImportSource @emotion/react */

import Badge from "components/badge/Badge";

function PokemonAbility(props) {
  return (
    <div>
      <div css={{ padding: "3px", marginTop: "3px" }}>
        <Badge value={props.ability.name} />
      </div>
    </div>
  );
}

export default PokemonAbility;
