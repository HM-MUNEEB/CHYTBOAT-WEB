import {
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import styles from "./Home.style";
import Favorite from "../../Components/Favorites/Favorite";
import Contact from "../../Components/Contact/Contact";

export default function Home() {
  const favItems = [
    "Muneeb",
    "Samran",
    "Umer",
    "Jahangir",
    "Arsalan",
    "Raja Mareez",
  ];
  const contactList = [
    { userName: "munyyb", lastMsg: "hi there vero?", date: "11:53" },
    { userName: "umer", lastMsg: "ok. See you soon!", date: "11:45" },
    { userName: "saani", lastMsg: "Oo jul oye!", date: "10:30" },
    { userName: "rajaMareez", lastMsg: "Yar...!", date: "09:30" },
    { userName: "arsalanBhama", lastMsg: "oi oi oi!", date: "09:29" },
    { userName: "jahangi", lastMsg: "yhuck", date: "09:26" },
  ];
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
          <View style={styles.searchIcon}>
            <Icon name="settings-outline" size={25} color="white" />
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.homeContainer}
      >
        <View style={styles.superSection}>
          <View style={styles.superSectionHeader}>
            <Text style={styles.favoritesText}>Favorites</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.favContainer}
          >
            {favItems.map((item) => {
              return (
                <View style={styles.favItems} key={item}>
                  <Favorite name={item} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.contactListContainer}>
          {contactList.map((item) => {
            return (
              <Contact
                key={item.userName + item.lastMsg}
                userName={item.userName}
                lastMsg={item.lastMsg}
                date={item.date}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
