import {Button, Modal} from 'react-bootstrap';
import {INews} from '../../../store/news/NewsInterface';
import s from './NewsModal.module.css'
import {useTranslation} from 'react-i18next';

interface NewsModalPropsInterface {
    news: INews
    closeModal: () => void
}
const NewsModal = ({news, closeModal} : NewsModalPropsInterface) => {
    const {t} = useTranslation('common');

    return (
        <div className={s.background}>
            <div className={`modal show ${s.modal}`}>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={closeModal}>
                        <Modal.Title>{news.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{news.description ?? t('message.noDescription')}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" href={news.url}>{t('button.source')}</Button>
                        <Button variant="secondary" onClick={closeModal}>{t('button.close')}</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    );
}

export default NewsModal
