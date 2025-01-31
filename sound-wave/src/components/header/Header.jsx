import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2022027;
  padding: 10px 20px;
  color: #fff;
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
