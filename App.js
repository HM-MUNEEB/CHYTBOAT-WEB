import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Navbar from "./Components/Navbar/Navbar.js";
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#252525",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navbar />
    </NavigationContainer>
  );
}
