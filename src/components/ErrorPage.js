import styled from "styled-components";
import { BiError } from "react-icons/bi";

function ErrorPage() {
  return (
    <Container data-testid="error-component">
      <BiError size="5em" />
      <h2>Oops! Something went wrong.</h2>
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

export default ErrorPage;
