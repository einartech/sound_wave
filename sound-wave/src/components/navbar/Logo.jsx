import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    gap: 0.5em;
    align-items: center;
`;

const LogoImage = styled.img`
    width: 2em;
    height: 2em;
    margin-right: 0.5em;
`;

const LogoText = styled.span`
    font-size: 1.3em;
    font-weight: normal;
    color: #fff;
`;

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage src="/sound-wave/src/assets/images/logo.png" alt="Sound Wave" />
            <LogoText>Sound Wave</LogoText>
        </LogoContainer>
    );
}

export default Logo;