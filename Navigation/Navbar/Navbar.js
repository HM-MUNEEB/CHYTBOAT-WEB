import { Text, View } from "react-native";
import styles from "./Navbar.style";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Screens/Home/Home";
import Search from "../../Screens/Search/Search";
import Friends from "../../Screens/Friends/Friends";
import { useState } from "react";

const Tab = createBottomTabNavigator();
export default function Navbar() {
  const [route, setRoute] = useState("home");
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.Navbar,
        tabBarActiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        listeners={{
          tabPress: (e) => {
            setRoute("home");
          },
        }}
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Icon
              name="home-outline"
              color={route === "home" ? "white" : "rgba(255,255,255, 0.6)"}
              size={32}
            />
          ),
        }}
      />
      <Tab.Screen
        listeners={{
          tabPress: (e) => {
            setRoute("search");
          },
        }}
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Icon
              name="search"
              color={route === "search" ? "white" : "rgba(255,255,255, 0.6)"}
              size={32}
            />
          ),
        }}
      />
      <Tab.Screen
        listeners={{
          tabPress: (e) => {
            setRoute("friends");
          },
        }}
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: () => (
            <Icon
              name="person-outline"
              color={route === "friends" ? "white" : "rgba(255,255,255, 0.6)"}
              size={32}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
