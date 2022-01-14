import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import { getPublicGists } from "./services/gistService";
import GistList from "./components/GistList";
import NoResults from "./components/NoResults";
import Footer from "./components/Footer";
import {
  searchUserGists,
  setUserGistResults,
  searchUserGistsFailure,
  setPageNumber,
} from "./redux/actions/searchAction";
import ErrorPage from "./components/ErrorPage";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const { gists, pageNumber, isError } = useSelector(
    (state) => state.searchReducer
  );
  const dispatch = useDispatch();

  const gistsPerPage = 8;
  const pagesVisited = pageNumber * gistsPerPage;
  const pageCount = Math.ceil(gists.length / gistsPerPage);
  const changePage = ({ selected }) => {
    dispatch(setPageNumber(selected));
  };

  const paginatedResults = gists.slice(
    pagesVisited,
    pagesVisited + gistsPerPage
  );

  /**
   * Displays all public gists on initial load
   */
  useEffect(() => {
    fetchAllPublicGists();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAllPublicGists = () => {
    dispatch(searchUserGists());
    getPublicGists()
      .then((res) => {
        dispatch(setUserGistResults(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(searchUserGistsFailure(err.message));
      });
  };

  return (
    <Wrapper className="App" data-testid="app">
      <Header onClick={fetchAllPublicGists} />
      <GlobalStyles />
      <ErrorBoundary>
        {paginatedResults.length < 1 && !isError && <NoResults />}

        {isError && <ErrorPage />}

        {paginatedResults && <GistList gists={paginatedResults} />}

        {paginatedResults && paginatedResults.length > 0 && (
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            forcePage={pageNumber}
          />
        )}
      </ErrorBoundary>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
