import React from "react";
import {Dimensions, TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ComplaintJoin } from "../LangComponents/LangComponents";


let height = Dimensions.get('window').height

export default class ComplainJoinButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            };     
        }
    render(){

const Join = async() => {

    const id = await AsyncStorage.getItem('id')
    const response = await fetch('https://connecttf.uz/complaint.php', {
        method: 'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        
        body:JSON.stringify({
            command: 'subscribe',
            id: this.props.data,
            id_user: id

 })
 
 })
 const data = await response.json();
 if (data == 'Вы подписались на это заявления'){
     alert('Вы поддержали данную жалобу. Ваш отзыв сохранён анонимно')
 }

}



        return(
            <TouchableOpacity onPress={() => Join()}  style={{height: height/20, width: height/2, backgroundColor: '#0099cc', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: height/30}} >

<ComplaintJoin/>

  </TouchableOpacity> 
        )
    }
}