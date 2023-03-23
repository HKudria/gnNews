import {INews, ViewEnums} from '../../../store/news/NewsInterface';
import {useState} from 'react';
import NewsModal from '../NewsModal/NewsModal';
import {useAppSelector} from '../../../store/hooks';
import {getNewsState} from '../../../store/news/newsSlice';
import Block from './Block/Block';
import List from './List/List';

const NewsCard = (news:INews) => {
    const [isModal, setIsModal] = useState(false);
    const newsStore = useAppSelector(getNewsState);

    const toggleModal = () => {
        setIsModal(!isModal)
    }

    return (
        <>
            {isModal && <NewsModal news={news} closeModal={toggleModal} />}
            {newsStore.view === ViewEnums.BLOCK ? <Block news={news} toggleModal={toggleModal} /> : <List news={news} toggleModal={toggleModal} />}
        </>
    )
}

export default NewsCard