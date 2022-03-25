import Image from "next/image";
import React, { useState } from "react";
import styles from "./ContactList.module.css";
import Avatar from "./assets/avatar.png";
import ContactCard from "./contactCard/ContactCard";

export default function ContactList() {
  const [searchContactList, setSearchContactList] = useState(false);
  return (
    <div className={styles.contactListContainer}>
      <div className={styles.contactListContainerUpparArea}>
        <div className={styles.userInfoSection}>
          <div className={styles.userInfo}>
            <div className={styles.avatarPlaceHolder}>
              <div className={styles.activeProfile}></div>
              <Image src={Avatar} />
            </div>
            <h3>Munyyb</h3>
          </div>
          <div className={styles.optionsBtn}>
            <svg
              width="6"
              height="27"
              viewBox="0 0 6 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M6 23.8846C6 24.7109 5.68393 25.5033 5.12132 26.0875C4.55871 26.6718 3.79565 27 3 27C2.20435 27 1.44129 26.6718 0.878679 26.0875C0.31607 25.5033 0 24.7109 0 23.8846C0 23.0584 0.31607 22.266 0.878679 21.6817C1.44129 21.0975 2.20435 20.7692 3 20.7692C3.79565 20.7692 4.55871 21.0975 5.12132 21.6817C5.68393 22.266 6 23.0584 6 23.8846ZM6 13.5C6 14.3263 5.68393 15.1187 5.12132 15.7029C4.55871 16.2872 3.79565 16.6154 3 16.6154C2.20435 16.6154 1.44129 16.2872 0.878679 15.7029C0.31607 15.1187 0 14.3263 0 13.5C0 12.6737 0.31607 11.8813 0.878679 11.2971C1.44129 10.7128 2.20435 10.3846 3 10.3846C3.79565 10.3846 4.55871 10.7128 5.12132 11.2971C5.68393 11.8813 6 12.6737 6 13.5ZM6 3.11538C6 3.94164 5.68393 4.73405 5.12132 5.31829C4.55871 5.90254 3.79565 6.23077 3 6.23077C2.20435 6.23077 1.44129 5.90254 0.878679 5.31829C0.31607 4.73405 0 3.94164 0 3.11538C0 2.28913 0.31607 1.49672 0.878679 0.912475C1.44129 0.328227 2.20435 0 3 0C3.79565 0 4.55871 0.328227 5.12132 0.912475C5.68393 1.49672 6 2.28913 6 3.11538Z"
                fill="white"
              />
            </svg>
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
            <svg
              width="22"
              height="22"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0815 16.8077C20.6549 14.6604 21.3596 11.998 21.0547 9.35332C20.7497 6.70862 19.4575 4.27661 17.4367 2.54384C15.4158 0.81107 12.8153 -0.0946645 10.1554 0.00783994C7.49555 0.110344 4.97245 1.21353 3.0909 3.09668C1.20936 4.97984 0.108137 7.50409 0.00755033 10.1644C-0.0930364 12.8247 0.814431 15.425 2.5484 17.4449C4.28237 19.4648 6.71497 20.7554 9.35951 21.0585C12.0041 21.3616 14.6655 20.6549 16.8115 19.0797H16.8098C16.8586 19.1447 16.9106 19.2065 16.9691 19.2666L23.2251 25.5235C23.5298 25.8284 23.9431 25.9998 24.3742 26C24.8052 26.0002 25.2187 25.829 25.5236 25.5243C25.8285 25.2196 25.9998 24.8062 26 24.3751C26.0002 23.944 25.8291 23.5305 25.5244 23.2255L19.2684 16.9686C19.2103 16.9098 19.1478 16.8555 19.0815 16.8061V16.8077ZM19.5007 10.5606C19.5007 11.7344 19.2696 12.8967 18.8204 13.9812C18.3713 15.0656 17.713 16.051 16.8831 16.881C16.0532 17.711 15.068 18.3694 13.9837 18.8186C12.8994 19.2678 11.7372 19.499 10.5636 19.499C9.38992 19.499 8.22776 19.2678 7.14346 18.8186C6.05915 18.3694 5.07393 17.711 4.24403 16.881C3.41414 16.051 2.75583 15.0656 2.3067 13.9812C1.85756 12.8967 1.6264 11.7344 1.6264 10.5606C1.6264 8.18996 2.56799 5.91644 4.24403 4.24016C5.92008 2.56388 8.19328 1.62216 10.5636 1.62216C12.9338 1.62216 15.207 2.56388 16.8831 4.24016C18.5591 5.91644 19.5007 8.18996 19.5007 10.5606Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.contactCardsStack}>
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
          activeChat={true}
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
        <ContactCard
          imageadd={Avatar}
          userName="username"
          lastMsg="Hello world!"
          msgDate="11:46"
        />
      </div>
    </div>
  );
}
