import Head from "next/head";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactList from "./contactList/ContactList.js";
import styles from "./MainApp.module.css";
import Navbar from "./navbar/Navbar.js";
import SearchModule from "./searchModule/SearchModule.js";
import Chat from "./chat/chat.js";
import ChatDetails from "./chatDetails/ChatDetails.js";
import { useLoading } from "../context/loadingContext/loadingContext.js";
import Loading from "./loading/loading.js";
import { useAuth } from "../context/authContext/authContext.js";
import { GetCurrentUserInfo } from "../FirebaseModules/GetCurrentUserInfo.js";
import { ReadContactList } from "../FirebaseModules/ReadContactList.js";

export default function MainApp() {
  const { user } = useAuth();
  const { loading, setLoading } = useLoading();
  const [search, setSearch] = useState(false);
  const [contactListActive, setContactListActive] = useState(true);
  const [archiveActive, setArchiveActive] = useState(false);
  const [chatActive, setChatActive] = useState(true);
  const [chatDetails, setChatDetails] = useState(false);
  const [userData, setUserData] = useState("");
  const [userInfo, setUserInfo] = useState({
    userName: "",
  });
  const [contactList1, setContactList1] = useState([]);
  const [showContactList, setShowContactList] = useState([]);
  const [executed, setExecuted] = useState(false);

  useEffect(() => {
    console.log("Main app user: ", user);
    if (user) {
      GetCurrentUserInfo(user.displayName, setLoading, setUserInfo);
      ReadContactList(user.displayName, setLoading, setUserData);
    }
  }, [user]);
  useEffect(() => {
    setLoading(true);
  }, []);
  useEffect(() => {
    handleSetContactList();
    console.log("contact list: " + userData);
  }, [userData]);
  function handleSetContactList() {
    console.log("Contact List : " + contactList1);
    if (userData && !executed) {
      setContactList1(Object.entries(userData).map((e) => ({ [e[0]]: e[1] })));
      setExecuted(true);
    }
    var data;
    for (let i = 0; i < contactList1.length; i++) {
      const obj = contactList1[i];
      console.log(obj);
      var data = Object.values(obj)[0];
      console.log(data);
      setShowContactList((old) => [...old, data]);
    }
    console.log(showContactList);
  }
  return (
    <div>
      <Head>
        <title>App-Console</title>
        <meta
          name="description"
          content="ChytBoat in the most most secure way, possible to chat with ent-to-end encription!"
        />
      </Head>
      <div>{loading ? <Loading /> : ""}</div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={styles.appConsoleContainer}
      >
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
              <ContactList
                executed={executed}
                userName={userInfo.userName}
                setChatActive={setChatActive}
                showContactList={showContactList}
              />
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
      </motion.div>
    </div>
  );
}
