import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import sagas from "./sagas";
import reducer from "./reducer";


const saga = createSagaMiddleware();
const middlewares = [saga];
const store = createStore(reducer, applyMiddleware(...middlewares));
saga.run(sagas);

export default store;
