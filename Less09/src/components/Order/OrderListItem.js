import React from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFucntions';

const TrashButton = styled.button`
    width:24px;
    height:24px;
    border-color:transparent;
    background-color:transparent;
    background-image: url(${trashImage});
    background-position:center;
    background-size:cover;
    background-repeat: no-repeat;
    cursor:pointer;
`;

const OrderItemStyled = styled.li`
    position:relative;
    display:flex;
    margin:20px 0;
`;

const ItemName = styled.span`
    flex-grow:1;
`;

const ItemPrice = styled.span`
    margin-left:20px;
    margin-right:10px;
    min-width:65px;
    text-align: right;
    
`;

const OrderToppings = styled.span`
    position:absolute;
    top:20px;
    font-size:14px;
    font-family:roboto;
    color:#9a9a9a;

`

export const OrderListItem = ({ order }) => {
    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <OrderToppings>{order.toppings.filter(topping => topping.checked).map(topping => topping.name).join (', ').toLowerCase()}</OrderToppings>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton />
        </OrderItemStyled>
    );
}