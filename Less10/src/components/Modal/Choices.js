import React from 'react';
import styled from 'styled-components';
import { ToppingWrap, ToppingLabel } from './checkElements';

const ToppingCheckbox = styled.input`
    cursor:pointer;
    margin-tight: 5px;
`;


export function Choices({ openItem, choice, changeChoices }) {
    return (
    <>
        <h3> Выберите </h3>
        <ToppingWrap>
            {openItem.choices.map((item, i) => (
                <ToppingLabel key = {i}>
                    <ToppingCheckbox 
                        type = 'radio' 
                        name = 'choices' 
                        checked = {choice === item} 
                        value = {item}
                        onChange = {changeChoices} 
                        />
                    {item}
                </ToppingLabel>
            ))}
        </ToppingWrap>
    </>
    );
}