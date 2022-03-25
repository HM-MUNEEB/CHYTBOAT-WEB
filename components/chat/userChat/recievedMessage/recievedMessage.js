import styles from "./recievedMessage.module.css";
import Image from "next/image";

export default function RecievedMessage(props) {
  return (
    <div className={styles.recievedMessageContainer}>
      <div className={styles.recievedMessageImageContainer}>
        <Image src={props.Avatar} height={40} width={40} />
      </div>
      <div className={styles.recievedMessageContentContainer}>
        <p>{props.Content}</p>
      </div>
    </div>
  );
}
