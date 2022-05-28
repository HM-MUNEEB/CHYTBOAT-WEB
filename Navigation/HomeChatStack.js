import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./Navbar/Navbar";
import Chat from "../Screens/Chat/Chat";

const Stack = createStackNavigator();

export default function HomeChatStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationTypeForReplace: "push" }}
    >
      <Stack.Screen name="Navbar" component={Navbar} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
