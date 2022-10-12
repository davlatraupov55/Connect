import React from 'react';
import {
  View,
  Dimensions,
  Image,
} from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../../assets';
import { useSelector } from 'react-redux';
import Avatars from '../Avatars';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default function UserAvatar (){


  const img = useSelector(state => state.accountInformation.img)


   if ( img !== 'https://connect-gubkin.uz/storage/standart/user.png' & img[0] == 'h'){
    
    return(
             <View style={{height: height/15, width: height/15, left: width/50, borderRadius: height/15,
             justifyContent: 'center', alignItems: 'center', borderColor: '#E1E5E9', borderWidth: 1, backgroundColor: 'white',}} >
            <Image style={{height: height/15, width: height/15, borderRadius: height/15}}  source={{uri: img}} />
            </View>
    )
   }
   else if (img === 'https://connect-gubkin.uz/storage/standart/user.png' || img[0] == 'n') {
    return(
        <View style={{height: height/15, width: height/15, left: width/50, borderRadius: height/15,
        justifyContent: 'center', alignItems: 'center', borderColor: '#E1E5E9', borderWidth: 1, backgroundColor: 'white', position: 'relative'}} >
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar0}
        />
       
       </View>
    )
   }
   else {
    return(
        <View style={{height: height/15, width: height/15, left: width/50, borderRadius: height/15,
        justifyContent: 'center', alignItems: 'center', borderColor: '#E1E5E9', borderWidth: 1, backgroundColor: 'white', position: 'relative'}} >
<Avatars data={img}/>       
       </View>
    )
   }
}