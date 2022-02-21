import React from "react";

import Pikachu from "assets/pikachu.png";

function Banner(props) {
  return (
    <>
      <div className="banner-container">
        <div className="title">Find and catch <br /> your Pokemon</div>
        <div className="image">
          <img data-testid="pikachu-image" src={Pikachu} />
        </div>
      </div>
    </>
  );
}

export default Banner;
