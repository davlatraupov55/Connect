import React from "react";
import {TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MoreComplaint1 } from "../LangComponents/LangComponents";


export default function MoreButton1 (props){
    const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={()=> navigation.navigate('Complain1', {data: props.data })} >
 <MoreComplaint1/>
  </TouchableOpacity>
  )
  
  }