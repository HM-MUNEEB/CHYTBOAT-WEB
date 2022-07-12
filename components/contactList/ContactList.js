import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./ContactList.module.css";
import Avatar from "./assets/avatar.png";
import ContactCard from "./contactCard/ContactCard";
import ThemeToggle from "../themeToggle/themeToggle";
import { BiRefresh } from "react-icons/bi";
import { uid } from "uid";

export default function ContactList(props) {
  const [searchContactList, setSearchContactList] = useState(false);
  console.log("NESTED:");
  console.log(props.showContactList);
  function handleKey() {
    return uid(16);
  }
  return (
    <div className={styles.contactListContainer}>
      <div className={styles.contactListContainerUpparArea}>
        <div className={styles.userInfoSection}>
          <div className={styles.userInfo}>
            <div className={styles.avatarPlaceHolder}>
              <div className={styles.activeProfile}></div>
              <Image src={Avatar} />
            </div>

            <h3>{props.userName ? props.userName.displayName : ""}</h3>
          </div>
          <div className={styles.themeToggle}>
            <ThemeToggle size={40} />
          </div>
        </div>

        <div className={styles.messagesAndSeacrhContainer}>
          {searchContactList ? (
            <div className={styles.SearchContactListContainer}>
              <input
                type="text"
                name="Search from your contacts"
                placeholder="Search from your contacts..."
              />
            </div>
          ) : (
            <div className={styles.messagesHeadingLine}>
              <h2>Messages</h2>
              <div className={styles.UnreadMessagesIndicator}></div>
            </div>
          )}

          <a onClick={() => setSearchContactList(!searchContactList)}>
            <div className={styles.contactListSearchIcon}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0815 16.8077C20.6549 14.6604 21.3596 11.998 21.0547 9.35332C20.7497 6.70862 19.4575 4.27661 17.4367 2.54384C15.4158 0.81107 12.8153 -0.0946645 10.1554 0.00783994C7.49555 0.110344 4.97245 1.21353 3.0909 3.09668C1.20936 4.97984 0.108137 7.50409 0.00755033 10.1644C-0.0930364 12.8247 0.814431 15.425 2.5484 17.4449C4.28237 19.4648 6.71497 20.7554 9.35951 21.0585C12.0041 21.3616 14.6655 20.6549 16.8115 19.0797H16.8098C16.8586 19.1447 16.9106 19.2065 16.9691 19.2666L23.2251 25.5235C23.5298 25.8284 23.9431 25.9998 24.3742 26C24.8052 26.0002 25.2187 25.829 25.5236 25.5243C25.8285 25.2196 25.9998 24.8062 26 24.3751C26.0002 23.944 25.8291 23.5305 25.5244 23.2255L19.2684 16.9686C19.2103 16.9098 19.1478 16.8555 19.0815 16.8061V16.8077ZM19.5007 10.5606C19.5007 11.7344 19.2696 12.8967 18.8204 13.9812C18.3713 15.0656 17.713 16.051 16.8831 16.881C16.0532 17.711 15.068 18.3694 13.9837 18.8186C12.8994 19.2678 11.7372 19.499 10.5636 19.499C9.38992 19.499 8.22776 19.2678 7.14346 18.8186C6.05915 18.3694 5.07393 17.711 4.24403 16.881C3.41414 16.051 2.75583 15.0656 2.3067 13.9812C1.85756 12.8967 1.6264 11.7344 1.6264 10.5606C1.6264 8.18996 2.56799 5.91644 4.24403 4.24016C5.92008 2.56388 8.19328 1.62216 10.5636 1.62216C12.9338 1.62216 15.207 2.56388 16.8831 4.24016C18.5591 5.91644 19.5007 8.18996 19.5007 10.5606Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.contactCardsStack}>
        <div>{}</div>
        {props.showContactList ? (
          props.showContactList.map((item) => {
            return (
              <div
                key={handleKey()}
                className={styles.contactCardItem}
                onClick={() => {
                  props.setChatUser(item);
                }}
              >
                <ContactCard
                  chatUser={props.chatUser}
                  imageadd={Avatar}
                  userName={item.name}
                />
              </div>
            );
          })
        ) : (
          <div className={styles.contactCards}>
            <div className={styles.noContactStack}>
              <h5 className={styles.noContactList}>
                You do not have any contacts, add contact from search bar and
                start chatting !!!
              </h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
