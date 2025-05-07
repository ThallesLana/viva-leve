import FormLead from "./form/FormLead";
import styles from "./GetLead.module.css";

const title = "Preencha as informações abaixo:";
const info = "Atualmente, atendemos somente a região de Muriaé, MG.";

function GetLead() {
    return (
        <div className="content bg-black">
            <main className={styles.leadHeader}>
                <h1>{title}</h1>
                <hr />
                <h3>{info}</h3>
                
            </main>

            <section className={styles.getLeadContent}>
                <aside className={styles.left}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29771.686405073237!2d-42.394325100575436!3d-21.134052525252564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcc64152334a17%3A0x59481656f33750cc!2sMuria%C3%A9%2C%20MG%2C%2036880-000!5e0!3m2!1spt-BR!2sbr!4v1744243474924!5m2!1spt-BR!2sbr" 
                        width="600" 
                        height="400" 
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">    
                    </iframe>
                </aside>
                
                <aside id="formLead" className={styles.right}>
                    <FormLead />
                </aside>
            </section>
            
        </div>
    );
}

export default GetLead;