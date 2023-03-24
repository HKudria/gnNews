import {Button, Modal} from 'react-bootstrap';
import s from './HeaderModal.module.css'
import {useTranslation} from 'react-i18next';

interface HeaderModalPropsInterface {
    closeModal: () => void
}
const HeaderModal = ({closeModal} : HeaderModalPropsInterface) => {
    const {t} = useTranslation('common');

    return (
        <div className={s.background}>
            <div className={`modal show ${s.modal}`}>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={closeModal}>
                        <Modal.Title>{t('interface.headerModale')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{t('message.modalMessage')}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>{t('button.close')}</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    );
}

export default HeaderModal
