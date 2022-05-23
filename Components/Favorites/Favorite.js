import { View, Text, Image } from "react-native";
import styles from "./Favorite.style";

export default function Favorite(props) {
  return (
    <View style={styles.favContainer}>
      <View style={styles.avatarPlaceholder}>
        <Image
          style={styles.avatarImage}
          source={require("./assets/imgAvatar.png")}
        />
      </View>
      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>{props.name}</Text>
      </View>
    </View>
  );
}
