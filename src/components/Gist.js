import styled from "styled-components";
import { BiGitRepoForked, BiComment, BiStar, BiCode } from "react-icons/bi";
import FileList from "./FileList";
import { formatDate } from "../utilities/dateFormatter";

const Gist = ({ gist }) => {
  return (
    <Container data-testid="gist-results">
      <List>
        <ListItem>
          <StyledContainer>
            <UserContainer>
              <Logo src={gist.owner.avatar_url} />
              <Link href={gist.owner.html_url} target="_blank">
                <b>{gist.owner.login}</b>
              </Link>
            </UserContainer>
            <ActionContainer>
              <Link href={gist.html_url} target="_blank">
                <BiCode size="1.2em" />
              </Link>
              <ActionItem>{Object.keys(gist.files).length} Files</ActionItem>
              <Link href={gist.forks_url} target="_blank">
                <BiGitRepoForked size="1em" />
              </Link>
              <ActionItem>Forks</ActionItem>
              <Link href={gist.comments_url} target="_blank">
                <BiComment size="1em" />
              </Link>
              <ActionItem>Comments</ActionItem>
              <Link href={gist.owner.starred_url} target="_blank">
                <BiStar size="1em" />
              </Link>
              <ActionItem>Stars</ActionItem>
            </ActionContainer>
          </StyledContainer>
          <StyledContainer>
            <ActionItem>Created at: {formatDate(gist.created_at)}</ActionItem>
            <ActionItem>Last updated: {formatDate(gist.updated_at)}</ActionItem>
          </StyledContainer>
          <StyledContainer>
            <ActionItem>
              <h4>{gist.description}</h4>
            </ActionItem>
            <ActionItem></ActionItem>
          </StyledContainer>
          <StyledContainer>
            <FileList
              fileKeys={Object.keys(gist.files)}
              files={Object.values(gist.files)}
            />
          </StyledContainer>
        </ListItem>
      </List>
    </Container>
  );
};

export const fontFamily = "'Segoe UI', 'Helvetica Neue',sansserif";

const Container = styled.div`
  width: 70%;
  margin: 30px auto;
  font-family: Segoe UI, Helvetica Neue, sansserif;
  font-size: 15px;
  color: #565555;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const UserContainer = styled.div`
  flex: 1;
  display: flex;
`;

const ActionContainer = styled.div`
  flex: 1;
  display: flex;
  margin-left: 200px;
`;

const ActionItem = styled.span`
  margin-left: 5px;
`;

const Link = styled.a`
  margin-left: 5px;
  margin-top: 3px;
  color: #1672da;
  text-decoration: none;
`;

const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 1px solid #1672da;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  border-radius: 0 0.5rem 0.5rem 0.5rem;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid #e0dddd;
  :first-of-type {
    border-top: none;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  padding: 0px 10px;
`;

const Logo = styled.img`
  border-radius: 50% !important;
  height: 40px;
  width: 40px;
`;

export default Gist;
