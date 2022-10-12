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

const LastDot = () => {

return(

<View style={{height: height, width: width,justifyContent: 'center', alignItems: 'center'}} >
      <View style={{height: height/3, width: width, top: -height/4}}>     
      <LottieView style={{position: 'relative'}}
      autoPlay
      loop
      source={animation.lottieFiles.dot3}
      />
      </View>
      <View style={{height: height/10, width: width/1.1, top: -height/6.5, justifyContent: 'center', alignItems: 'center', alignContent: 'center', padding: width/100}}>
<Text style={{fontSize: width/28, color: '#858585', marginTop: height/80}} >Чтобы начать работу, нам необходимо убедиться</Text>
<Text style={{fontSize: width/30, color: '#858585'}} >что вы обучаетесь именно в этом ВУЗе</Text>
      </View>

      </View>
)
}

export default LastDot