import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width:250px;
    height:65px;
    margin-top:20px;

    background-color:#299B01;
    border:none;


    font-size:21px;
    color:white;
`;
export const ModalButton = () => {
    return (    
        <>
            <Button>
                Добавить
            </Button>
        </>
    )
};