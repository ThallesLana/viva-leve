import styles from './Copy.module.css';	
import BulletPoints from "./bulletPoints/BulletPoints";
import ClearProposal from "./clearProposal/ClearProposal";

function Copy() {
    return (
        <div className={styles.copyImage + " content bg-none"}>
            <ClearProposal />
            <BulletPoints />
        </div>
    )
}

export default Copy;