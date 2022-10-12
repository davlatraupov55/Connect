import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tpage from "./screensNavigator";
import Login from '../screens/Login';
import FirstClientScreen from '../screens/firstClientSceen';



const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator(
    {
      Log: FirstClientScreen,
      Tpage: Tpage,
      Login: Login
    },
    {
      initialRouteName: 'Log',
      defaultNavigationOptions: stackNavigatorOptions
    },
    
  );

  export default createAppContainer(AppNavigator); 