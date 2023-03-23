import {Button, Modal} from 'react-bootstrap';
import s from './NewsModal.module.css'

interface HeaderModalPropsInterface {
    closeModal: () => void
}
const HeaderModal = ({closeModal} : HeaderModalPropsInterface) => {

    return (
        <div className={s.background}>
            <div className={`modal show ${s.modal}`}>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={closeModal}>
                        <Modal.Title>Header module</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>The most difficulties staff is work with redux and make some test, I'd never did it before</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    );
}

export default HeaderModal
