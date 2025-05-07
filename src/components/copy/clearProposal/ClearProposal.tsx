import styles from './ClearProposal.module.css';  

const impactTitle = 'Recupere sua Mobilidade e Diga Adeus à Dor!';

function ClearProposal() {
  return (
    <div className="content bg-none">
      <main className={styles.clearProposal}>
        <h1>{impactTitle}</h1>
        <hr />
        <h3>
          Volte a viver <strong>sem limitações</strong>! 
          Recupere sua <strong>qualidade de vida.</strong>
        </h3>
      </main>
    </div>
  );
}

export default ClearProposal;