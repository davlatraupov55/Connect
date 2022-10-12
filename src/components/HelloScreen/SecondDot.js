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

const SecondDot = (props) => {

return(

<View style={{height: height, width: width,justifyContent: 'center', alignItems: 'center'}} >
      <View style={{height: height/3, width: width, top: -height/4}}>     
      <LottieView style={{position: 'relative'}}
      autoPlay
      loop
      source={animation.lottieFiles.dot2}
      />
      </View>

<View style={{height: height/12, width: width/1.5, backgroundColor: 'blue', left: width/7, top: height/-30,
 borderTopLeftRadius: width/25, borderTopRightRadius: width/25, borderBottomLeftRadius: width/25,
 backgroundColor: '#ECECEC', shadowColor: "#000", shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.32,
  shadowRadius: 5.46, elevation: 9, justifyContent: 'center', alignItems: 'center', padding: width/100}}>

<Text style={{fontSize: width/28, opacity: 0.8, color: '#858585'}} >Получайте необходимую вам информацию быстро и удобно</Text>

</View>

<View style={{height: height/12, width: width/1.5, backgroundColor: 'blue', left: width/-7, top: height/100,
 borderTopLeftRadius: width/25, borderTopRightRadius: width/25, borderBottomRightRadius: width/25, backgroundColor: '#0277FA', 
 shadowColor: "#000", shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,
 justifyContent: 'center', alignItems: 'center', padding: width/100}} >
<Text style={{fontSize: width/28, opacity: 0.8, color: '#fff'}}>Внесите свой вклад на улучшение качества оброзования'</Text>
</View>

      </View>
)
}

export default SecondDot