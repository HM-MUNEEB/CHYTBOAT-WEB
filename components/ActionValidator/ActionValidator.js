import { BiError } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import styles from "./ActionValidator.module.css";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";

export default function ActionValidator(props) {
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  return (
    <AnimatePresence>
      {props.validationMsg != null && isVisible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div
            className={
              props.status == "error"
                ? styles.errorContainer
                : styles.sucessContainer
            }
          >
            <div className={styles.validatorHeader}>
              <div>
                {props.status == "error" ? (
                  <BiError size={28} />
                ) : (
                  <BsFillPatchCheckFill size={28} />
                )}

                <h3>{props.status}</h3>
              </div>
              <div className={styles.cancelBtn}></div>
            </div>
            <div className={styles.validationMsg}>
              <p>{props.validationMsg}</p>
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}
