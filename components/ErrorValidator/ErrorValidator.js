import { BiError } from "react-icons/bi";
import { VscError } from "react-icons/vsc";

import styles from "./ErrorValidator.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function ErrorValidator(props) {
  return (
    <AnimatePresence>
      {props.error != null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.errorContainer}>
            <div className={styles.errorHeader}>
              <div>
                <BiError size={28} />
                <h3>Error</h3>
              </div>
              <div className={styles.cancelBtn}></div>
            </div>
            <div className={styles.errorMsg}>
              <p>{props.error}</p>
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}
