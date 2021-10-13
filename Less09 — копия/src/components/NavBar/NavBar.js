import React from 'react';
import styled from 'styled-components';

import logoImg from '../../image/logo.svg';
import logInImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
    position:fixed;
    top:0;
    left:0;
    z-index:999;
    height:80px;
    width:100vw;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display:flex;
    align-items:center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const LogIn = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
`;

const ImgLogIn = styled.img`
    width: 30px;
`;

const ButtonLogIn = styled.button`
    border:none;
    background:none;
    color:white;
    font-size:16px;
    font-family:inherit;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src = {logoImg} alt = 'Logo' />
            <H1>MrDonald's</H1>
        </Logo>
        <LogIn>
            <ImgLogIn src = {logInImg} alt = 'logIn' />
            <ButtonLogIn>войти</ButtonLogIn>
        </LogIn>
    </NavBarStyled>
);