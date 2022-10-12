import React from 'react';
import {
  Dimensions,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function RegToSingInButton(){
    const navigation = useNavigation();
    return(
<Text onPress={() => navigation.navigate('SingInScreen')} style={{fontSize: width/30, marginBottom: height/35}} >У меня есть аккаунт</Text>
    )
}