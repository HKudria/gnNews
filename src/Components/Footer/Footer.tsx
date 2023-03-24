import s from './Footer.module.css';
import {useAppSelector} from '../../store/hooks';
import {getNewsState} from '../../store/news/newsSlice';
import {useEffect, useState} from 'react';

const Footer = () => {
    const newsStore = useAppSelector(getNewsState);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(()=>setDate(new Date()), 1000)
    }, []);


    return (
        <div className={s.block}>
            <div className={'h3 me-5'}>News count: <small className="text-muted">{newsStore.count}</small>
            </div>
            <div className={'h3'}>Current date: <small className="text-muted">{date.toLocaleString()}</small>
            </div>
        </div>
    );
};

export default Footer;