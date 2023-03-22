import Card from 'react-bootstrap/Card';
import {INews} from '../../../store/news/NewsInterface';
import previeImage from '../../../assets/image/no_preview.jpg'
import s from './NewsCard.module.css'
import {useState} from 'react';
import NewsModal from '../NewsModal/NewsModal';
const NewsCard = (props:INews) => {
    const [isModal, setIsModal] = useState(false);
    const toggleModal = () => {
        console.log('test')
        setIsModal(!isModal)
    }

    return (
        <>
            {isModal && <NewsModal news={props} closeModal={toggleModal} />}
            <Card className={s.card} onClick={toggleModal}>
                <Card.Img variant="top" src={props.urlToImage ?? previeImage}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.source.name}</Card.Text>
                    <Card.Text>{props.publishedA}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default NewsCard