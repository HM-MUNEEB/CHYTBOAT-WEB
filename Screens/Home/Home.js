import {
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import react, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import styles from "./Home.style";
import Contact from "../../Components/Contact/Contact";
import { useAuth } from "../../context/authContext/authContext";
export default function Home({ navigation }) {
  const { user, logout } = useAuth();
  const contactList = [
    { userName: "munyyb", lastMsg: "hi there vero?", date: "11:53" },
    { userName: "umer", lastMsg: "ok. See you soon!", date: "11:45" },
    { userName: "saani", lastMsg: "Oo jul oye!", date: "10:30" },
    { userName: "rajaMareez", lastMsg: "Yar...!", date: "09:30" },
    { userName: "arsalanBhama", lastMsg: "oi oi oi!", date: "09:29" },
    { userName: "jahangi", lastMsg: "yhuck", date: "09:26" },
  ];
  useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
    console.log("ROOT USER: " + user);
  }, [user]);

  function handleContactPress() {
    console.log("PRESSED");
    navigation.navigate("Chat");
  }
  function handleLogout() {
    logout();
  }

  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <View style={styles.appName}>
          <Text style={styles.appNameText}>Chytboat</Text>
        </View>
        <View style={styles.headerContentContainer}>
          <View style={styles.userAvatar}>
            <Image source={require("./assets/avatar.png")} />
          </View>
          <Pressable onPress={handleLogout}>
            <View style={styles.searchIcon}>
              <IconE name="logout" size={25} color="white" />
            </View>
          </Pressable>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.homeContainer}
      >
        <View style={styles.superSection}>
          <View style={styles.superSectionHeader}>
            <View style={styles.welcomeMsgContainer}>
              <Text style={styles.welcomeMsg}>Welcome To ChytBoat,</Text>
              {user ? (
                <Text style={styles.userGreeting}>{user.displayName}</Text>
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
        </View>
        <View style={styles.contactListContainer}>
          {contactList.map((item) => {
            return (
              <Pressable
                key={item.userName + item.lastMsg}
                onPress={handleContactPress}
              >
                <Contact
                  userName={item.userName}
                  lastMsg={item.lastMsg}
                  date={item.date}
                />
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
