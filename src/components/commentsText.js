import React from "react";
import { View, Dimensions, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {SETCOMMENT} from "../store/actionType";
import { useDispatch } from "react-redux";
import { Follow } from "../LangComponents/LangComponents";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default function CommentsText (props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const go = async() =>{
    const response = await fetch('https://connecttf.uz/news.php', {
        method: 'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
     news_id: props.data,


                })
        
      })
      const data = await response.json();
      dispatch({ type: SETCOMMENT, payload: data }); 
      navigation.navigate('Комментарии', {img: props.img })
    }

    return(
        <View style={{top: height/49, right: width/-2.7, position: 'relative'}} >
            <TouchableOpacity onPress={() => go()} >
  <Follow/>
            </TouchableOpacity>
        </View>
    )
}