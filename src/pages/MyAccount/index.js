import React, { useState, useEffect, useRef } from 'react';
import { ErrorMessage, PageContainer, PageTitle, InfoMessage } from '../../components/MainConponents';

import { UserAdItem } from '../../components/partials/UserAdItem';
import olxAPI from '../../helpers/olxAPI';
import * as C from './styles';
import MaskedInput from 'react-text-mask';
import createdNumberMask from 'text-mask-addons/dist/createNumberMask';
import { AdModal } from '../../components/partials/AdModal';
import { Link } from 'react-router-dom';

export const MyAccount = () => {
    const api = olxAPI();
    const fileField = useRef();

    const [disabled, setDisabled] = useState(false);

    const [stateLoc, setStateLoc] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userAds, setUserAds] = useState([]);
    const [choosenAd, setChoosenAd] = useState({});

    const [stateList, setStateList] = useState([]);
    const [error, setError] = useState('');
    const [msgInfo, setMsgInfo] = useState('');

    const [catlist, setCatList] = useState([]);

    const [adTitle, setAdTitle] = useState('');
    const [adCategory, setAdCategory] = useState([]);
    const [adPrice, setAdPrice] = useState('');
    const [adNegotiablePrice, setNegotiablePrice] = useState(false);
    const [adDescription, setAdDescription] = useState('');
    const [AdOldImageList, setAdOldImageList] = useState([]);
    const [adNewImageList, setAdNewImageList] = useState([]);

    const [modalDisplay, setModalDisplay] = useState('none');


    useEffect(() => {
        const getUser = async () => {
            const tempUser = await api.getUser();
            setName(tempUser.name);
            setEmail(tempUser.email);
            setStateLoc(tempUser.state)
            setUserAds(tempUser.ads);
        }
        getUser();

        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if (password !== confirmPassword) {
            setError('Senha e Confirmar Senha não possuem o mesmo valor.');
            setDisabled(false);
            return;
        }

        const tempUser = await api.getUser();
        const json = await api.updateUser(name, email, stateLoc, password, tempUser);

        if (json.error) {
            setError(json.error);
        } else {
            setMsgInfo('Informações do usuário Atualizadas com Sucesso.');
        }

        setDisabled(false);
    }

    const handleEditAd = (ad) => {
        if (modalDisplay === 'none') {
            setChoosenAd(ad);
            setModalDisplay('flex');
        } else {
            setModalDisplay('none');
        }
    }

    const priceMask = createdNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ','
    });

    return (
        <PageContainer>
            <PageTitle>Minha Conta</PageTitle>
            <C.UserInfo>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                {msgInfo &&
                    <InfoMessage>{msgInfo}</InfoMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className='area'>
                        <div className='area-title'>Estado</div>
                        <div className='area-input'>
                            <select
                                disabled={disabled}
                                value={stateLoc}
                                onChange={e => setStateLoc(e.target.value)}
                                required

                            >
                                {stateList.map((i, k) =>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'>Nome Completo</div>
                        <div className='area-input'>
                            <input
                                disabled={disabled}
                                type='text'
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'>E-mail</div>
                        <div className='area-input'>
                            <input
                                disabled={disabled}
                                type='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'>Senha</div>
                        <div className='area-input'>
                            <input
                                disabled={disabled}
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'>Confirmar Senha</div>
                        <div className='area-input'>
                            <input
                                disabled={disabled}
                                type='password'
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'></div>
                        <div className='area-input'>
                            <button disabled={disabled}>Salvar</button>
                        </div>
                    </label>
                </form>
            </C.UserInfo>

            <C.AdInfo>
                <h3>Meus Anúncios</h3>
                <div className='AdsList'>
                    {userAds.map((i, k) =>
                        <div key={k} className='AdItem' onClick={() => handleEditAd(i)}>
                            <UserAdItem data={i} />
                        </div>
                    )}
                </div>
            </C.AdInfo>
        </PageContainer>
    );
}

/*
            <C.AdModal modalDisplay={modalDisplay}>
                <form className='modalArea'>
                    <AdModal choosenAd={choosenAd}/>
                    <label className='area'>
                        <div className='area-title'></div>
                        <div className='area-input btn-area-input'>
                            <button disabled={disabled}>Adicionar Anúncio</button>
                            <button disabled={disabled} onClick={handleEditAd}>Cancelar</button>
                        </div>
                    </label>
                </form>
            </C.AdModal>
*/