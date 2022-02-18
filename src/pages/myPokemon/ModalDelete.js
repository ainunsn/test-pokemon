/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Modal from "components/modal/Modal";
import React from "react";

function ModalDelete({ nickname, toggle, deletePokemon }) {
  return (
    <Modal>
      <div
        css={css`
          background-color: white;
          padding: 2em;
          border-radius: 10px;
        `}
      >
        <p>Are you sure to remove {nickname} ?</p>

        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: 2em;
          `}
        >
          <button
            css={css`
              background-color: red;
              border: none;
              padding: 5px 20px;
              color: white;
              border-radius: 10px;
              &:hover {
                background-color: #ffcc01;
              }
            `}
            onClick={toggle}
          >
            Cancel
          </button>
          <button
            css={css`
              background-color: #ffcc01;
              border: none;
              padding: 5px 20px;
              color: white;
              border-radius: 10px;
              &:hover {
                background-color: red;
              }
            `}
            onClick={() => {
              deletePokemon();
              toggle();
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalDelete;
