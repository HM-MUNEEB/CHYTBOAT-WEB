import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    paddingTop: "10%",
    paddingHorizontal: "5%",
    backgroundColor: "#1E1E1E",
    height: 130,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appName: {},
  appNameText: {
    color: "white",
    fontSize: 26,
  },
  headerContentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  settingIcon: {
    backgroundColor: "#4B4B4B",
    height: 40,
    width: 40,
    marginLeft: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userAvatar: {},
  superSection: {
    paddingHorizontal: "5%",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  addContactText: {
    color: "white",
    fontSize: 22,
    marginLeft: 10,
  },
  resultContactContainer: {
    marginTop: 20,
  },
  resultContact: {
    width: "100%",
    height: 100,
    backgroundColor: "#1E1E1E",
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  contactStack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contactAvatar: {
    height: 55,
    width: 55,
  },
  userNameText: {
    color: "white",
    fontSize: 18,
    marginLeft: 15,
  },
  iconStack: {},
});
