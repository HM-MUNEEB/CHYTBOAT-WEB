import styles from "./ChatDetails.module.css";
import Image from "next/image";
import chatDetailsAvatar from "./assets/chatDetailsAvatar.png";
import { motion } from "framer-motion";

export default function ChatDetails(props) {
  return (
    <div className={styles.ChatDetailsContainer}>
      <div className={styles.chatDetails}>
        <div className={styles.chatDetailsHeader}>
          <div className={styles.chatDetailsHeaderStack}>
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.46 22.7904L7.688 21.4368L8.428 21.792C10.128 22.6061 12.018 23.04 14 23.04C20.62 23.04 26 18.0365 26 12.48C26 6.92352 20.62 1.92 14 1.92C7.38 1.92 2 6.92352 2 12.48C2 14.5536 2.78 16.6579 4.214 18.457L4.904 19.321L3.458 22.7885L3.46 22.7904ZM2.046 25.2672C1.86501 25.3254 1.67045 25.3327 1.4853 25.2882C1.30015 25.2436 1.13214 25.1492 1.00111 25.0159C0.870092 24.8827 0.781532 24.7162 0.745895 24.5362C0.710258 24.3561 0.729032 24.1701 0.8 24L2.624 19.6224C0.96 17.5296 0 15.0259 0 12.48C0 6.11712 6 0 14 0C22 0 28 6.11712 28 12.48C28 18.8429 22 24.96 14 24.96C11.7563 24.9661 9.54221 24.469 7.534 23.5085L2.046 25.2653V25.2672Z"
                fill="white"
              />
              <path
                d="M9 14.4H19C19.6667 14.4 20 14.72 20 15.36C20 16 19.6667 16.32 19 16.32H9C8.33333 16.32 8 16 8 15.36C8 14.72 8.33333 14.4 9 14.4ZM10 8.64H18C18.6667 8.64 19 8.96 19 9.6C19 10.24 18.6667 10.56 18 10.56H10C9.33333 10.56 9 10.24 9 9.6C9 8.96 9.33333 8.64 10 8.64Z"
                fill="white"
              />
            </svg>
            <h3>Chat Details</h3>
          </div>
          <div
            className={styles.chatDetailsCloseBtn}
            onClick={() => {
              props.setChatDetails(false);
            }}
          >
            <div className={styles.chatDetailsCloseIcon}>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10L1 1M10 1L1 10"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.chatDetailsContentContainer}>
          <div className={styles.chatDetailsUserInfo}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image src={chatDetailsAvatar} height={150} width={150} />
            </motion.div>
            <div className={styles.chatDetailsUserInfoUserNameEmail}>
              <h2>Saani</h2>
              <h4>username@domain.com</h4>
            </div>
          </div>
          <div className={styles.ChatDetailsMediaContainer}>
            <div className={styles.ChatDetailsMediaHeader}>
              <h3>Media</h3>
              <h4>9</h4>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={styles.chatDetailsMediaStack}
            >
              <div className={styles.mediaRow}>
                <div className={styles.mediaPlaceholder}></div>
                <div className={styles.mediaPlaceholder}></div>
                <div className={styles.mediaPlaceholder}></div>
              </div>
              <div className={styles.mediaRow}>
                <div className={styles.mediaPlaceholder}></div>
                <div className={styles.mediaPlaceholder}></div>
                <div className={styles.mediaPlaceholder}></div>
              </div>
              <div className={styles.mediaRow}>
                <div className={styles.mediaPlaceholder}></div>
                <div className={styles.mediaPlaceholder}></div>
                <div className={styles.mediaPlaceholder}></div>
              </div>
            </motion.div>
          </div>
          <div className={styles.chatDetailsDeleteChatContainer}>
            <h4>Delete Chat</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
