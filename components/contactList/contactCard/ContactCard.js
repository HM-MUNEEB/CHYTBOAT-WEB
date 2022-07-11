import styles from "./ContactCard.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactCard(props) {
  let image = props.imageadd;
  let userName = props.userName;
  return (
    <div
      className={
        props.chatUser.name == userName
          ? styles.ContactCardActive
          : styles.ContactCardNonActive
      }
    >
      <div className={styles.InnerContactCard}>
        <div className={styles.contactMessageInfo}>
          <div className={styles.contactContentInfo}>
            {props.chatUser.name == userName ? (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={styles.activeContactCard}
              ></motion.div>
            ) : (
              ""
            )}
            <div className={styles.avatarContainer}>
              <Image src={image} width={60} height={60} />
            </div>
            <div className={styles.userNameLastMessage}>
              <h3>{userName}</h3>
            </div>
          </div>
          <div className={styles.msgDateTime}></div>
        </div>
      </div>
    </div>
  );
}
