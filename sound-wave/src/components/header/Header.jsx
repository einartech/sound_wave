import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
  padding: 10px 20px;
  color: #fff;

  @media (max-width: 768px) {
    margin-top: 1em;
    margn-left: -1em;
  }
`;

const Navbar = () => {
  return (
    <Header>
      <Logo />
      <Menu />
    </Header>
  );
};

export default Navbar;
