import styles from './ImpactTitle.module.css';
import impactTitleImage from '/impactTitle.png';
import scrollToFormLead from '../../utils/scrollToFormLead';
const impactTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const impactSubtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

function ImpactTitle() {
 return (
    <div className='content'>
        <main className={styles.mainContent}>
            <aside className={styles.aside}>
                <h2>
                    {impactTitle}
                </h2>
                <p>
                   {impactSubtitle}
                </p>

                <button id="contactButton" onClick={scrollToFormLead}>
                    Solicite o contato do profissional!
                </button>
            </aside>
            <section className={styles.imageBackground}>
                <img src={impactTitleImage} alt='Imagem de impacto' />
            </section>
        </main>
    </div>
 ) 
}

export default ImpactTitle;