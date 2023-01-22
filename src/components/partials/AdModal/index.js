import { useRef, useState } from 'react';
import * as C from './styles';

import MaskedInput from 'react-text-mask';
import createdNumberMask from 'text-mask-addons/dist/createNumberMask';

export const AdModal = (choosenAd) => {
    const fileField = useRef();
    const [disabled, setDisabled] = useState(false);

    const [adTitle, setAdTitle] = useState(choosenAd.choosenAd.title);
    const [adCategory, setAdCategory] = useState(choosenAd.choosenAd.category);
    const [adPrice, setAdPrice] = useState(choosenAd.choosenAd.price);
    const [adNegotiablePrice, setNegotiablePrice] = useState(choosenAd.choosenAd.priceNegotiable);
    const [adDescription, setAdDescription] = useState(choosenAd.choosenAd.description);

    console.log(choosenAd.choosenAd.title);

    const [catlist, setCatList] = useState([]);

    const priceMask = createdNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ','
    });

    return (
        <C.Container>
            <label className='area'>
                <div className='area-title'>Título</div>
                <div className='area-input'>
                    <input
                        type='text'
                        disabled={disabled}
                        value={adTitle}
                        onChange={e => setAdTitle(e.target.value)}
                        required
                    />
                </div>
            </label>

            <label className='area'>
                <div className='area-title'>Categoria</div>
                <div className='area-input'>
                    <select
                        disabled={disabled}
                        onChange={e => setAdCategory(e.target.value)}
                        required
                    >
                        <option>{adCategory}</option>
                        {catlist && catlist.map(i =>
                            <option key={i._id} value={i._id}>{i.name}</option>
                        )}
                    </select>
                </div>
            </label>

            <label className='area'>
                <div className='area-title'>Preço</div>
                <div className='area-input'>
                    <MaskedInput
                        mask={priceMask}
                        placeholder='R$ '
                        disabled={disabled || adNegotiablePrice}
                        value={adPrice}
                        onChange={e => setAdPrice(e.target.value)}
                    />
                </div>
            </label>

            <label className='area'>
                <div className='area-title'>Preço Negociável</div>
                <div className='area-input'>
                    <input
                        type='checkbox'
                        disabled={disabled}
                        checked={adNegotiablePrice}
                        onChange={e => setNegotiablePrice(!adNegotiablePrice)}
                    />
                </div>
            </label>

            <label className='area'>
                <div className='area-title'>Descrição</div>
                <div className='area-input'>
                    <textarea
                        disabled={disabled}
                        value={adDescription}
                        onChange={e => setAdDescription(e.target.value)}
                    ></textarea>
                </div>
            </label>

            <label className='area'>
                <div className='area-title'>Imagens (1 ou mais)</div>
                <div className='area-input'>
                    <input
                        type='file'
                        disabled={disabled}
                        ref={fileField}
                        multiple
                    />
                </div>
            </label>
        </C.Container>
    );
}