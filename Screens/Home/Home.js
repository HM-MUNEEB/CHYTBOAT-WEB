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
import { ReadContactList } from "../../FirebaseModules/ReadContactList";
import { useLoading } from "../../context/loadingContext/loadingContext";
export default function Home({ navigation }) {
  const { user, logout } = useAuth();
  const { setLoading } = useLoading();
  const [userData, setUserData] = useState("");
  const [contactList1, setContactList1] = useState([]);
  const [showContactList, setShowContactList] = useState([]);
  const [executed, setExecuted] = useState(false);
  useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
    console.log("ROOT USER: " + user);
  }, [user]);
  useEffect(() => {
    if (user) {
      ReadContactList(user.displayName, setLoading, setUserData);
    }
  }, [user]);
  useEffect(() => {
    handleSetContactList();
  }, [userData]);

  function handleContactPress(UUID, name) {
    console.log("PRESSED");
    navigation.navigate("Chat");
  }
  function handleLogout() {
    logout();
  }
  function handleSetContactList() {
    console.log("Contact List : " + contactList1);
    if (userData && !executed) {
      setContactList1(Object.entries(userData).map((e) => ({ [e[0]]: e[1] })));
      setExecuted(true);
    }
    var data;
    for (let i = 0; i < contactList1.length; i++) {
      const obj = contactList1[i];
      console.log(obj);
      var data = Object.values(obj)[0];
      console.log(data);
      setShowContactList((old) => [...old, data]);
    }
    console.log(showContactList);
  }

  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <View style={styles.appName}>
          <Text style={styles.appNameText}>Chytboat</Text>
        </View>
        <View style={styles.headerContentContainer}>
          <Pressable onPress={handleSetContactList}>
            <View style={styles.userAvatar}>
              <Image source={require("./assets/avatar.png")} />
            </View>
          </Pressable>
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
          {executed ? (
            showContactList.map((item) => {
              return (
                <Pressable key={item.UUID} onPress={handleContactPress}>
                  <Contact userName={item.name} />
                </Pressable>
              );
            })
          ) : (
            <View></View>
          )}
          {/* <Pressable onPress={handleContactPress}>
            <Contact userName="Munyyb" />
          </Pressable>
          <Pressable onPress={handleContactPress}>
            <Contact userName="Umer" />
          </Pressable>
          <Pressable onPress={handleContactPress}>
            <Contact userName="Saani" />
          </Pressable>
          <Pressable onPress={handleContactPress}>
            <Contact userName="Moeen" />
          </Pressable> */}
        </View>
      </ScrollView>
    </View>
  );
}
