import styled from "styled-components";

function Footer() {
  return (
    <Wrapper data-testid="app-footer">
      <p>
        Proudly developed by
        <Contact
          href="mailto:vipul.chawda@outlook.com"
          title="You can reach out to me at vipul.chawda@outlook.com"
        >
          <span>Vipul Chawda</span>
        </Contact>
      </p>
      © 2021 All rights reserved.
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px 40px;
  font-size: 12px;
  text-align: center;
  border-top: 1px solid #eee;
  color: #626465;
  color: var(--light-color);
`;

const Contact = styled.a`
  margin-left: 1px;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  color: black;
`;

export default Footer;
