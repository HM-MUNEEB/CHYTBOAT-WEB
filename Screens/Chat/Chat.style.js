import { StyleSheet } from "react-native";

export default StyleSheet.create({
  chat: {
    height: "100%",
  },
  chatHeader: {
    width: "100%",
    paddingTop: "10%",
    paddingHorizontal: "5%",
    backgroundColor: "#1E1E1E",
    height: 130,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navUserContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  goBackNavigationBtn: {},
  userContentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  userAvatar: {
    height: 50,
    width: 50,
  },
  userContent: {
    marginLeft: 10,
  },
  userNameText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  lastActiveText: {
    color: "rgba(000,255,000,0.65)",
    fontSize: 12,
  },
  messagesContainer: {
    width: "100%",
    paddingHorizontal: "5%",
    marginBottom: 75,
  },
  //Recieved Message
  recievedMessageContainer: {
    minWidth: 30,
    maxWidth: 270,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  messageContentContainer: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  recievedMessageText: { color: "white" },

  //Sent Message
  sentMessageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  sentMessageContentContainer: {
    minWidth: 30,
    maxWidth: 270,
    marginRight: 10,
    padding: 10,
    backgroundColor: "#FF9D43",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  sentMessageText: { color: "white" },

  // Input Actions
  messageInputActionsContainer: {
    minHeight: 75,
    maxHeight: 100,
    paddingHorizontal: "5%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#1E1E1E",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  actionContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  keyBoardIcon: {
    marginHorizontal: 10,
  },
  inputFieldView: {
    backgroundColor: "#292929",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 50,
    paddingVertical: 5,
    flex: 1,
    borderRadius: 5,
  },
  messageInputField: {
    color: "white",
    width: "80%",
  },
  sendMessageBtn: {
    marginLeft: 10,
  },
});
