import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../assets';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class ErrorScreen extends React.Component {
    render(){
        return(
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
<LottieView style={{position: 'relative', width: width/5}}
      autoPlay
      loop
      source={animation.lottieFiles.error}
      />
          <View style={{width: width, justifyContent: 'center', alignItems: 'center', zIndex: 1, height: height/2.9}} >
<Text style={{width: width/1.4, fontSize: width/30, textAlign: 'center',}} >Мы не нашли вас на базе университета. Введите данные заново или обратитесь в деканат</Text>

<View style={{height: height/8, width: width/1.5, bottom: height/-5, justifyContent: 'center', alignItems: 'center', zIndex: 0, position: 'absolute'}} >
<TouchableOpacity >
<View style={{height: height/17, borderRadius: height/45, width: width/3.2, backgroundColor: '#0277FA', justifyContent: 'center', alignItems: 'center'}} >

    <Text style={{fontSize: width/30, color: 'white' }} >Вернуться</Text>

</View>
</TouchableOpacity>
</View>

</View>
</View>
        )
    }
}

export default ErrorScreen;