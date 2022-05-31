import {
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "./Chat.style";
import { useState, useRef } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconF from "react-native-vector-icons/Feather";

export default function Chat({ navigation }) {
  const scrollViewRef = useRef();
  const [msg, setMsg] = useState("");
  const [key, setKey] = useState("");
  //1 is current user
  const [MsgContent, setMsgContent] = useState([]);
  function handleGoBackBtn() {
    console.log("PRESSED GOBACK!!!");
    navigation.goBack();
  }
  function handleInputMessage(e) {
    setMsg(e);
    console.log(msg);
  }
  function sendMessage() {
    if (msg != " " && msg != "" && msg != null && msg != undefined) {
      //Pushes the input Message "msg" to state array MsgContent
      setMsgContent((old) => [
        ...old,
        {
          key: msg + Date.now() + "hi",
          Avatar: "Defualt",
          Content: msg,
          User: 1,
        },
      ]);
      setMsg("");
      console.log("Message Sent!!!");
      console.log(MsgContent);
      autoReply();
    }
  }
  function renderMessage(msg) {
    if (msg.User == 1) {
      return (
        <View style={styles.sentMessageContainer}>
          <View style={styles.sentMessageContentContainer}>
            <Text style={styles.sentMessageText}>{msg.Content}</Text>
          </View>
          <Image source={require("./assets/avatar.png")} />
        </View>
      );
    } else if (msg.User == 2) {
      return (
        <View style={styles.recievedMessageContainer}>
          <Image source={require("./assets/avatar.png")} />
          <View style={styles.messageContentContainer}>
            <Text style={styles.recievedMessageText}>{msg.Content}</Text>
          </View>
        </View>
      );
    }
  }
  function autoReply() {
    if (msg == "hi") {
      setTimeout(() => {
        console.log("Message Recieved!!!");
        //Pushes the input Message "msg" to state array MsgContent
        setMsgContent((old) => [
          ...old,
          {
            key: msg + Date.now() + "bye",
            Avatar: "Defualt",
            Content: "hello",
            User: 2,
          },
        ]);
      }, 1000);
    } else if (msg == "bye") {
      setTimeout(() => {
        console.log("Message Recieved!!!");
        //Pushes the input Message "msg" to state array MsgContent
        setMsgContent((new1) => [
          ...new1,
          {
            key: msg + Date.now() + "bye",
            Avatar: "Defualt",
            Content: "bye",
            User: 2,
          },
        ]);
      }, 1000);
    } else {
      setTimeout(() => {
        console.log("Message Recieved!!!");
        //Pushes the input Message "msg" to state array MsgContent
        setMsgContent((old) => [
          ...old,
          {
            key: msg + Date.now() + "bye",
            Avatar: "Defualt",
            Content: "jangi bsdk",
            User: 2,
          },
        ]);
      }, 1000);
    }
  }
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
                <Text style={styles.userNameText}>Munyyb</Text>
                <Text style={styles.lastActiveText}>5 mins ago</Text>
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
        {MsgContent.map((msg) => (
          <View key={msg.key + Date.now()}>{renderMessage(msg)}</View>
        ))}
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
