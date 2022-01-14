import Gist from "./Gist";

const GistList = ({ gists }) => {
  return (
    <>{gists && gists.map((gist, index) => <Gist key={index} gist={gist} />)}</>
  );
};

export default GistList;
