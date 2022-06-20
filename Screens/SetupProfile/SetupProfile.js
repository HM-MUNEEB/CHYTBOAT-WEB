import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";
import Account from "react-native-vector-icons/MaterialCommunityIcons";
import Contacts from "react-native-vector-icons/MaterialIcons";
import styles from "./SetupProfile.style";
import { useAuth } from "../../context/authContext/authContext";

export default function SetupProfile({ navigation }) {
  const { user } = useAuth();
  return (
    <View style={styles.Layout}>
      <View style={styles.header}>
        <View style={styles.headerContentContainer}>
          <Pressable onPress={() => navigation.navigate("Navbar")}>
            <IconE name="cross" size={40} color="white" style={styles.IconE} />
          </Pressable>
          <Text style={styles.headerText}>Setup your Profile</Text>
          <Pressable
            style={styles.nextBtn}
            onPress={() => navigation.navigate("Navbar")}
          >
            <Text style={styles.nextBtnText}>Save</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.Body}>
        <View style={styles.avatarContainer}>
          <View style={styles.Avatar}>
            <Account
              name="account-outline"
              size={90}
              color="rgba(255,255,255,0.8)"
            />
          </View>
          <View style={styles.uploadBtnContainer}>
            <Account name="file-upload-outline" size={28} color="black" />
          </View>
        </View>
        <View style={styles.Info}>
          <View style={styles.IconBox}>
            <Account
              name="account"
              size={32}
              color="rgba(255,255,255, 0.8)"
              style={styles.IconAccount}
            />
          </View>
          <View style={styles.TextInfo}>
            <Text style={styles.LowText}>Username</Text>
            <Text style={styles.HighText}>@{user.displayName}</Text>
            <Text style={styles.LowText}>
              This username can not be changed!
            </Text>
          </View>
        </View>
        <View style={styles.Info}>
          <View style={styles.IconBox}>
            <Contacts
              name="perm-contact-cal"
              size={32}
              color="rgba(255,255,255, 0.8)"
              style={styles.IconAccount}
            />
          </View>
          <View style={styles.TextInfo}>
            <Text style={styles.LowText}>Email</Text>
            <Text style={styles.HighText}>{user.email}</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
