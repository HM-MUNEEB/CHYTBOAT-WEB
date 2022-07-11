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
  const [search, setSearch] = useState(false); //Check when to show Seach Module
  const [contactListActive, setContactListActive] = useState(true);
  const [archiveActive, setArchiveActive] = useState(false); //Check when to show archive Module (no implemented as of right now)
  const [chatDetails, setChatDetails] = useState(false); //Check when to show chat details in chat Module
  const [userData, setUserData] = useState(""); //Initial Data Retrieval from ReadContactList FB Module
  const [userInfo, setUserInfo] = useState({
    userName: "",
  }); //Initial Data Retrieval from GetCurrentUserInfio FB Module
  const [contactList1, setContactList1] = useState([]); // Initial Formatting of userData
  const [showContactList, setShowContactList] = useState([]); // Final Formated useable ContactList Data
  const [executed, setExecuted] = useState(false); // Checks if the formated have been done or not
  const [chatUser, setChatUser] = useState(""); // Global Chat user
  const [userInfoCheck, setUserInfoCheck] = useState(false);
  const [userDataCheck, setUserDataCheck] = useState(false);

  //Sets Loading to true on Component Mount
  useEffect(() => {
    setLoading(true);
  }, []);

  //Gets contactlist when user object retrieval becomes sucessfull
  useEffect(() => {
    console.log("Main app user: ", user);
    if (user) {
      GetCurrentUserInfo(user.displayName, setUserInfoCheck, setUserInfo);
      ReadContactList(user.displayName, setUserDataCheck, setUserData);
    }
  }, [user]);

  //When & if userInfoCheck & userDataCheck becomes trues the loading vanishes
  useEffect(() => {
    if (userDataCheck && userInfoCheck) {
      setLoading(false);
    }
  }, [userDataCheck, userInfoCheck]);

  //When contactlist changes, following formats object of objects to numerable array
  useEffect(() => {
    if (userData && !executed) {
      setContactList1(Object.entries(userData).map((e) => ({ [e[0]]: e[1] })));
    }
  }, [userData]);

  //When contactlist becomes numerable array, following formats nested objects in numerable array of objects form
  useEffect(() => {
    console.log("Contact List 1: ");
    console.log(contactList1);
    const check = handleSetContactList();
    if (check) {
      setExecuted(true);
    }
  }, [contactList1]);

  function handleSetContactList() {
    setShowContactList([]);
    var data;
    for (let i = 0; i < contactList1.length; i++) {
      const obj = contactList1[i];
      console.log(obj);
      var data = Object.values(obj)[0];
      console.log(data);
      setShowContactList((old) => [...old, data]);
    }
    console.log("FINAL:");
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
                setChatUser={setChatUser}
                chatUser={chatUser}
                handleSetContactList={handleSetContactList}
                executed={executed}
                userName={userInfo.userName}
                showContactList={showContactList}
              />
            ) : (
              ""
            )}
          </div>
          <div className={styles.appConsoleFlexChatStack}>
            <Chat
              chatUser={chatUser}
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
