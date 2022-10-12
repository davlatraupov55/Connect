import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../assets'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class MainRatingScreen extends React.Component {
    render(){
        return(
<View style={{flex:1, justifyContent: 'center', alignItems: 'center', justifyContent: 'center'}} >

<View style={{height: height/2.2, width: width, position: 'absolute', top: 0, justifyContent: 'center', alignItems: 'center'}} >
<LottieView style={{position: 'relative', width: width/1.8, height: '100%', width: '100%'}}
      autoPlay
      loop
      source={animation.lottieFiles.rating}
      />
</View>

<View style={{justifyContent: 'center', alignItems: 'center', top: height/3.7}} >
<Text style={{width: width/1.2, textAlign: 'center', color: 'black', opacity: 0.6, fontWeight: '700', fontSize: width/25, marginBottom: height/10}} >Следите за своей успеваемостью и анонимно оценивайте качество преподования</Text>

<TouchableOpacity onPress={()=>this.props.navigation.navigate('lk')} >
<View style={{height: height/17, justifyContent: 'center', alignItems:'center', width: width/1.4, borderRadius: height/60, backgroundColor: '#0277FA', marginBottom: height/30}} >
<Text style={{color: 'white', opacity: 1, fontWeight: '600', fontSize: width/26}} >Мой рейтинг</Text>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=> this.props.navigation.navigate('Otdel')}>
<View style={{height: height/17, justifyContent: 'center', alignItems:'center', width: width/1.4, borderRadius: height/60, backgroundColor: '#0277FA', marginBottom: height/30}} >
<Text style={{color: 'white', opacity: 1, fontWeight: '600', fontSize: width/26}} >Рейтинг преподователей</Text>
</View>
</TouchableOpacity>

</View>

</View>
        )
    }
}

export default MainRatingScreen