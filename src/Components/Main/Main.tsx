import s from './Main.module.css'
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getNewsState, parseNews} from '../../store/news/newsSlice';
import React, {useEffect} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';
import {LoadingStatusEnum} from '../../store/news/NewsInterface';
import {Alert, Spinner} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {checkCountryRoute, Countries, CountriesInterface} from '../../Helpers/Countries';

const Main = () => {
    const {t} = useTranslation('common');
    const newsStore = useAppSelector(getNewsState);
    const dispatch = useAppDispatch();
    let {countryCode} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(!checkCountryRoute(location.pathname, countryCode)){
            navigate("/404")
        }
        dispatch(parseNews(countryCode ?? 'us'))
    }, []);

    useEffect(() => {
        if(!checkCountryRoute(location.pathname, countryCode)){
            navigate("/404")
        }
        dispatch(parseNews(countryCode ?? 'us'))
    }, [countryCode]);


    return (
        <div className={s.block}>
            {newsStore.status === LoadingStatusEnum.LOADING &&
                <div className={s.spinner}>
                    <Spinner animation="grow"/>
                </div>}
            {newsStore.status === LoadingStatusEnum.FAILED &&
                <Alert variant={'danger'} className={s.alert}>
                    {t('error.loading')}
                </Alert>}
            {newsStore.status === LoadingStatusEnum.IDLE && newsStore.news.map((el, index) => <NewsCard
                key={index} source={el.source} author={el.author}
                title={el.title} url={el.url} publishedAt={el.publishedAt}
                urlToImage={el.urlToImage} description={el.description}
            />)}
        </div>

    );
};

export default Main;