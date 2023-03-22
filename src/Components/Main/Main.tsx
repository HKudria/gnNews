import s from './Main.module.css'
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getNewsState, parseNews} from '../../store/news/newsSlice';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';
const Main = () => {
    const news = useAppSelector(getNewsState);
    const dispatch = useAppDispatch();
    let { countryCode } = useParams();

    useEffect(() => {
        console.log(countryCode)
       dispatch(parseNews(countryCode))
    }, []);

    return (
        <div className={s.block}>
            {news.news.map((el,index)=> <NewsCard key={index} source={el.source} author={el.author} title={el.title} url={el.url} publishedA={el.publishedA} urlToImage={el.urlToImage} />)}
        </div>
    );
};

export default Main;