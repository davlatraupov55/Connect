import React from "react";
import { Dimensions, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AddNewComplaint} from '../LangComponents/LangComponents'

let height = Dimensions.get('window').height
let width = Dimensions.get('window').width

 export default function ComplainButton (){
  
   const navigation = useNavigation();
   const nav = async() => {
    await AsyncStorage.setItem('navigation', JSON.stringify(navigation));
    navigation.navigate('NewComplain')
   }
    return(
        
        <TouchableOpacity onPress={()=> nav()}  style={{height: height/20, left: width/1000, width: width/1.2, backgroundColor: '#0099cc', borderRadius: 12, justifyContent: 'center', alignItems: 'center', bottom: height/-4.8}} >

<AddNewComplaint/>
                
                   </TouchableOpacity> 
                  
    )
}
