import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1em 2em;
    background-color: #202027;
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