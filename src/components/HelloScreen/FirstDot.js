import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../../assets';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const FirstDot = (props) => {

return(

<View style={{height: height, width: width,justifyContent: 'center', alignItems: 'center'}} >
      <View style={{height: height/3, width: width, top: -height/3.5}}>     
      <LottieView style={{position: 'relative'}}
      autoPlay
      loop
      source={animation.lottieFiles.dot1}
      />
      </View>
      <View style={{height: height/10, width: width/1.1, top: -height/5.9, opacity: 0.7, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
<Text style={{fontSize: width/15, fontWeight: 'bold', color: '#858585'}} >Добро пожаловать!</Text>
<Text style={{fontSize: width/25, color: '#858585', marginTop: height/80}} >Свода и новые возможности</Text>
<Text style={{fontSize: width/25, color: '#858585'}} >вместе с Connect</Text>
      </View>

      </View>
)
}

export default FirstDot