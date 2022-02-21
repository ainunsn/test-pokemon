import { cleanup, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "store/reducer";
import PokemonStats from "../PokemonStats";

function renderWithRedux(
  component,
  { initStore, store = createStore(reducer, initStore) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

afterEach(cleanup);

describe("PokemonStats", () => {
  it("should render component correctly", async () => {
    let { findByTestId, getByTestId } = renderWithRedux(<PokemonStats />);
    // const divElements = await waitFor(() => getByTestId("diagram-stat"));

    // expect(divElements.length).toBe(5);
  });
});
