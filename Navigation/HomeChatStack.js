import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./Navbar/Navbar";
import Chat from "../Screens/Chat/Chat";

const Stack = createStackNavigator();

export default function HomeChatStack() {
  const config = {
    animation: "spring",
    config: {
      stiffness: 5000,
      damping: 500,
      mass: 5,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        animationTypeForReplace: "push",
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    >
      <Stack.Screen name="Navbar" component={Navbar} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
