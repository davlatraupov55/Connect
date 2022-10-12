import React from "react";
import { Dimensions, View,Text, TouchableOpacity} from "react-native"
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default function TeacherOtdel(props) {
   
    const navigation = useNavigation(); 

 const Next = async() =>{
        const response = await fetch('https://connecttf.uz/teachers.php', {
            method: 'post',
            header:{
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            body:JSON.stringify({
         division: props.data.name
    
                    })
            
          })
          const data2 = await response.json();
          try {
            await AsyncStorage.setItem('dataOtdel2', JSON.stringify(data2));
            
          } catch (e) {
           
            console.log('error set data')
          }
          try {
            await AsyncStorage.setItem('navigation', JSON.stringify(navigation));
            console.log(navigation)
          } catch (e) {
           
            console.log('error set navigation')
          }
          navigation.navigate('Рейтинг преподователя')

}

    return(
        <TouchableOpacity onPress={() => Next()
          }>
        <View  style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5, left: width/45, height: height/12, width: width-width/20, backgroundColor: 'white', borderRadius: 10, marginTop: height/75, justifyContent: 'center', alignItems: 'center', paddingLeft: width/50, paddingRight: width/50, position: 'relative'}}>
    <Text  style={{color: 'black', fontSize: height/48, textAlign: 'center'}} >{props.data.name}</Text>
        </View>
        </TouchableOpacity>
    )
}
