import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./login.style";
import { useAuth } from "../../../context/authContext/authContext";

const Login = ({ navigation }) => {
  const { login, user } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    if (user) {
      if (user.displayName) {
        navigation.navigate("SetupProfile");
      }
    }
    console.log("ROOT USER: " + user);
  }, [user]);

  function handleLogin(email, password) {
    login(email, password);
  }

  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.logoContainer}>
        <View>
          <Image style={styles.img} source={require("../assets/logo.png")} />
        </View>
        <View>
          <Text style={styles.text}>ChytBoat</Text>
        </View>
      </View>
      <View>
        <View style={styles.signinst}>
          <View style={styles.seperatorStack}>
            <View style={styles.seperatorStart}></View>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 24,
                  color: "white",
                }}
              >
                Sign In
              </Text>
            </View>
            <View style={styles.seperatorEnd}></View>
          </View>
          <View style={styles.inputFieldFirstChild}>
            <Text style={styles.userText}>Email</Text>
            <TextInput
              style={styles.textI}
              placeholder="Enter your email..."
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              onChangeText={(e) => setEmail(e)}
            />
          </View>

          <View style={styles.inputFieldLastChild}>
            <Text style={styles.userText}>Password</Text>
            <TextInput
              style={styles.textI}
              placeholder="Enter your Password"
              secureTextEntry={true}
              placeholderTextColor={"rgba(255,255,255,0.4)"}
              onChangeText={(e) => setPassword(e)}
            />
          </View>
          <Pressable
            style={styles.pressStyleSign}
            onPress={handleLogin(email, password)}
          >
            <Text style={styles.pressStyleText}>Sign In</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.btmContainer}>
        <View>
          <Text
            style={{ color: "white", textAlign: "center", marginBottom: 10 }}
          >
            Forgot your Password?
          </Text>
        </View>
        <Pressable
          style={styles.pressStyleReg}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.pressStyleText}>Register</Text>
        </Pressable>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Login;
