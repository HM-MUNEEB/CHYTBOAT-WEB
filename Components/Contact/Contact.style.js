import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contactSuperContainer: {},
  contactContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contactAvatarContainer: {},
  contactAvatar: {
    height: 60,
    width: 60,
  },
  contentContainer: {
    marginLeft: 15,
  },
  contactStack: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contactUserNameText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  contactLastMsgText: {
    color: "rgba(255,255,255,0.80)",
    fontSize: 14,
  },
  lastMsgDateContainer: {},
  lastMsgDateText: { color: "white" },
  contactSeperator: {
    height: 2,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.1)",
    marginVertical: 15,
  },
});
