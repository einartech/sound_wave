import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20em;
  
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
    <LogoContainer>
      <LogoImage src="/src/assets/images/logo.png" alt="Soundwave" />
      <LogoText>Soundwave</LogoText>
    </LogoContainer>
  );
};

export default Logo;
