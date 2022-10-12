import React from "react";
import { Dimensions, View, Image, ScrollView, Text} from "react-native"
import StarTeacher from "../components/StarsTecher";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";
import { TeacherMore } from "../LangComponents/LangComponents";

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;


export default function TeacherRatingComponent(props) {

    const navigation = useNavigation(); 

 const Next = async() =>{
        const response = await fetch('https://connecttf.uz/teachers.php', {
            method: 'post',
            header:{
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            body:JSON.stringify({
         teacher: props.data.id,

    
                    })
            
          })
          try {
            await AsyncStorage.setItem('teacherID', props.data.id);
            
          } catch (e) {
           
            console.log(e)
          }

          const data3 = await response.json();
     
          try {
            await AsyncStorage.setItem('dataOtdel3', JSON.stringify(data3));
            
          } catch (e) {
           
            console.log(e)
          }

          navigation.navigate('Подробно')
}  


return(


<View style={{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,height: height/9, width: width-width/40, backgroundColor: 'white', borderRadius: 20, marginTop: height/100, position: 'relative', justifyContent: 'center', paddingLeft: width/60}} >
<ScrollView vertical >
<View>
  <TouchableOpacity onPress={()=> Next()} >
<View style={{flexDirection: 'row'}} >
<Image style={{ height:height/10, width: height/10, position: 'relative', borderRadius: 50}} source={{uri: props.data.img}}  />

<Text style={{fontSize: height/50, left: width/40, top: height/65}} >{props.data.name} {props.data.surname}</Text>
</View>
<StarTeacher data={props.data.rating}/>
<TeacherMore/>
<View style={{height: height/20, width: width/3.5, left: width/4.5, top: height/20, opacity: 0, position: 'absolute'}} ></View>
</TouchableOpacity>
</View>
</ScrollView>
</View>


)
}