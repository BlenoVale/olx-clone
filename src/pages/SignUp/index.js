import React, { useState, useEffect } from 'react';
import * as C from './styles';
import OlxAPI from '../../helpers/olxAPI';
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainConponents';

export const SignUp = () => {
    const api = OlxAPI();

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [stateList, setStateList] = useState([]);

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if (password !== confirmPassword) {
            setError('Senha e Confirmar Senha não possuem o mesmo valor.');
            setDisabled(false);
            return;
        }

        const json = await api.register(name, email, password, stateLoc);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/';
        }

        setDisabled(false);

    }

    return (
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <C.SignInArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className='area'>
                        <div className='area-title'>Estado</div>
                        <div className='area-input'>
                            <select value={stateLoc} onChange={e => setStateLoc(e.target.value)} required>
                                <option></option>
                                {stateList.map((i, k) =>
                                    <option key={k} value={i._id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'>Nome Completo</div>
                        <div className='area-input'>
                            <input
                                type='text'
                                disabled={disabled}
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
                                type='email'
                                disabled={disabled}
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
                                type='password'
                                disabled={disabled}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area-title'>Confirmar Senha</div>
                        <div className='area-input'>
                            <input
                                type='password'
                                disabled={disabled}
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>


                    <label className='area'>
                        <div className='area-title'></div>
                        <div className='area-input'>
                            <button disabled={disabled}>Fazer Cadastro</button>
                        </div>
                    </label>
                </form>
            </C.SignInArea>
        </PageContainer>
    );
}