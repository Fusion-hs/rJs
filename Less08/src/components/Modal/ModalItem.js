import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems, formatCurrency} from '../Functions/secondaryFucntions';

const Overlay = styled.div`
    position:fixed;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0, 0.5);
    z-index:20;

`;
const Modal = styled.div`
    background-color:#fff;
    width:600px;
    height:600px;

`;
const Banner = styled.div`
    height:200px;
    width:100%;
    background-image:url(${ ({ img }) => img });
    background-color:black;
    background-size:cover;
    background-position:center;
    margin-bottom:20px;
`;

const ModalTextContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 37px;
`;
const ItemName = styled.h2`
    font-size:30px;
    line-height:52.68px;
`;
const ItemPrice = styled.h2`
    font-size:30px;
    line-height:52.68px;
`;

const ModalButtonContainer = styled.div`
    width:100%;
    height:calc(100% - 260px);
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
`;

const TotalPriceItem = styled.div`
    width:87%;
    display:flex;
    justify-content:space-between;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

    const counter = useCount();

    const closeModal = (e) => {
        if (e.target.id === "overlay") {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count : counter.count
    };
    delete order.img;

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    return (    
        <Overlay id = "overlay" onClick = {closeModal}>
            <Modal>
                <Banner img = {openItem.img}/>
                <ModalTextContainer>
                    <ItemName>
                        {openItem.name}
                    </ItemName>
                    <ItemPrice>
                        {formatCurrency(openItem.price) }
                    </ItemPrice>
                </ModalTextContainer>
                <ModalButtonContainer>
                    <CountItem {...counter} />
                    <TotalPriceItem>
                        <span>Price:</span>
                        <span>{formatCurrency(totalPriceItems(order)) }</span>
                    </TotalPriceItem>
                    <ButtonCheckout onClick = {addToOrder}>
                        Добавить
                    </ButtonCheckout>
                </ModalButtonContainer>
            </Modal>
        </Overlay>
    )
};