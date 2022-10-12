import React from "react";
import {Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {SETCOMMENT} from "../store/actionType";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CommentTouch (props) {
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
        <TouchableOpacity onPress={() => go() } >
        <Image style={{ height: '100%', width: '98%', position: 'relative', borderRadius: 15}}  source={{uri: props.imgN}}  />  
        </TouchableOpacity>
    )
}