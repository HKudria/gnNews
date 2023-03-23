import s from './Main.module.css'
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getNewsState, parseNews} from '../../store/news/newsSlice';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';

const Main = () => {
    const newsStore = useAppSelector(getNewsState);
    const dispatch = useAppDispatch();
    let {countryCode} = useParams();

    useEffect(() => {
        dispatch(parseNews(countryCode ?? 'us'))
    }, []);

    return (
        <div className={s.block}>
            {newsStore.news.map((el, index) => <NewsCard
                key={index} source={el.source} author={el.author}
                title={el.title} url={el.url} publishedAt={el.publishedAt}
                urlToImage={el.urlToImage} description={el.description}
            />)}
        </div>
    );
};

export default Main;