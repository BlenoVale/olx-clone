import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import * as C from './styles';
import OlxAPI from '../../helpers/olxAPI';

import { PageContainer } from '../../components/MainConponents';
import { AdItem } from '../../components/partials/AdItem';

export const AdPage = () => {
    const api = OlxAPI();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    }, []);

    const formatDate = (date) => {
        let cDate = new Date(date); // cDate = currentDate

        let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }

    return (
        <PageContainer>
            {adInfo.category &&
                <C.BreadChumb>
                    Voce está aqui:
                    <Link to='/'>Home</Link>
                    /
                    <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
                    /
                    <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>
                    / {adInfo.title}
                </C.BreadChumb>
            }

            <C.PageArea>
                <div className='leftSide'>
                    <div className='box'>
                        <div className='adImage'>
                            {loading && <C.Fake height={300} />}
                            {adInfo.images &&
                                <Slide>
                                    {adInfo.images.map((img, k) =>
                                        <div key={k} className='each-slide'>
                                            <img src={img} alt='' />
                                        </div>
                                    )}
                                </Slide>
                            }
                        </div>
                        <div className='ad-Info'>
                            <div className='adName'>
                                {loading && <C.Fake height={20} />}
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated &&
                                    <small> Criado em {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className='adDescription'>
                                {loading && <C.Fake height={100} />}
                                {adInfo.description}
                                <div className='custom-line' />
                                {adInfo.views &&
                                    <small>Visualizações: {adInfo.views}</small>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightSide'>
                    <div className='box box-padding'>
                        {loading && <C.Fake height={20} />}
                        {adInfo.priceNagotiable &&
                            "Preço Negociável"
                        }
                        {!adInfo.priceNagotiable && adInfo.price &&
                            <div className='price'>Preço: <span>R$ {adInfo.price}</span></div>
                        }
                    </div>

                    {adInfo.userInfo &&
                        <a href={`mailto:${adInfo.userInfo.email}`} className='contacSellerLink' target='_blank'>Fale com o Vendedor</a>
                    }

                    <div className='createdBy box box-padding'>
                        {loading && <C.Fake height={50} />}
                        {!loading && adInfo.userInfo &&
                            <>
                                <strong>{adInfo.userInfo.name}</strong>
                                <small>Email: {adInfo.userInfo.email}</small>
                                <small>Estado: {adInfo.stateName}</small>
                            </>
                        }
                    </div>
                </div>
            </C.PageArea>

            <C.OthesArea>
                {adInfo.others &&
                    <>
                        <h2>Outras ofertas do Vendedor</h2>
                        <div className='list'>
                            {adInfo.others.map((i, k) =>
                                <AdItem key={k} data={i} />
                            )}
                        </div>
                    </>
                }
            </C.OthesArea>
        </PageContainer>
    );
}