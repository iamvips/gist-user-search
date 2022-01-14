import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
/*
 * The combineReducers helper function turns an object whose values are different
 * reducing functions into a single reducing function you can pass to createStore.
 *
 * This is helpful when your app grows more complex, you'll want to split your reducing function
 * into separate functions, each managing independent parts of the state
 */
const rootReducer = combineReducers({
  searchReducer,
});

export default rootReducer;
