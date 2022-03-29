import Head from "next/head";
import React, { useState } from "react";
import ContactList from "./contactList/ContactList.js";
import styles from "./MainApp.module.css";
import Navbar from "./navbar/Navbar.js";
import SearchModule from "./searchModule/SearchModule.js";
import Chat from "./chat/chat.js";
import ChatDetails from "./chatDetails/ChatDetails.js";

export default function MainApp() {
  const [search, setSearch] = useState(false);
  const [contactListActive, setContactListActive] = useState(true);
  const [archiveActive, setArchiveActive] = useState(false);
  const [chatActive, setChatActive] = useState(false);
  const [chatDetails, setChatDetails] = useState(false);
  return (
    <div>
      <Head>
        <title>App-Console</title>
        <meta
          name="description"
          content="Message in the most most secure way possible with ent-to-end encription!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.appConsoleContainer}>
        <div className={styles.appConsoleStack}>
          {search ? <SearchModule setSearch={setSearch} /> : ""}
          <div className={styles.appConsoleNavContactListStack}>
            <Navbar
              setSearch={setSearch}
              searchStatus={search}
              setContactList={setContactListActive}
              contactListStatus={contactListActive}
              setArchiveList={setArchiveActive}
              archiveStatus={archiveActive}
            />
            {contactListActive ? (
              <ContactList setChatActive={setChatActive} />
            ) : (
              ""
            )}
          </div>
          <div className={styles.appConsoleFlexChatStack}>
            <Chat
              chatActive={chatActive}
              chatDetails={chatDetails}
              setChatDetails={setChatDetails}
            />
          </div>
          {chatDetails ? (
            <div className={styles.appConsoleFlexChatDetailsStack}>
              <ChatDetails setChatDetails={setChatDetails} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
