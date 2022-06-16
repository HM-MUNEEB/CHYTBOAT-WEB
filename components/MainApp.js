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
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

export default function MainApp() {
  const { user } = useAuth();
  const { loading, setLoading } = useLoading();
  const [search, setSearch] = useState(false);
  const [contactListActive, setContactListActive] = useState(true);
  const [archiveActive, setArchiveActive] = useState(false);
  const [chatActive, setChatActive] = useState(false);
  const [chatDetails, setChatDetails] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userName: "",
  });

  useEffect(() => {
    console.log("Main app user: ", user);
    if (user) {
      getUserInfo();
    }
  }, [user]);
  useEffect(() => {
    setLoading(true);
  }, []);
  async function getUserInfo() {
    const docRef = doc(db, "users_info", user.displayName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserInfo(docSnap.data());
      setLoading(false);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
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
                userName={userInfo.userName}
                setChatActive={setChatActive}
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
