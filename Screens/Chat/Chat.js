import { Text, View, Image, Pressable } from "react-native";
import styles from "./Chat.style";
import Icon from "react-native-vector-icons/Ionicons";
import IconE from "react-native-vector-icons/Entypo";

export default function Chat({ navigation }) {
  function handleGoBackBtn() {
    console.log("PRESSED GOBACK!!!");
    navigation.goBack();
  }
  return (
    <View style={styles.chat}>
      <View style={styles.chatHeader}>
        <View style={styles.headerContainer}>
          <View style={styles.navUserContent}>
            <Pressable
              onPress={handleGoBackBtn}
              style={styles.goBackNavigationBtn}
            >
              <Icon name="chevron-back" size={32} color="white" />
            </Pressable>
            <View style={styles.userContentContainer}>
              <Image
                style={styles.userAvatar}
                source={require("./assets/avatar.png")}
              />
              <View style={styles.userContent}>
                <Text style={styles.userNameText}>Munyyb</Text>
                <Text style={styles.lastActiveText}>5 mins ago</Text>
              </View>
            </View>
          </View>
          <IconE name="dots-three-vertical" size={32} color="white" />
        </View>
      </View>
    </View>
  );
}
