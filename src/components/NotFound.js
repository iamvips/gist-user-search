import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

function NotFound() {
  return (
    <Container>
      <BsSearch size="2.5em" />
      <h2>We couldn’t find any matching gists.</h2>
    </Container>
  );
}

const Container = styled.div`
  width: 700px;
  margin: 30px auto;
  font-family: Segoe UI, Helvetica Neue, sansserif;
  font-size: 15px;
  color: #565555;
  text-align: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export default NotFound;
