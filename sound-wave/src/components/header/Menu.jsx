import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  gap: 2em; 
  margin-right: 20em;

  @media (max-width: 768px) {
    margin-right: 0.5em;
    gap:0.8em;
  }
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1em; 
  font-weight: normal;


  &:hover {
    color: #ADADAD;
    transition: 0.3s;
  }
`;

const Menu = () => {
  return (
    <Nav>
      <Link href="/discover">Discover</Link>
      <Link href="/join">Join</Link>
    </Nav>
  );
};

export default Menu;
