import React from 'react';
import { View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Vitae } from '../LangComponents/LangComponents';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Objective (){
const navigation = useNavigation();

    return(
<TouchableOpacity onPress={() => navigation.navigate('ObjectiveScreen')} >
<View style={{flexDirection: 'row'}} >
  <Image style={{height: height/32, width: height/25, marginRight: width/50}}  source={require('../img/data.png')} />
<Vitae/>
  </View>
</TouchableOpacity>
    )

}