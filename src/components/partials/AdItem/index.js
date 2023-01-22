import React from 'react';
import * as C from './styles';
import { Link } from 'react-router-dom';


export const AdItem = (props) => {
    let price = '';

    if (props.data.priceNegotiable) {
        price = 'Preço Negociável';
    } else {
        price = `R$ ${props.data.price}`;
    }

    return (
        <C.ComponentArea className='AdItem'>
            <Link to={`/ad/${props.data.id}`}>
                <div className='itemImage'>
                    <img src={props.data.image} alt='' />
                </div>
                <div className='itemName'>{props.data.title}</div>
                <div className='itemPrice'>
                    {price}
                </div>
            </Link>
        </C.ComponentArea>
    );
}