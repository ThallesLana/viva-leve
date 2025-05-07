import styles from './ClearProposal.module.css';  

const impactTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

function ClearProposal() {
  return (
    <div className="content bg-none">
      <main className={styles.clearProposal}>
        <h1>{impactTitle}</h1>
        <hr />
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </main>
    </div>
  );
}

export default ClearProposal;