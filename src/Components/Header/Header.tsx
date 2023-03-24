import s from './Header.module.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getNewsState, setLanguage, setView} from '../../store/news/newsSlice';
import HeaderModal from './HeaderModal/HeaderModal';
import {LanguageEnums, ViewEnums} from '../../store/news/NewsInterface';
import {useTranslation} from 'react-i18next';


const Header = () => {
    const [isModal, setIsModal] = useState(false);
    const newsStore = useAppSelector(getNewsState);
    const dispatch = useAppDispatch();
    const {t, i18n} = useTranslation('common');

    const toggleModal = () => {
        setIsModal(!isModal)
    }

    useEffect(() => {
        i18n.changeLanguage(newsStore.language)
    }, [newsStore.language]);


    const changeViews = () => {
        dispatch(setView())
    }

    const changeLanguage = () => {
        dispatch(setLanguage())
    }

    return (
        <>
        {isModal && <HeaderModal closeModal={toggleModal} />}
        <div className={s.block}>
            <Navbar bg="light" expand="lg" className={s.zIndex}>
                <Container>
                    <NavLink to={'/'} className={'navbar-brand'} >gnNews</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="" onClick={toggleModal}>{t('button.modal')}</Nav.Link>
                            <Nav.Link href="" onClick={changeViews}>{t('button.view')} {newsStore.view === ViewEnums.BLOCK ? t('interface.list') : t('interface.block')}</Nav.Link>
                            <Nav.Link href="" onClick={changeLanguage}>{t('button.language')} {newsStore.language === LanguageEnums.EN ? 'PL' : 'US'}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </>
    );
};

export default Header;