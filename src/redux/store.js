import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers/rootReducer";

// configuration object for redux-persist
const persistConfig = {
  key: "gist-search",
  storage, // define which storage to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const store = createStore(persistedReducer);
const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };
