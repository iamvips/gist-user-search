import { useSelector, useDispatch } from "react-redux";

/**
 * Custom hook to
 *  - fire redux actions and save the query, type and search results
 *  - access the cached results
 */
const useSearch = () => {
  const cachedResults = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();

  const saveSearch = (type, query, results) =>
    dispatch({
      type,
      query,
      results,
    });
  return { saveSearch, cachedResults };
};

export default useSearch;
