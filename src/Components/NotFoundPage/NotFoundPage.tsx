import { NavLink } from 'react-router-dom';
import image from '../../assets/image/404.jpg'
import s from './NotFoundPage.module.css';
import {useTranslation} from 'react-i18next';

const NotFoundPage = () => {
    const {t} = useTranslation('common');

    return (
        <div className={s.wrapper}>
            <img className={s.image} src={image} alt='notFound' />
            <NavLink to='/'>
                <button className={s.button}>{t('button.notFound')}</button>
            </NavLink>
        </div>
    );
};

export default NotFoundPage;