import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root.reducer";

// TODO: write logic so that loggger is added in array only for development environment
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));