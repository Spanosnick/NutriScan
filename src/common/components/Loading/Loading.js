import {createPortal} from "react-dom";
import {motion} from "framer-motion";
import styles from './Loading.module.css';

export function Loading() {
    return (
        createPortal((<div className={styles.generalModal}>
            <motion.div
                className={styles.spinner}
                animate={{rotate: 360}}
                transition={{repeat: Infinity, duration: 1, ease: "linear"}}
            />

        </div>), document.getElementById('loadingModal'))
    )
}
