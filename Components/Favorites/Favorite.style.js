import { StyleSheet } from "react-native";

export default StyleSheet.create({
  favContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  avatarPlaceholder: {},
  avatarImage: {
    width: 70,
    height: 70,
    borderColor: "#FF9D43",
    borderWidth: 1,
    borderRadius: 75,
  },
  userNameContainer: {
    width: 70,
    marginTop: 5,
  },
  userName: { color: "white", textAlign: "center" },
});
