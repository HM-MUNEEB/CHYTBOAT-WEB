import { StyleSheet } from "react-native";

export default StyleSheet.create({
  chat: {},
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
});
