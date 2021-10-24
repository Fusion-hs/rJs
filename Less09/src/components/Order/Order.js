import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout'
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFucntions';

const OrderStyled = styled.section`
    display:flex;
    flex-direction:column;
    position:fixed;
    top:80px;
    left:0px;
    background:white;
    min-width:380px;
    height:calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding:20px;
`;

const OrderTiTle = styled.h2`
    text-align:center;

    margin-bottom:10px;
    
`;

const OrderContent = styled.div`
    flex-grow:1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
    display:flex;

    margin-bottom:30px;

    & span:first-child {
        flex-grow:1;
    }
`;

const TotalName = styled.span`
    flex-grow:1;

`;

const TotalPrice = styled.span`
    margin-left:20px;
    min-width:65px;
    text-align: right;
    
`;

const EmptyList = styled.p`
    text-align:center;
`;

export const Order = ({ orders }) => {

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order) => order.count + result, 0);

    return (
        <OrderStyled>
            <OrderTiTle>
                Ваш заказ
            </OrderTiTle>
            <OrderContent>
                {orders.length ?
                <OrderList>
                    {orders.map((order, id) => <OrderListItem order = {order} key = {id} />)}
                </OrderList> : 
                <EmptyList>Список заказов пуст</EmptyList>
                }
            </OrderContent>
            <Total>
                <TotalName>Итого</TotalName>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    );
}