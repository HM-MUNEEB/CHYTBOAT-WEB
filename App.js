import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView } from 'react-native';
import RegisterScreen from './Screens/RegisterScreen';
import SetupProfile from './Screens/SetupProfile';
import SignInScreen from './Screens/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer  initialRouteName = "SignIn">
    <AuthStack.Navigator>
      <AuthStack.Screen options = {{headerShown: false}}  name='SignIn' component={SignInScreen}/>
      <AuthStack.Screen  options = {{headerShown: false}} name='Registration' component={RegisterScreen}/>
    </AuthStack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
