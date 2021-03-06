import { useState, useEffect } from "react";
import styles from "./userChat.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Avatar from "./assets/avatar.png";
import SentMessage from "./sentMessage/sentMessage.js";
import RecievedMessage from "./recievedMessage/recievedMessage.js";
import { ReadMessages, SendMessages } from "../../../FirebaseModules/Messages";
import { useAuth } from "../../../context/authContext/authContext";
import { uid } from "uid";

export default function UserChat(props) {
  const { user } = useAuth();
  const [msg, setMsg] = useState("");
  //1 is current user
  const [MsgContent, setMsgContent] = useState([]);
  const [messages, setMessages] = useState(null);
  const [messages1, setMessages1] = useState([]);
  const [executed, setExecuted] = useState(false);
  const [CHATUID, setCHATUID] = useState(props.chatUser.UUID);

  useEffect(() => {
    ReadMessages(CHATUID, setMessages);
  }, []);
  useEffect(() => {
    setMsgContent([]);
    setCHATUID(props.chatUser.UUID);
    console.log("\n----------------!!! CHANNEL CHANGED !!!----------------\n");
    ReadMessages(props.chatUser.UUID, setMessages);
  }, [props.chatUser.UUID]);
  useEffect(() => {
    if (messages) {
      setMessages1(Object.entries(messages).map((e) => ({ [e[0]]: e[1] })));
    }
  }, [messages]);
  useEffect(() => {
    console.log(messages1);
    const check = handleMessagesContent();
    if (check) {
      setExecuted(true);
    }
  }, [messages1]);
  function sendMessage() {
    if (msg != " " && msg != "" && msg != null && msg != undefined) {
      if (event.keyCode == 13) {
        SendMessages(CHATUID, msg, user.displayName);
        console.log("Message Sent!!!");
        setMsg("");
      }
    }
  }
  function handleMessagesContent() {
    setMsgContent([]);
    console.log("\n----------------STARTED MSG FORMATTING----------------\n");
    var MsgsFormated = [];
    messages1.map((item) => {
      const obj = item;
      console.log("Process 1:");
      console.log(obj);
      var data;
      data = Object.values(obj)[0];
      console.log("Process 2:");
      console.log(data);
      MsgsFormated.push(data);
    });
    //Deletes CHANNEL CREATED ON item from array
    var index = MsgsFormated.findIndex(
      (p) => Object.keys(p) === "channelCreatedOn"
    );
    console.log("index: " + index);
    MsgsFormated.pop(index);

    console.log(MsgsFormated);
    setMsgContent(MsgsFormated); //Pushes Code to the state
    console.log("\n----------------ENDED MSG FORMATTING----------------\n");
    return true;
  }
  function sendMessageByClick() {
    if (msg != " " && msg != "" && msg != null && msg != undefined) {
      sendMessage();
    }
  }
  function handleMsgChange(e) {
    setMsg(e.target.value);
  }

  function renderMessage(m) {
    const Sender = String(m.Sender);
    const Res = user.displayName;
    if (Sender == Res) {
      return (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className={styles.sentMessagesStack}
        >
          <SentMessage Avatar={Avatar} Content={m.Message} />
        </motion.div>
      );
    } else {
      return (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className={styles.recievedMessagesStack}
        >
          <RecievedMessage Avatar={Avatar} Content={m.Message} />
        </motion.div>
      );
    }
  }
  function handleMsgKey() {
    return uid(16);
  }
  return (
    <div className={styles.userChatContainer}>
      <div
        className={styles.chatHeader}
        onClick={() => props.setChatDetails(true)}
      >
        <div className={styles.userChatInfo}>
          <Image src={Avatar} width={50} height={50} />
          <div className={styles.userContentContainer}>
            {props.chatUser ? <h3>{props.chatUser.name}</h3> : ""}
          </div>
        </div>
      </div>
      <div className={styles.userChatMessagesContainer}>
        <div className={styles.chatMessagesStack}>
          {MsgContent.map((item) => (
            <div key={handleMsgKey()}>{renderMessage(item)}</div>
          ))}
        </div>
      </div>
      <div className={styles.userChatActionsContainer}>
        <div className={styles.actionsContainer}>
          <div className={styles.actionsContainerIconStack}>
            <div className={styles.emojiBtn}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0C23.2843 0 30 6.71633 30 15.0015C30 23.2852 23.2843 30 15 30C6.71566 30.0015 0 23.2852 0 15.0015C0 6.71633 6.71566 0 15 0ZM15 2.24977C13.314 2.23149 11.6412 2.54779 10.0783 3.18039C8.51541 3.81298 7.09348 4.7493 5.89481 5.93516C4.69615 7.12101 3.74456 8.53284 3.09511 10.089C2.44567 11.6451 2.11127 13.3145 2.11127 15.0007C2.11127 16.687 2.44567 18.3564 3.09511 19.9125C3.74456 21.4687 4.69615 22.8805 5.89481 24.0663C7.09348 25.2522 8.51541 26.1885 10.0783 26.8211C11.6412 27.4537 13.314 27.77 15 27.7517C18.3575 27.7153 21.5651 26.3559 23.9264 23.9686C26.2877 21.5812 27.6122 18.3588 27.6122 15.0007C27.6122 11.6427 26.2877 8.42026 23.9264 6.03295C21.5651 3.64563 18.3575 2.28619 15 2.24977ZM9.69406 19.1756C10.3253 19.9792 11.131 20.6286 12.0503 21.0748C12.9695 21.5209 13.9782 21.7521 15 21.7508C16.0207 21.7521 17.0283 21.5213 17.9467 21.076C18.8651 20.6306 19.6703 19.9823 20.3014 19.1801C20.393 19.0642 20.5065 18.9674 20.6355 18.8954C20.7645 18.8233 20.9063 18.7774 21.053 18.7602C21.1998 18.743 21.3484 18.7549 21.4905 18.7951C21.6327 18.8354 21.7655 18.9033 21.8814 18.9949C21.9973 19.0864 22.094 19.2 22.166 19.3289C22.2381 19.4579 22.284 19.5998 22.3012 19.7465C22.3184 19.8933 22.3065 20.0419 22.2663 20.1841C22.226 20.3262 22.1582 20.459 22.0666 20.5749C21.2249 21.6437 20.1515 22.5074 18.9273 23.1008C17.7032 23.6942 16.3603 24.0019 15 24.0006C13.6379 24.0017 12.2934 23.6931 11.0681 23.098C9.84283 22.503 8.76886 21.6372 7.92741 20.5659C7.83208 20.4503 7.7608 20.3169 7.71776 20.1733C7.67472 20.0298 7.66078 19.8791 7.67677 19.7301C7.69277 19.5811 7.73836 19.4368 7.81088 19.3057C7.88341 19.1746 7.98139 19.0593 8.09909 18.9666C8.21679 18.8738 8.35182 18.8056 8.49627 18.7657C8.64071 18.7259 8.79165 18.7154 8.94023 18.7347C9.08881 18.754 9.23203 18.8029 9.36148 18.8783C9.49093 18.9538 9.604 19.0543 9.69406 19.1741V19.1756ZM10.5009 10.127C10.7514 10.1199 11.0009 10.1631 11.2344 10.2541C11.4679 10.3451 11.6809 10.482 11.8606 10.6567C12.0403 10.8315 12.1832 11.0405 12.2807 11.2714C12.3783 11.5023 12.4285 11.7504 12.4285 12.001C12.4285 12.2517 12.3783 12.4998 12.2807 12.7307C12.1832 12.9616 12.0403 13.1706 11.8606 13.3454C11.6809 13.5201 11.4679 13.657 11.2344 13.748C11.0009 13.839 10.7514 13.8822 10.5009 13.8751C10.0131 13.8613 9.5499 13.6578 9.20974 13.3079C8.86959 12.9579 8.67929 12.4891 8.67929 12.001C8.67929 11.513 8.86959 11.0442 9.20974 10.6942C9.5499 10.3443 10.0131 10.1408 10.5009 10.127ZM19.4991 10.127C19.7496 10.1199 19.9991 10.1631 20.2326 10.2541C20.4661 10.3451 20.6791 10.482 20.8588 10.6567C21.0385 10.8315 21.1814 11.0405 21.2789 11.2714C21.3765 11.5023 21.4267 11.7504 21.4267 12.001C21.4267 12.2517 21.3765 12.4998 21.2789 12.7307C21.1814 12.9616 21.0385 13.1706 20.8588 13.3454C20.6791 13.5201 20.4661 13.657 20.2326 13.748C19.9991 13.839 19.7496 13.8822 19.4991 13.8751C19.0113 13.8613 18.5481 13.6578 18.2079 13.3079C17.8678 12.9579 17.6775 12.4891 17.6775 12.001C17.6775 11.513 17.8678 11.0442 18.2079 10.6942C18.5481 10.3443 19.0113 10.1408 19.4991 10.127Z"
                  fill="currentColor"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
            <div className={styles.attachMediaBtn}>
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10213 27C7.90896 26.9944 6.72886 26.7553 5.6305 26.2966C4.53213 25.838 3.53746 25.169 2.70435 24.3286C1.8775 23.5575 1.2133 22.6336 0.749753 21.6097C0.286208 20.5857 0.0324186 19.4819 0.00290793 18.3614C-0.0266027 17.2409 0.168745 16.1256 0.577772 15.0794C0.986798 14.0333 1.60148 13.0767 2.38663 12.2646L13.0159 1.70677C13.5835 1.14929 14.2601 0.710779 15.0047 0.417709C15.7494 0.124639 16.5467 -0.0169103 17.3485 0.00160854C18.2073 0.00448621 19.057 0.17559 19.848 0.504943C20.639 0.834295 21.3554 1.3153 21.9554 1.91992C23.1498 3.05135 23.8424 4.60059 23.883 6.23138C23.9235 7.86217 23.3087 9.4429 22.1721 10.6304L11.485 21.1882C11.1427 21.5273 10.7354 21.7961 10.2867 21.9791C9.83796 22.162 9.35678 22.2555 8.87106 22.254C8.34635 22.2547 7.82681 22.1519 7.34313 21.9518C6.85944 21.7517 6.42141 21.4582 6.05488 21.0888C5.32228 20.3909 4.8992 19.4367 4.87756 18.4336C4.85593 17.4305 5.2375 16.4596 5.93934 15.7317L15.8032 5.98388C16.0839 5.80044 16.421 5.71937 16.7561 5.7547C17.0911 5.79004 17.4031 5.93956 17.638 6.17736C17.8728 6.41517 18.0157 6.7263 18.042 7.05687C18.0682 7.38744 17.9762 7.71663 17.7817 7.98745L7.91789 17.7353C7.75341 17.9303 7.67335 18.181 7.69496 18.4335C7.71657 18.686 7.83812 18.92 8.03342 19.0852C8.23664 19.2865 8.51059 19.4035 8.79885 19.412C8.90562 19.4135 9.01165 19.3942 9.1108 19.3552C9.20994 19.3162 9.30026 19.2582 9.37652 19.1847L20.0491 8.62688C20.6482 7.97208 20.9613 7.11161 20.9207 6.23149C20.8802 5.35137 20.4893 4.52229 19.8325 3.92348C19.2224 3.3003 18.3928 2.93088 17.5144 2.89123C16.6359 2.85158 15.7754 3.14472 15.11 3.71034L4.43738 14.2113C3.91841 14.7597 3.51478 15.4038 3.24972 16.1063C2.98466 16.8088 2.86341 17.556 2.89294 18.3048C2.92247 19.0536 3.10219 19.7892 3.42178 20.4694C3.74136 21.1496 4.1945 21.7609 4.75511 22.2682C5.3173 22.8416 5.98999 23.299 6.73389 23.6138C7.47778 23.9285 8.27796 24.0942 9.08769 24.1012C9.78584 24.1068 10.4782 23.9766 11.1251 23.7181C11.7719 23.4596 12.3605 23.078 12.857 22.595L23.5296 12.0372C23.6633 11.9047 23.8222 11.7994 23.9973 11.7274C24.1724 11.6553 24.3601 11.6179 24.5499 11.6172C24.7396 11.6166 24.9277 11.6527 25.1033 11.7235C25.2788 11.7944 25.4385 11.8985 25.5731 12.0301C25.7078 12.1617 25.8148 12.318 25.888 12.4903C25.9613 12.6625 25.9993 12.8473 26 13.034C26.0007 13.2207 25.9639 13.4057 25.892 13.5784C25.82 13.7512 25.7141 13.9083 25.5804 14.0408L14.9078 24.5986C14.15 25.3573 13.2466 25.9603 12.2499 26.3726C11.2533 26.7849 10.1833 26.9981 9.10213 27Z"
                  fill="currentColor"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
          </div>
          <div className={styles.inputMessageField}>
            <input
              className={
                props.chatDetails
                  ? styles.shrinkInputField
                  : styles.extendedInputField
              }
              autoFocus
              value={msg}
              onKeyDown={sendMessage}
              onChange={handleMsgChange}
              type="text"
              placeholder="Type a Message..."
              name="Type Message"
            />
          </div>
          <div className={styles.sendMessageBtn} onClick={sendMessageByClick}>
            <svg
              width="38"
              height="35"
              viewBox="0 0 38 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.24656 7.49705L35.8038 0.82914C35.9923 0.792786 36.1872 0.809912 36.3664 0.87858C36.5456 0.947248 36.702 1.06472 36.8179 1.21769C36.9338 1.37066 37.0046 1.55302 37.0222 1.74413C37.0399 1.93525 37.0036 2.12748 36.9177 2.29907L21.1483 33.7653C21.0598 33.9414 20.9225 34.0883 20.7529 34.1886C20.5833 34.2889 20.3884 34.3383 20.1914 34.3309C19.9945 34.3236 19.8038 34.2598 19.6421 34.1471C19.4804 34.0345 19.3545 33.8777 19.2794 33.6956L14.6383 22.3925C14.5632 22.2095 14.5426 22.0088 14.5787 21.8144C14.6149 21.62 14.7064 21.4402 14.8422 21.2964L24.6939 10.8726C24.7527 10.8106 24.7951 10.7349 24.8172 10.6523C24.8393 10.5698 24.8406 10.483 24.8207 10.3999L24.7757 10.2793C24.722 10.1765 24.6351 10.095 24.5291 10.0479C24.4232 10.0008 24.3045 9.99088 24.1922 10.0198L24.0805 10.0631L11.3106 16.765C11.1355 16.8564 10.9379 16.8954 10.7413 16.8774C10.5447 16.8594 10.3574 16.7852 10.2018 16.6636L0.807726 9.318C0.652163 9.19659 0.53483 9.03297 0.469739 8.84668C0.404647 8.6604 0.394548 8.45931 0.440646 8.26744C0.486744 8.07556 0.587092 7.90101 0.729707 7.76463C0.872322 7.62824 1.05118 7.53578 1.24492 7.4983L1.24656 7.49705Z"
                fill="url(#paint0_linear_6_289)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_6_289"
                  x1="1.47285"
                  y1="10.2528"
                  x2="42.7853"
                  y2="17.9899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF9D43" />
                  <stop offset="1" stopColor="#FF4E43" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
