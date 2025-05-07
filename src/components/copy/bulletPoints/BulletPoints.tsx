import styles from './BulletPoints.module.css';  

const impactTitle = 'Por que nos escolher?';
const bulletPoints = [
  'Técnicas avançadas para um alívio rápido e eficaz;',
  'Acompanhamento Individualizado;',
  'Suporte contínuo do profissional para alcançar o seu melhor;',
  'Prevenção de Lesões, fortaleça seu corpo e evite futuras dores;',
]

function BulletPoints() {
  return (
    <div className="content bg-none">
      <main className={styles.bulletPoints}>
        <h1>{impactTitle}</h1>
        <hr />
        <div className={styles.bulletPointsContent}>
          <ul className={styles.bulletPointsList}>
            {bulletPoints.map((point, index) => (
              <li key={index}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default BulletPoints;