import React from 'react';
import styled from 'styled-components';
import { ToppingWrap, ToppingLabel } from './checkElements';

const ToppingCheckbox = styled.input`
    cursor:pointer;
    margin-tight: 5px;
`;


export function Toppings({ toppings, checkToppings }) {
    return (
    <>
        <h3> Добавки </h3>
        <ToppingWrap>
            {toppings.map((item, i) => (
                <ToppingLabel key = {i}>
                    <ToppingCheckbox type = 'checkbox' checked = {item.checked} onChange = {()=>checkToppings(i)} />
                    {item.name}
                </ToppingLabel>
            ))}
        </ToppingWrap>
    </>
    );
}