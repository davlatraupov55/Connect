import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tpage from './TabNavigator'
import HelloScreen from '../Screens/HelloScreen';
import PinScreen from '../Screens/PinScreen';
import RegistrationScreen from '../Screens/RegistrationScreen'
import SingInScreen from '../Screens/SingInScreen'
import RoutName from '../Identificator';



const Stack = createNativeStackNavigator();


function AppNavigator() {
  return (

    <Stack.Navigator initialRouteName={RoutName} screenOptions={{headerShown: false}}>
      <Stack.Screen name="HelloScreen" component={HelloScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="HomeScreen" component={Tpage} />
      <Stack.Screen name="SingInScreen" component={SingInScreen} />
      <Stack.Screen name="PinScreen" component={PinScreen}/>
    </Stack.Navigator>
  );
}

export default AppNavigator