import 'react-native-url-polyfill/auto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnterCodeScreen from './screens/EnterCodeScreen';
import EnterNumberScreen from './screens/EnterNumberScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthContextWrapper from './contexts/AuthContext';
import HomeScreen from './screens/HomeScreen';
import CreateProfileScreen from './screens/CreateProfileScreen';
import AuthScreen from './screens/AuthScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <AuthContextWrapper>
      <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="EnterNumber" component={EnterNumberScreen} options={{headerShown: false}}/>
        <Stack.Screen name="EnterCode" component={EnterCodeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name="AuthScreen" component={AuthScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown: false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  </AuthContextWrapper>
    
   
  );
}

