import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import createdNumberMask from 'text-mask-addons/dist/createNumberMask';
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainConponents';
import olxAPI from '../../helpers/olxAPI';
import * as C from './styles';

export const EditAd = () => {
    const api = olxAPI();
    const fileField = useRef();
    const navigate = useNavigate();
    const { id } = useParams();

    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [catList, setCatList] = useState([]);

    //Atributos do Anúncio
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [desc, setDesc] = useState('');
    const [adOldImages, setAdOldImages] = useState([]);
    const [adNewImages, setAdNewImages] = useState([]);

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCatList(cats);
        }
        getCategories();

        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json);
        }
        getAdInfo(id);
    }, []);

    useEffect(() => {
        setTitle(adInfo.title);
        setCategory(adInfo.category);
        setPrice(adInfo.price);
        setPriceNegotiable(adInfo.priceNegotiable);
        setDesc(adInfo.description);
        setAdOldImages(adInfo.images);
    }, [adInfo]);

    const priceMask = createdNumberMask({
        prefix: 'R$ ',
        includeThousandSeparator: true,
        thousandSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ','
    });

    const removeOldImg = (index) => {
        const tempImageArray = adOldImages.filter((_, i) => i !== index);
        setAdOldImages(tempImageArray);
    }

    const removeNewImg = (index) => {
        const tempImageArray = adNewImages.filter((_, i) => i !== index);
        setAdNewImages(tempImageArray);
    }

    const handleEditAd = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        let errors = [];

        if (!title.trim()) {
            errors.push('Por favor, informe um título.');
        }

        if (!category) {
            errors.push('Por favor, informe uma categoria.');
        }

        if (!desc) {
            errors.push('Por favor, informe uma descrição.');
        }

        if (adOldImages.length === 0) {
            errors.push('Por favor, carregue um ou mais imagens do produto.')
        }

        if (errors.length === 0) {
            const fData = new FormData();
            fData.append('title', title);
            fData.append('price', price);
            fData.append('priceNegotiable', priceNegotiable);
            fData.append('description', desc);
            fData.append('category', category);
            fData.append('images', adNewImages);

            for (let i = 0; i < fileField.current.files.length; i++) {
                fData.append('img', fileField.current.files[i]);
            }

            const json = await api.editAdd(fData, id);

            if (!json.error) {
                navigate(`/ad/${json.id}`);
            } else {
                setError(json.error);
                console.log(error);
            }

        } else {
            setError(errors.join('\n'));
            return;
        }

        setDisabled(false);
    }

    return (
        <PageContainer>
            <C.Container>
                <PageTitle>Editar Anúncio</PageTitle>

                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={e => e.preventDefault()}>
                    <label className='area'>
                        <div className='area-title'>Título</div>
                        <div className='area-input'>
                            <input
                                type='text'
                                disabled={disabled}
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'>Categoria</div>
                        <div className='area-input'>
                            <select
                                disabled={disabled}
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                                required
                            >
                                {catList && catList.map(i =>
                                    <option key={i._id} value={i.name}>{i.name}</option>
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
                                disabled={disabled || priceNegotiable}
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'>Preço Negociável</div>
                        <div className='area-input'>
                            <input
                                type='checkbox'
                                disabled={disabled}
                                checked={priceNegotiable}
                                onChange={e => setPriceNegotiable(!priceNegotiable)}
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'>Descrição</div>
                        <div className='area-input'>
                            <textarea
                                disabled={disabled}
                                value={desc}
                                onChange={e => setDesc(e.target.value)}
                            />
                        </div>
                    </label>

                    <label className='area-bigger'>
                        <div className='area-title'>Imagens do Anúncio</div>
                        <div className='area-images'>
                            {adOldImages && adOldImages.map((i, k) =>
                                <div key={k} className='imageItem'>
                                    <img src={i} alt='' />
                                    <div className='imageItem-btn' onClick={() => removeOldImg(k)}>Excluir</div>
                                </div>
                            )}
                            {adNewImages && adNewImages.map((i, k) =>
                                <div key={k} className='imageItem'>
                                    <img src={i} alt='' />
                                    <div className='imageItem-btn' onClick={() => removeNewImg(k)}>Excluir</div>
                                </div>
                            )}
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'>Novas Imagens<br />(1 ou mais)</div>
                        <div className='area-input'>
                            <input
                                type='file'
                                disabled={disabled}
                                ref={fileField}
                                multiple
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'></div>
                        <div className='area-input area-btn'>
                            <div className='form-btn' disabled={disabled}>Voltar</div>
                            <div className='form-btn' disabled={disabled} onClick={handleEditAd}>Salvar</div>
                        </div>
                    </label>
                </form>
            </C.Container>
        </PageContainer>
    );
}