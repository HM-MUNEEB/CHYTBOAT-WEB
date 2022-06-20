import { StyleSheet } from "react-native";

export default StyleSheet.create({
  home: {},
  homeContainer: {
    marginBottom: 110,
  },
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
  searchIcon: {
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
    marginVertical: 10,
  },
  welcomeMsgContainer: {
    marginHorizontal: "2%",
    marginVertical: 20,
  },
  welcomeMsg: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  userGreeting: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
  },

  superSectionHeader: {
    paddingHorizontal: "5%",
  },
  contactListContainer: {
    backgroundColor: "#1E1E1E",
    height: "100%",
    paddingHorizontal: "5%",
    paddingTop: 20,
    marginBottom: 70,
  },
});
