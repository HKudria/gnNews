import Card from 'react-bootstrap/Card';
import previeImage from '../../../../assets/image/no_preview.jpg'
import s from './Block.module.css'
import {useState} from 'react';
import {INews} from '../../../../store/news/NewsInterface';

interface BlockPropsInterface{
    news: INews,
    toggleModal: () => void
}

const Block = ({news, toggleModal}: BlockPropsInterface) => {
    const [date, setDate] = useState(new Date(news.publishedAt));

    return (
        <>
            <Card className={s.card} onClick={toggleModal}>
                <Card.Img variant="top" className={s.image} src={news.urlToImage ?? previeImage}/>
                <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
                <Card.Footer><p>{news.source.name}</p><p>{date.toString()}</p></Card.Footer>
            </Card>
        </>
    )
}

export default Block