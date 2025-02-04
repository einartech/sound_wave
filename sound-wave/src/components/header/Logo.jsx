import React from "react";
import styled from "styled-components";

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: 20em;
  text-decoration: none;
  color: inherit;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-size: 1.2rem;
  font-weight: normal;
  color: #fff;
`;

const Logo = () => {
  return (
    <LogoLink href="/">
      <LogoImage src="/src/assets/images/logo.png" alt="Soundwave" />
      <LogoText>Soundwave</LogoText>
    </LogoLink>
  );
};

export default Logo;
