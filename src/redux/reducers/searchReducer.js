import {
  GET_USER_GISTS_REQUEST,
  GET_USER_GISTS_SUCCESS,
  GET_USER_GISTS_FAILURE,
  EMPTY_RESULT_SET,
  SET_PAGE_NUMBER,
} from "../actions/searchAction";

/**
 * Initial state for the app
 */
const initialState = {
  users: [],
  gists: [],
  isFetching: false,
  errorMessage: "",
  isError: false,
  pageNumber: 0,
};
/**
 * The reducer function is responsible for handling all of the actions that are dispatched,
 * and calculating what the entire new state result should be every time.
 * */
const search = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "USERS":
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `users` field
        users: {
          // with all of the old users
          ...state.users,
          // and the new user object
          [action.query]: action.results,
        },
      };
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.payload };
    case GET_USER_GISTS_REQUEST:
      return { ...state, isFetching: true, isError: false, pageNumber: 0 };
    case GET_USER_GISTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        gists: action.payload,
      };
    case GET_USER_GISTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.payload,
      };
    case EMPTY_RESULT_SET:
      return { ...state, gists: [] };
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
};

export default search;
