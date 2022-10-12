import React from "react";
import { View, Text, Image, Dimensions} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";
import {useDispatch} from "react-redux";
import {SETSETTINGSDATA} from "../store/actionType";


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default function HeaderNavigationComponent(props){
const navigation = useNavigation();
const dispatch = useDispatch();

const Press = () => {
    dispatch({ type: SETSETTINGSDATA, payload: props.data }); 
    navigation.navigate('settings')
}

return(
    <View style={{height: height/11, width: width, backgroundColor: '#FFF', top: 0, alignItems: 'center', display: 'flex', flexDirection: 'row', position: 'relative', marginBottom: -height/9.1}} >
    <View style={{height: height/13, width: height/13, justifyContent: 'center', alignItems: 'center', display:'flex', position: 'relative', left: width/35}}>
<Image style={{ height: '100%', width: '100%', position: 'relative', borderRadius: 20}} source={{uri: props.data.img}}  />
</View>
<TouchableOpacity  onPress={()=> Press()}  style={{width: width/1.4,}} >
<Text style={{color: 'black', fontWeight: 'bold', fontSize: width/21, left: width/20, zIndex: 10000 }} >{props.data.name} {props.data.surname}</Text>
</TouchableOpacity>
</View>
)
}