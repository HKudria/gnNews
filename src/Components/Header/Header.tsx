import s from './Header.module.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {changeView, getNewsState} from '../../store/news/newsSlice';
import HeaderModal from './HeaderModal/NewsModal';
import {ViewEnums} from '../../store/news/NewsInterface';


const Header = () => {
    const [isModal, setIsModal] = useState(false);
    const newsStore = useAppSelector(getNewsState);
    const dispatch = useAppDispatch();

    const toggleModal = () => {
        setIsModal(!isModal)
    }

    const changeViews = () => {
        dispatch(changeView())
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
                            <Nav.Link href="" onClick={toggleModal}>Modal</Nav.Link>
                            <Nav.Link href="" onClick={changeViews}>Change view: {newsStore.view === ViewEnums.BLOCK ? 'List' : 'Block'}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        </>
    );
};

export default Header;