import styles from "./chat.module.css";
import Image from "next/image";
import ChatImage from "./assets/chat.png";
import UserChat from "./userChat/userChat";

export default function Chat(props) {
  return (
    <div className={styles.chatMessagesModuleContainer}>
      {!props.chatActive ? (
        <div className={styles.chatUserNotSelected}>
          <div className={styles.chatUserNotSelectedInnerContainer}>
            <Image src={ChatImage} width={350} height={350} />
            <div className={styles.divSeprator}></div>
            <h3>
              Please select a user from your contact list <br></br>or add a new
              user from search bar!
            </h3>
          </div>
        </div>
      ) : (
        <UserChat
          chatDetails={props.chatDetails}
          setChatDetails={props.setChatDetails}
        />
      )}
    </div>
  );
}
