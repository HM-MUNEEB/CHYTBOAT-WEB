import { StyleSheet } from "react-native";

export default StyleSheet.create({
  home: {},
  homeContainer: {
    height: "100%",
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
    marginRight: 10,
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
  superSectionHeader: {
    paddingHorizontal: "5%",
  },
  favoritesText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  favContainer: {
    marginTop: 15,
    paddingLeft: 15,
  },
  favItems: {
    marginLeft: 10,
  },
  contactListContainer: {
    backgroundColor: "#1E1E1E",
    height: "100%",
    paddingHorizontal: "5%",
    paddingTop: 20,
    marginBottom: 70,
  },
});
