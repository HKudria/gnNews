import Main from './Components/Main/Main';
import Nav from './Components/Nav/nav';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import s from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <Nav/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default App;
