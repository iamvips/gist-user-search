import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import Search from "./Search";

function Header({ onClick }) {
  return (
    <Wrapper data-testid="header">
      <Octicon name="mark-github" mega />
      <Search data-testid="search-component" />
      <Octicon data-testid="home-icon" name="home" mega onClick={onClick} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header;
