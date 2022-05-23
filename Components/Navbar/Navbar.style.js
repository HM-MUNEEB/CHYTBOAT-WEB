import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Navbar: {
    backgroundColor: "#1E1E1E",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255, 0.2)",
    position: "absolute",
    bottom: 0,
    height: 70,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navbarStack: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchTab: {},
  friendsTab: {},
});
