/** @jsxImportSource @emotion/react */

import Badge from "components/badge/Badge";

function PokemonForms(props) {
  return (
    <div>
      <div css={{ padding: "3px", marginTop: "3px" }}>
        <Badge value={props.name} />
      </div>
    </div>
  );
}

export default PokemonForms;
