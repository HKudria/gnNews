import Card from 'react-bootstrap/Card';
import s from './List.module.css'
import {useState} from 'react';
import {INews} from '../../../../store/news/NewsInterface';

interface ListPropsInterface{
    news: INews,
    toggleModal: () => void
}

const List = ({news, toggleModal}: ListPropsInterface) => {
    const [date, setDate] = useState(new Date(news.publishedAt));

    return (
        <>
            <Card onClick={toggleModal} className={s.card}>
                <Card.Header as="h5">{news.source.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>{news.title}</Card.Text>
                </Card.Body>
                <Card.Footer><p>{date.toString()}</p></Card.Footer>
            </Card>
        </>
    )
}

export default List