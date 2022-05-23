import { View, Text, Image } from "react-native";
import styles from "./Contact.style";

export default function Contact(props) {
  return (
    <View style={styles.contactSuperContainer}>
      <View style={styles.contactContainer}>
        <View style={styles.contactStack}>
          <View style={styles.contactAvatarContainer}>
            <Image
              style={styles.contactAvatar}
              source={require("./assests/avatar.png")}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.contactUserNameText}>{props.userName}</Text>
            <Text style={styles.contactLastMsgText}>{props.lastMsg}</Text>
          </View>
        </View>
        <View style={styles.lastMsgDateContainer}>
          <Text style={styles.lastMsgDateText}>{props.date}</Text>
        </View>
      </View>
      <View style={styles.contactSeperator}></View>
    </View>
  );
}
