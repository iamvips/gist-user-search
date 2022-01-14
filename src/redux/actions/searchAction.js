export const GET_USER_GISTS_REQUEST = "GET_USER_GISTS_REQUEST";
export const GET_USER_GISTS_SUCCESS = "GET_USER_GISTS_SUCCESS";
export const GET_USER_GISTS_FAILURE = "GET_USER_GISTS_FAILURE";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
export const EMPTY_RESULT_SET = "EMPTY_RESULT_SET";

/**
 * Action Creator:
 * Based on the list of things that can happen, we can create a list of actions that our application will use
 */
export const searchUserGists = () => ({
  type: GET_USER_GISTS_REQUEST,
});

export const setUserGistResults = (searchResults) => ({
  type: GET_USER_GISTS_SUCCESS,
  payload: searchResults,
});

export const searchUserGistsFailure = (errorMessage) => ({
  type: GET_USER_GISTS_FAILURE,
  payload: errorMessage,
});

export const setPageNumber = (selectedPage) => ({
  type: SET_PAGE_NUMBER,
  payload: selectedPage,
});

export const emptySearchResults = () => ({
  type: EMPTY_RESULT_SET,
});
