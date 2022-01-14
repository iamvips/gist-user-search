import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { useSelector, useDispatch } from "react-redux";
import { getGistForUser } from "../services/gistService";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import useDebounce from "../redux/hooks/useDebounce";
import useSearch from "../redux/hooks/useSearch";
import {
  searchUserGists,
  setUserGistResults,
  searchUserGistsFailure,
  emptySearchResults,
  setPageNumber,
} from "../redux/actions/searchAction";

const Search = () => {
  /** Default Debounce Time out 700ms*/
  const DEFAULT_TIMEOUT = 700;
  const [searchQuery, setSearchQuery] = useState("");
  const isFetching = useSelector((state) => state.searchReducer.isFetching);
  const dispatch = useDispatch();

  const debouncedSearchTerm = useDebounce(searchQuery, DEFAULT_TIMEOUT);
  /**
   * Hook to get the cached results from persistent store and
   * a handler to save the results for the new searches.
   */
  const { cachedResults, saveSearch } = useSearch();

  // Here's where the API call happens
  // We use useEffect since this is an asynchronous action
  useEffect(
    () => {
      /* Get the cahched Type */
      const cachedType = cachedResults["users"];

      /* Get the cached results based on the type*/
      const cached = cachedType && cachedType[debouncedSearchTerm];

      if (cached) {
        dispatch(setUserGistResults(cached));
        dispatch(setPageNumber(0));
      } else if (debouncedSearchTerm?.length >= 3) {
        // Make sure we have a value (user has entered something in input)
        // Fire off our API call
        handleSearchUserGistsRequest();
      } else if (debouncedSearchTerm?.length === 0) {
        dispatch(emptySearchResults());
      }
    },

    // This is the useEffect input array wherein
    // Our useEffect function will only execute if this value changes
    // and thanks to our hook it will only change if the original
    // value (searchTerm) hasn't changed for more than 700ms.
    // eslint-disable-next-line
    [debouncedSearchTerm]
  );

  const handleSearchUserGistsRequest = () => {
    dispatch(searchUserGists());

    getGistForUser(debouncedSearchTerm)
      .then((res) => {
        dispatch(setUserGistResults(res.data));
        saveSearch("USERS", debouncedSearchTerm, res.data);
      })
      .catch((err) => {
        dispatch(searchUserGistsFailure(err.message));
        dispatch(emptySearchResults());
      });
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          data-testid="search-input"
          placeholder="Search Gists for the username"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {isFetching && (
          <Loader type="Puff" color="#00BFFF" height={25} width={25} />
        )}
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
