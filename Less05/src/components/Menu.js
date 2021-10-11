import React from 'react';
import styled from 'styled-components';

import dbMenu from './DBMenu';
import { ListItem } from './ListItem';

import BannerImg from '../image/banner.png';

const MenuStyled = styled.main`
    width:1060px;
    margin-top: 80px;
    margin-left: 380px;
    background-color: #ccc;
`;

const SectionMenu = styled.section`
    padding:30px;
`;

const H2 = styled.h2`
    margin-left:40px;
`
const BannerDiv = styled.div`
    background-image:url(${BannerImg});
    height:208px;
`;
export const Menu = (props) => (
    <MenuStyled>
        <BannerDiv />
        <SectionMenu>
            <H2>Бургеры</H2>
            <ListItem itemList={dbMenu.burger} setOpenItem = {props.setOpenItem} />
        </SectionMenu>
        <SectionMenu>
            <H2>Закуски / Напитки</H2>
            <ListItem itemList={dbMenu.other} setOpenItem = {props.setOpenItem} />
        </SectionMenu>
    </MenuStyled>
);