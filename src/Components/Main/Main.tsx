import s from './Main.module.css'
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getNewsState, parseNews} from '../../store/news/newsSlice';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';
import {LoadingStatusEnum} from '../../store/news/NewsInterface';
import {Alert} from 'react-bootstrap';

const Main = () => {
    const newsStore = useAppSelector(getNewsState);
    const dispatch = useAppDispatch();
    let {countryCode} = useParams();

    useEffect(() => {
        dispatch(parseNews(countryCode ?? 'us'))
    }, []);

    useEffect(() => {
        dispatch(parseNews(countryCode ?? 'us'))
    }, [countryCode]);

    return (
        <div className={s.block}>
            {newsStore.status === LoadingStatusEnum.FAILED &&
            <Alert variant={'danger'} className={s.alert}>
                Something went wrong while update news state!
            </Alert>}
            {newsStore.status === LoadingStatusEnum.IDLE  && newsStore.news.map((el, index) => <NewsCard
                key={index} source={el.source} author={el.author}
                title={el.title} url={el.url} publishedAt={el.publishedAt}
                urlToImage={el.urlToImage} description={el.description}
            />)}
        </div>

    );
};

export default Main;