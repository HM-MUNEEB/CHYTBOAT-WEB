import { StyleSheet } from "react-native";

export default StyleSheet.create({
  SearchContainer: {},
  header: {
    paddingTop: "10%",
    paddingHorizontal: "5%",
    backgroundColor: "#1E1E1E",
    height: 130,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContentContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInputFieldView: {
    backgroundColor: "#464646",
    width: 270,
    height: 45,
    borderRadius: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    paddingRight: 10,
  },
  searchInputField: {
    color: "white",
  },
  searchBtn: {
    height: 45,
    width: 60,
    backgroundColor: "#FF9D43",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnText: { color: "white", fontWeight: "bold" },
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
    height: 60,
    width: 60,
  },
  userNameText: {
    color: "white",
    fontSize: 18,
    marginLeft: 15,
  },
  iconStack: {},
});
