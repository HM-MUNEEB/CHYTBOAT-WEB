import styles from "./ContactCard.module.css";
import Image from "next/image";
import { useDebugValue } from "react";

export default function ContactCard(props) {
  let image = props.imageadd;
  let userName = props.userName;
  let lastMessage = props.lastMsg;
  let msgDate = props.msgDate;
  let activeChat = props.activeChat;
  return (
    <div
      className={
        activeChat ? styles.ContactCardActive : styles.ContactCardNonActive
      }
    >
      <div className={styles.InnerContactCard}>
        <div className={styles.contactMessageInfo}>
          <div className={styles.contactContentInfo}>
            {activeChat ? <div className={styles.activeContactCard}></div> : ""}
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
