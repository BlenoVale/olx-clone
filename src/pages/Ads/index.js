import React, { useState, useEffect } from 'react';
import * as C from './styles';
import OlxAPI from '../../helpers/olxAPI';

import { PageContainer } from '../../components/MainConponents';
import { useLocation, useNavigate } from 'react-router-dom';

import { AdItem } from '../../components/partials/AdItem';

let timer;

export const Ads = () => {
    const api = OlxAPI();
    const navigate = useNavigate();

    const useQueryString = () => {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQueryString();

    const [q, setQ] = useState(
        query.get('q') != null ? query.get('q') : ''
    );
    const [cat, setCat] = useState(
        query.get('cat') != null ? query.get('cat') : ''
    );
    const [state, setState] = useState(
        query.get('state') != null ? query.get('state') : ''
    );

    const [adsTotal, setAdsTotal] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    const [resulOpacity, setResultOpacity] = useState(1);
    const [warningMessage, setWarningMessage] = useState('Carregando..');
    const [loading, setLoading] = useState(true);

    const getAdsList = async () => {
        setLoading(true);
        let offset = (currentPage - 1) * 6;

        const json = await api.getAds({
            sort: 'desc',
            limit: 6,
            q,
            cat,
            state,
            offset
        });
        setAdList(json.ads);
        setAdsTotal(json.total);
        setResultOpacity(1);
        setLoading(false);
    }

    useEffect(() => {
        if (adList.length > 0) {
            setPageCount(Math.ceil(adsTotal / adList.length));
        } else {
            setPageCount(0);
        }
    }, [adsTotal]);

    useEffect(() => {
        setResultOpacity(0.3);
        getAdsList();
    }, [currentPage]);

    useEffect(() => {
        let queryString = [];
        if (q) {
            queryString.push(`q=${q}`)
        }
        if (cat) {
            queryString.push(`cat=${cat}`)
        }
        if (state) {
            queryString.push(`cat=${state}`)
        }
        navigate({
            search: `?${queryString.join('&')}`
        });

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(getAdsList, 1000);
        setResultOpacity(0.3);
        setCurrentPage(1);
    }, [q, cat, state]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    let pagination = [];
    for (let i = 1; i <= pageCount; i++) {
        pagination.push(i);
    }

    return (
        <PageContainer>
            <C.PageArea>
                <div className='leftSide'>
                    <form method='get'>
                        <input
                            type='text'
                            name='q'
                            placeholder='O que você procura?'
                            value={q}
                            onChange={e => setQ(e.target.value)}
                        />

                        <div className='filterName'>Estado:</div>
                        <select name='state' value={state} onChange={e => setState(e.target.value)}>
                            <option></option>
                            {stateList.map((i, k) =>
                                <option key={k} value={i.name}>{i.name}</option>
                            )}
                        </select>

                        <div className='filterName'>Categorias:</div>
                        <ul>
                            {categories.map((i, k) =>
                                <li
                                    key={k}
                                    className={cat == i.slug ? 'categoryItem active' : 'categoryItem'}
                                    onClick={() => setCat(i.slug)}
                                >
                                    <img src={i.img} alt='' />
                                    <span>{i.name}</span>
                                </li>
                            )}
                        </ul>
                    </form>
                </div>
                <div className='rightSide'>
                    <h2>Resultados</h2>
                    {loading && adList.length === 0 &&
                        <div className='listWarning'>Carregando..</div>
                    }
                    {!loading && adList.length === 0 &&
                        <div className='listWarning'>Não foram encontrados Resultados</div>
                    }

                    <div className='list' style={{ opacity: resulOpacity }}>
                        {adList.map((i, k) =>
                            <div key={k} className='aditem'>
                                <AdItem data={i} />
                            </div>
                        )}
                    </div>

                    <div className='pagination'>
                        {pagination.map((i, k) =>
                            <div
                                key={k}
                                className={i === currentPage ? 'pageItem active' : 'pageItem'}
                                onClick={() => setCurrentPage(i)}
                            >{i}</div>
                        )}
                    </div>
                </div>
            </C.PageArea>
        </PageContainer>
    );
}