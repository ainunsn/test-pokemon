import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import reducer from "store/reducer";
import Pokemon from "../Pokemon";
import { createStore } from "redux";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
function renderWithRedux(
  component,
  { initStore, store = createStore(reducer, initStore) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}


describe("Pokemon pages", () => {
  beforeEach(() => {
    let data = jest.mock("../../../__mocks__/api");
  });
  it("should render with redux and", () => {
    renderWithRedux(
      <HashRouter>
        <Pokemon />
      </HashRouter>
    );
  });

  it("should have 0 total pokemon on first", () => {
    let { getByTestId } = renderWithRedux(
      <HashRouter>
        <Pokemon />
      </HashRouter>
    );
    expect(getByTestId("total-pokemon")).toHaveTextContent("0");
  });
});
