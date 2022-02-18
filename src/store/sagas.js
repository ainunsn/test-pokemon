import api from "api/api";
import { put, takeEvery } from "redux-saga/effects";
function* fetchPokemon(param) {
  yield put({
    type: "FETCH_POKEMON_PENDING",
  });
  try {
    const pokemon = yield api.get(`/pokemon?limit=8&offset=${param.offset}`);
    yield put({
      type: "FETCH_POKEMON_SUCCEEDED",
      s: { loading: false, data: pokemon.data },
    });
  } catch (error) {
    yield put({
      type: "FETCH_POKEMON_FAILED",
      s: { loading: false, data: {}, error: "Please try again later!" },
    });
  }
}

function* fetchDetailPokemon(param) {
  yield put({
    type: "FETCH_POKEMON_DETAIL_PENDING",
  });
  try {
    const pokemon = yield api.get(`/pokemon/${param.id}`);
    yield put({
      type: "FETCH_POKEMON_DETAIL_SUCCEEDED",
      s: { loading: false, data: pokemon.data },
    });
  } catch (error) {
    yield put({
      type: "FETCH_POKEMON_DETAIL_FAILED",
      s: { loading: false, data: {}, error: "Please try again later!" },
    });
  }
}

function* sagas() {
  yield takeEvery("FETCH_POKEMON_REQUESTED", fetchPokemon);
  yield takeEvery("FETCH_POKEMON_DETAIL_REQUESTED", fetchDetailPokemon);
}

export default sagas;
