import s from './Main.module.css'
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getNewsState, parseNews} from '../../store/news/newsSlice';
import {useEffect} from 'react';
const Main = () => {
    const news = useAppSelector(getNewsState);
    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(parseNews())
    }, []);

    {console.log(news)}
    return (
        <div className={s.block}>
            test
        </div>
    );
};

export default Main;