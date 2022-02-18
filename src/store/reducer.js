import { combineReducers } from "redux";

function reducer(
  s = {
    pokemon: { loading: true, data: {} },
    detailPokemon: { loading: true, data: {} },
  },
  action
) {
  switch (action.type) {
    case "FETCH_POKEMON_PENDING":
      return {
        ...s,
        pokemon: { loading: true, data: {} },
      };
    case "FETCH_POKEMON_SUCCEEDED":
      return {
        ...s,
        pokemon: action.s,
      };
    case "FETCH_POKEMON_DETAIL_PENDING":
      return {
        ...s,
        detailPokemon: { loading: true, data: {} },
      };
    case "FETCH_POKEMON_DETAIL_SUCCEEDED":
      return {
        ...s,
        detailPokemon: action.s,
      };
    default:
      return s;
  }
}

export default combineReducers({
  reducer,
});
