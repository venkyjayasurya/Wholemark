import { createStore, combineReducers } from "redux";
// import persistStore from "redux-persist/es/persistStore";
import { persistStore } from "redux-persist";

import dataReducer from "./reducers/dataReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({ dataReducer });

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default { store, persistor };
