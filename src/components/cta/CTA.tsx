import scrollToFormLead from '../../utils/scrollToFormLead';
import styles from './CTA.module.css';

const ctaMain = 'Conquiste sua mobilidade de volta!';
const ctaSecundary = 'Não deixe a dor te impedir de viver.';
const ctaButton = 'Quero viver sem dor!';

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