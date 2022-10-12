import React from 'react'
import {Image, Text, TouchableOpacity, Dimensions, View} from 'react-native'
import { useNavigation } from '@react-navigation/native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window'). width;


export default function Statement() {

    const navigation = useNavigation();
    return(

<View style={{height: height/17, width: width, marginTop: height/40, flexDirection: 'row',
alignItems: 'center', left: width/18 }} >
  <TouchableOpacity onPress={()=> navigation.navigate('StatementScreen')} style={{flexDirection: 'row',
alignItems: 'center'}} >
<Image source={require('../img/Statement.png')} style={{height: height/25, width: height/25}} />
<Text style={{fontSize: width/27, color: 'black', marginLeft: width/60}} >Заявление</Text>
</TouchableOpacity>
</View>
    )
}