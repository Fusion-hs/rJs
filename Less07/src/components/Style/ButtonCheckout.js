import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display:block;

    width:250px;
    height:65px;
    margin:0 auto;

    background-color:#299B01;
    border-color:transparent;
    transition-property: color, background-color, border-color;
    transition-duration:.3s;    
    
    cursor:pointer;

    font-size:21px;
    color:white;

    &:hover {
        background-color:#fff;
        color:#299b01;
        border-color:#299b01;
    }
`;