import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../assets';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class ViewCreatedComplaintScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          switchOneValue: false,
        };
      }
    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}} >
<ScrollView style={{height: height, width: width}} >

<Text style={{color: 'black', fontSize: width/24, marginLeft: width/25, fontWeight: '700', marginTop: height/50, opacity: 0.8, marginBottom: height/50}} >Предварительный просмотр</Text>


<View style={{height: height/6, width: width/1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative'}} >
    <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
      autoPlay
      loop
      source={animation.lottieFiles.preview}
      />

</View>

<Text style={{color: 'black', fontSize: width/24, marginLeft: width/25, fontWeight: '700', marginTop: height/50, opacity: 0.8, marginBottom: height/80}} >Тема</Text>
<Text style={{color: 'black', fontSize: width/28, marginLeft: width/25, opacity: 0.8, marginBottom: height/80, width: width/1.07}} >Котороткая тема предложения с ограниченными знаками</Text>


<Text style={{color: 'black', fontSize: width/24, marginLeft: width/25, fontWeight: '700', marginTop: height/50, opacity: 0.8, marginBottom: height/80}} >Описание проблемы</Text>
<Text style={{color: 'black', fontSize: width/28, marginLeft: width/25, opacity: 0.8, marginBottom: height/80, width: width/1.07}} >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looke Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looke Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looke</Text>


<Text style={{color: 'black', fontSize: width/24, marginLeft: width/25, fontWeight: '700', marginTop: height/50, opacity: 0.8, marginBottom: height/80}} >Предложение по решению</Text>
<Text style={{color: 'black', fontSize: width/28, marginLeft: width/25, opacity: 0.8, marginBottom: height/80, width: width/1.07}} >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looke Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looke</Text>


<Text style={{color: 'red', fontSize: width/28, marginLeft: width/25, fontWeight: '700', marginTop: height/50, opacity: 0.8, marginBottom: height/10}}>Анонимно</Text>



</ScrollView>
<View style={{width: width, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: height/150}} >
<TouchableOpacity>
<View style={{height: height/18, justifyContent: 'center', alignItems:'center', width: width/1.4, borderRadius: height/60, backgroundColor: '#0277FA',}} >
<Text style={{color: 'white', opacity: 0.8, fontWeight: '500', fontSize: width/28}} >Отправить</Text>
</View>
</TouchableOpacity>
</View>
</View>
        )
    }
}

export default ViewCreatedComplaintScreen;