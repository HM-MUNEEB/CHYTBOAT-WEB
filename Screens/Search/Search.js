import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import styles from "./Search.style";
import Icon from "react-native-vector-icons/Ionicons";
import IconAnt from "react-native-vector-icons/AntDesign";
import { useState } from "react";

export default function Search() {
  const [inputText, setInputText] = useState("");
  const resultedContacts = [{ userName: "munyyb" }, { userName: "umer" }];

  function handleTextChange(e) {
    setInputText(e);
  }

  return (
    <View style={styles.SearchContainer}>
      <View style={styles.header}>
        <View style={styles.headerContentContainer}>
          <View style={styles.searchInputFieldView}>
            <View style={styles.searchIcon}>
              <Icon name="search" size={20} color="white" />
            </View>
            <TextInput
              placeholder="Search by username or email..."
              style={styles.searchInputField}
              placeholderTextColor={"rgba(255,255,255,0.5)"}
              autoCorrect={false}
              multiline={false}
              autoCapitalize="none"
              autoFocus={true}
              selectionColor="#FF9D43"
              autoComplete="off"
              onChangeText={handleTextChange}
            />
          </View>
          <Pressable style={styles.searchBtn}>
            <Text style={styles.searchBtnText}>Search</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={styles.superSection}>
          <IconAnt name="contacts" size={30} color="white" />
          <Text style={styles.addContactText}>Add Contact</Text>
        </View>
        <View style={styles.resultContactContainer}>
          {inputText != ""
            ? resultedContacts.map((contact) => {
                return (
                  <View key={contact.userName} style={styles.resultContact}>
                    <View style={styles.contactStack}>
                      <Image
                        style={styles.contactAvatar}
                        source={require("./assets/avatar.png")}
                      />
                      <Text style={styles.userNameText}>
                        {contact.userName}
                      </Text>
                    </View>
                    <View style={styles.iconStack}>
                      <Icon
                        name="md-person-add-outline"
                        size={32}
                        color="#FF9D43"
                      />
                    </View>
                  </View>
                );
              })
            : null}
        </View>
      </ScrollView>
    </View>
  );
}
