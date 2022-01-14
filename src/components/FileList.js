import styled from "styled-components";
import { BiFile } from "react-icons/bi";

function FileList({ fileKeys, files }) {
  return (
    <List data-testid="file-actions-list">
      {fileKeys.map((file, index) => {
        return (
          <ListItem key={index}>
            <Link href={files[index].raw_url} target="_blank">
              <BiFile /> <i>{files[index].filename}</i>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}

const List = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

const ListItem = styled.li``;

const Link = styled.a`
  color: goldenrod;
  margin-left: 5px;
  text-decoration: none;
`;

export default FileList;
