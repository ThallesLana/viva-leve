import styles from './Footer.module.css';
import {useState} from 'react';
import Modal from 'react-modal';
import TermsOfUse from '../terms/termsOfUse/TermosOfUse';
import TermsOfPrivacy from '../terms/termsOfPrivacy/TermsOfPrivacy';


const enterprise: string = 'Health Leads';

Modal.setAppElement('#root');

function Footer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState<string>('');
    const [modalContent, setModalContent] = useState<React.ReactNode>();

    const openModal = (type: 'termsOfUse' | 'termsOfPrivacy') => {
        let title = '';
        let content;

        if (type === 'termsOfUse') {
            title = 'Termo de Uso';
            content = <TermsOfUse />;
        } else if (type === 'termsOfPrivacy') {
            title = 'Termo de Privacidade';
            content = <TermsOfPrivacy />;
        }

        setModalTitle(title);
        setModalContent(content);
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className={`${styles.footerContent} content`}>
            <section className={styles.footer}>
                <div className={styles.terms}>
                    <p onClick={() => openModal('termsOfUse')}>Termo de Uso</p>
                    <p onClick={() => openModal('termsOfPrivacy')}>Termo de Privacidade</p>
                </div>
                <p className={styles.copyright}>
                    © 2025 {enterprise}. Todos os direitos reservados.
                </p>
            </section>
        
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                className={styles.modal}>
                <h2>{modalTitle}</h2>
                <hr />
                <div className={styles.modalContent}>
                    {modalContent}
                </div>
                <hr />
                <div className={styles.buttonModal}>
                    <button onClick={closeModal}>Close Modal</button>
                </div>
            </Modal>
        </div>

    );
}

export default Footer;