import scrollToFormLead from '../../utils/scrollToFormLead';
import styles from './CTA.module.css';

const ctaMain = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const ctaSecundary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const ctaButton = 'Solicite o contato do profissional!';

function CTA() {
    return (
        <div className="content">
            <main className={styles.CTA}>
                <h3>
                    {ctaMain}
                    <br />
                    {ctaSecundary}
                </h3>
                <button id='contactButtonCTA' onClick={scrollToFormLead}>
                    {ctaButton}
                </button>
            </main>
        </div>
    );
}

export default CTA;