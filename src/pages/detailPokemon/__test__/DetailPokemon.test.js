import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import reducer from "store/reducer";
import DetailPokemon from "../DetailPokemon";

function renderWithRedux(
  component,
  { initStore, store = createStore(reducer, initStore) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

describe("DetailPokemon", () => {
  describe("render page", () => {
    it("should render page correcty", () => {
      const wrapper = renderWithRedux(
        <HashRouter>
          <DetailPokemon />
        </HashRouter>
      );
    });

    it("should have input element and button element", () => {
      const wrapper = renderWithRedux(
        <HashRouter>
          <DetailPokemon />
        </HashRouter>
      );

      expect(
        wrapper.getByPlaceholderText(/pokemon's nickname/i)
      ).toBeInTheDocument();

      expect(wrapper.getByRole("button")).toBeInTheDocument();
    });

    it("input value should be change if user type on it and get message after click catch button", () => {
      renderWithRedux(
        <HashRouter>
          <DetailPokemon />
        </HashRouter>
      );
      const catchMessage = screen.getByTestId(/catch-message-null/i);
      expect(catchMessage).toBeInTheDocument();

      const inputElement = screen.getByPlaceholderText(/pokemon's nickname/i);
      const buttonElement = screen.getByRole("button");
      fireEvent.change(inputElement, {
        target: { value: "this is pokemon nickname" },
      });
      expect(
        screen.getByDisplayValue("this is pokemon nickname")
      ).toBeInTheDocument();

      fireEvent.click(buttonElement);
      expect(screen.getByTestId(/catch-message-(true|false)/i));
    });
  });
});
