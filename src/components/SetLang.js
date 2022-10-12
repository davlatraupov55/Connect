import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useDispatch} from "react-redux";
import { SelectLang } from '../LangComponents/LangComponents';
import { SETLANG} from '../store/actionType';
import AsyncStorage from '@react-native-async-storage/async-storage';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;



export default function SetLang (){

const dispatch = useDispatch();

const SetUZB = async() => {

    console.log('UZB')
    dispatch({ type: SETLANG, payload: 'uzb' }); 
    try {
      await AsyncStorage.setItem('lang', 'uzb');

    } catch (e) {
  
      console.log('lang set error')
    }
    
  }

  const SetRU = async() => {

    console.log('RU')
    dispatch({ type: SETLANG, payload: 'ru' }); 
    try {
      await AsyncStorage.setItem('lang', 'ru');

    } catch (e) {
  
      console.log('lang set error')
    }
  
  }

  const SetENG = async() => {

    console.log('ENG')
    dispatch({ type: SETLANG, payload: 'eng' }); 
    try {
      await AsyncStorage.setItem('lang', 'eng');

    } catch (e) {
  
      console.log('lang set error')
    }
  
  }

    return(
<View style={{top: height/20}} >
  <View style={{flexDirection: 'row', left: width/-4.1, marginTop: height/80}} >
  <Image style={{height: height/40, width: height/30, marginRight: width/50}}  source={require('../img/setLang.png')} />
<SelectLang/>
  </View>
        <View style={{flexDirection: 'row', marginTop: height/30, left: width/150}} >
    <View style={{left: width/-4.1}} >
            <TouchableOpacity onPress={()=> SetUZB()} >
            <View style={{flexDirection: 'row'}} >
            <Image style={{height: height/40, width: height/30, marginRight: width/50}}  source={require('../img/uzb.png')} />
            <Text>UZB</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style={{left: width/-5.9}} >
            <TouchableOpacity onPress={()=> SetENG()} >
            <View style={{flexDirection: 'row'}} >
            <Image style={{height: height/40, width: height/30, marginRight: width/50}}  source={require('../img/british.png')} />
            <Text>ENG</Text>
            </View>
            </TouchableOpacity>
            </View>

            <View style={{left: width/-8.1}} >
            <TouchableOpacity onPress={()=> SetRU()} >
            <View style={{flexDirection: 'row'}} >
            <Image style={{height: height/40, width: height/30, marginRight: width/50}}  source={require('../img/rus.jpg')} />
            <Text>RU</Text>
            </View>
            </TouchableOpacity>
            </View>
            
        </View>
        </View>
    )

}