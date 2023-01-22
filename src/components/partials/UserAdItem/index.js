import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

export const UserAdItem = (props) => {
    const [showModal, setShowModal] = useState(true);

    let url = '';
    if (props.data.images.length > 0) {
        url = `http://alunos.b7web.com.br:501/media/${props.data.images[0].url}`;
    }

    let price = '';
    if (props.data.priceNegotiable) {
        price = 'Preço Negociável';
    } else {
        price = `R$ ${props.data.price}`;
    }

    return (
        <C.ComponentArea>
            <div className='itemImage'>
                <img src={url} alt='' />
            </div>
            <div className='ItemBottom'>
                <div className='itemInfos'>
                    <div className='itemName'>{props.data.title}</div>
                    <div className='itemPrice'>{price}</div>
                </div>
                <Link to={`/edit-ad/${props.data.id}`}>
                    <button>Editar</button>
                </Link>
            </div>
        </C.ComponentArea>
    );
}