import styles from "./sentMessage.module.css";
import Image from "next/image";

export default function SentMessage(props) {
  return (
    <div className={styles.SentMessageContainer}>
      <div className={styles.sentMessageImageContainer}>
        <Image src={props.Avatar} height={40} width={40} />
      </div>
      <div className={styles.sentMessageContentContainer}>
        <p>{props.Content}</p>
      </div>
    </div>
  );
}
