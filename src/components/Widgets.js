import React from 'react';
import {View, TouchableOpacity, Image, Dimensions, ScrollView} from "react-native";
import { useSelector} from "react-redux";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export function Widgets(){

const state ={
    Alert: '',
}

    const lang = useSelector((state) => state.lang);
    if(lang === 'uzb'){
state.Alert = "Ushbu funksiya tez orada mavjud bo'ladi ;)"
    } 
    else if(lang === 'ru'){
        state.Alert = "Эта функция скоро будет доступна ;)"
    }
    else if(lang === 'eng'){
        state.Alert = "This feature will be available soon ;)"
    }


const Press = () => {
    alert(state.Alert)
}



    return(
<ScrollView horizontal showsHorizontalScrollIndicator={false} >



<View style={{shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3,
 height: height/4.1, marginTop: height/250, width: height/4.5, marginLeft: width/89, justifyContent: 'center', alignItems: 'center', borderRadius: height/45 }} >
   <TouchableOpacity onPress={() => Press() } style={{height: height/4.1, width: height/4.5, justifyContent: 'center', alignItems: 'center'}} >
  <Image style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22,height: height/5.2, 
  width: height/5.2}}  source={require('../img/cno.jpg')} />
  </TouchableOpacity>
</View>


<View style={{shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3,
 height: height/4.1, marginTop: height/250, width: height/4.5, marginLeft: width/89, justifyContent: 'center', alignItems: 'center', borderRadius: height/45 }} >
   <TouchableOpacity onPress={() => Press() }  style={{height: height/4.1, width: height/4.5, justifyContent: 'center', alignItems: 'center'}} >
  <Image style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22,height: height/5.2, 
  width: height/5.2}}  source={require('../img/sonidos.jpg')} />
  </TouchableOpacity>
</View>





<View style={{shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3,
 height: height/4.1, marginTop: height/250, width: height/4.5, marginLeft: width/89, justifyContent: 'center', alignItems: 'center', borderRadius: height/45 }} >
   <TouchableOpacity onPress={() => Press() }  style={{height: height/4.1, width: height/4.5, justifyContent: 'center', alignItems: 'center'}} >
  <Image style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22,height: height/5.2, 
  width: height/5.2}}  source={require('../img/randevu.png')} />
  </TouchableOpacity>
</View>

</ScrollView>
    )
}