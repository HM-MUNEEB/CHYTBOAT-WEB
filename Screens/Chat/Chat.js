import {
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "./Chat.style";
import { useState, useRef, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconF from "react-native-vector-icons/Feather";
import { useAuth } from "../../context/authContext/authContext";
import { ReadMessages, SendMessages } from "../../FirebaseModules/Messages";
import { uid } from "uid";

export default function Chat({ navigation }) {
  const scrollViewRef = useRef();
  const [msg, setMsg] = useState("");
  const { user } = useAuth();
  //1 is current user
  const [MsgContent, setMsgContent] = useState([]);
  const [messages, setMessages] = useState(null);
  const [messages1, setMessages1] = useState([]);
  const [executed, setExecuted] = useState(false);

  const CHATUID = "efe2aa9c24e28fe3db8350fda5be4999";

  function handleGoBackBtn() {
    console.log("PRESSED GOBACK!!");
    navigation.goBack();
  }
  function handleInputMessage(e) {
    setMsg(e);
    console.log(msg);
  }
  useEffect(() => {
    ReadMessages(CHATUID, setMessages);
  }, []);
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
      SendMessages(CHATUID, msg, user.displayName);
      console.log("Message Sent!!!");
      setMsg("");
    }
  }
  function handleMessagesContent() {
    setMsgContent([]);
    messages1.map((item) => {
      const obj = item;
      var data = Object.values(obj)[0];
      console.log(data);
      setMsgContent((old) => [...old, data]);
    });
    console.log(MsgContent);
    return true;
  }
  function renderMessage(m) {
    console.log("USER: " + user.displayName);
    console.log("USER 2: " + m.Sender);
    const Sender = String(msg.Sender);
    const Res = user.displayName;
    if (Sender == Res) {
      return (
        <View style={styles.sentMessageContainer}>
          <View style={styles.sentMessageContentContainer}>
            <Text style={styles.sentMessageText}>{m.Message}</Text>
          </View>
          <Image source={require("./assets/avatar.png")} />
        </View>
      );
    } else if (msg.Sender != user.displayName) {
      return (
        <View style={styles.recievedMessageContainer}>
          <Image source={require("./assets/avatar.png")} />
          <View style={styles.messageContentContainer}>
            <Text style={styles.recievedMessageText}>{m.Message}</Text>
          </View>
        </View>
      );
    }
  }
  function handleMsgKey() {
    return uid(16);
  }
  // function autoReply() {
  //   if (msg == "hi") {
  //     setTimeout(() => {
  //       console.log("Message Recieved!!!");
  //       //Pushes the input Message "msg" to state array MsgContent
  //       setMsgContent((old) => [
  //         ...old,
  //         {
  //           key: msg + Date.now() + "bye",
  //           Avatar: "Defualt",
  //           Content: "hello",
  //           User: 2,
  //         },
  //       ]);
  //     }, 1000);
  //   } else if (msg == "bye") {
  //     setTimeout(() => {
  //       console.log("Message Recieved!!!");
  //       //Pushes the input Message "msg" to state array MsgContent
  //       setMsgContent((new1) => [
  //         ...new1,
  //         {
  //           key: msg + Date.now() + "bye",
  //           Avatar: "Defualt",
  //           Content: "bye",
  //           User: 2,
  //         },
  //       ]);
  //     }, 1000);
  //   } else {
  //     setTimeout(() => {
  //       console.log("Message Recieved!!!");
  //       //Pushes the input Message "msg" to state array MsgContent
  //       setMsgContent((old) => [
  //         ...old,
  //         {
  //           key: msg + Date.now() + "bye",
  //           Avatar: "Defualt",
  //           Content: "Bye Bro",
  //           User: 2,
  //         },
  //       ]);
  //     }, 1000);
  //   }
  // }
  return (
    <View style={styles.chat}>
      <View style={styles.chatHeader}>
        <View style={styles.headerContainer}>
          <View style={styles.navUserContent}>
            <Pressable
              onPress={handleGoBackBtn}
              style={styles.goBackNavigationBtn}
            >
              <Icon name="chevron-back" size={32} color="white" />
            </Pressable>
            <View style={styles.userContentContainer}>
              <Image
                style={styles.userAvatar}
                source={require("./assets/avatar.png")}
              />
              <View style={styles.userContent}>
                <Text style={styles.userNameText}>{user.displayName}</Text>
              </View>
            </View>
          </View>
          <IconE name="dots-three-vertical" size={32} color="white" />
        </View>
      </View>

      <ScrollView
        style={styles.messagesContainer}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        {executed ? (
          MsgContent.map((item) => (
            <View key={handleMsgKey()}>{renderMessage(item)}</View>
          ))
        ) : (
          <View></View>
        )}
      </ScrollView>

      <View style={styles.messageInputActionsContainer}>
        <View style={styles.actionContainer}>
          <View style={styles.inputFieldView}>
            <IconM
              style={styles.keyBoardIcon}
              name="keyboard-settings-outline"
              size={32}
              color="white"
            />
            <TextInput
              placeholder="Type a Message..."
              style={styles.messageInputField}
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              autoCorrect={false}
              multiline={true}
              autoCapitalize="none"
              autoFocus={false}
              selectionColor="#FF9D43"
              autoComplete="off"
              onChangeText={handleInputMessage}
              value={msg}
            />
          </View>
          <Pressable onPress={sendMessage} style={styles.sendMessageBtn}>
            <IconF name="send" size={32} color="#FF9D43" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
