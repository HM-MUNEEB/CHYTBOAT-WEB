import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/AuthScreen/Login/login";
import Register from "../Screens/AuthScreen/Register/register";

const Stack = createStackNavigator();

export default function LoginRegisterStack() {
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
      initialRouteName="Login"
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
