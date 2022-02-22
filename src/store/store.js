import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { usersReducer } from "./reducers/users.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  usersReducer,
  composeEnhancers(applyMiddleware(thunk))
);
