import {Button, Modal} from 'react-bootstrap';
import {INews} from '../../../store/news/NewsInterface';
import s from './NewsModal.module.css'

interface NewsModalPropsInterface {
    news: INews
    closeModal: () => void
}
const NewsModal = ({news, closeModal} : NewsModalPropsInterface) => {

    return (
        <div className={s.background}>
            <div className={`modal show ${s.modal}`}>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={closeModal}>
                        <Modal.Title>{news.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{news.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" href={news.url}>Go to source</Button>
                        <Button variant="secondary" onClick={closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    );
}

export default NewsModal
