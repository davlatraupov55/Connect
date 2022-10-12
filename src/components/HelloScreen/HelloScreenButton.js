import React from 'react';
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function HelloScreenButton(props){
    const navigation = useNavigation();
    return(
        <View style={{height: props.data.doHeight1, width:  props.data.doWidth1,  position: 'absolute', borderRadius: height/45, backgroundColor: props.data.dot1, left: props.data.dotPosition1, zIndex: 10,
justifyContent: 'center', alignItems: 'center' }} >
        <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')} style={{display: props.data.disp}} >
  <Text style={{color: 'white', fontSize: width/25}} >Начать</Text>
</TouchableOpacity>
</View>

    )
}