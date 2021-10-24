import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width:87%;
`;

const CountInput = styled.input`
    width:50px;
    font-size: 20px;
    text-align:center;
`;

const ButtonCount = styled.button`
    background-color:transparent;
    width:24px;
    padding: 0 5px;
`;

export function CountItem({count, setCount, onChange}) {

    return (
        <CountWrapper>
            <span>Колличество</span>
            <span> 
                <ButtonCount disabled = {count <= 1} onClick = {() => setCount(count - 1)}>-</ButtonCount>
                <CountInput type = 'number' min = '1' max = '99' value = {(count < 1) ? 1 : (count>99) ? 99 : count} onChange = {onChange} />
                <ButtonCount disabled = {count >= 99} onClick = {() => setCount(count + 1)}>+</ButtonCount>
            </span>
        </CountWrapper>
    )
};