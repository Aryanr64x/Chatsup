import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";


const HomeStack = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
    
        headerShown: false,

    },
  
});

export default createAppContainer(HomeStack);