import styles from './ImpactTitle.module.css';
import impactTitleImage from '/impactTitle.png';
import scrollToFormLead from '../../utils/scrollToFormLead';
const impactTitle = 'Não sofra com dores e limitações!';
const impactSubtitle = 'Recupere sua qualidade de vida com o acompanhamento de um fisioterapeuta.';

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
                    Solicite o contato de um profissional!
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