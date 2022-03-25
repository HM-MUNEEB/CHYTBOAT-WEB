import Head from "next/head";
import React, { useState } from "react";
import ContactList from "./contactList/ContactList.js";
import styles from "./MainApp.module.css";
import Navbar from "./navbar/Navbar.js";
import SearchModule from "./searchModule/SearchModule.js";
import Chat from "./chat/chat.js";

export default function MainApp() {
  const [search, setSearch] = useState(false);
  const [contactListActive, setContactListActive] = useState(true);
  const [archiveActive, setArchiveActive] = useState(false);
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
        {search ? <SearchModule setSearch={setSearch} /> : ""}
        <Navbar
          setSearch={setSearch}
          searchStatus={search}
          setContactList={setContactListActive}
          contactListStatus={contactListActive}
          setArchiveList={setArchiveActive}
          archiveStatus={archiveActive}
        />
        {contactListActive ? <ContactList /> : ""}
        <Chat chatActive={true} />
      </div>
    </div>
  );
}
