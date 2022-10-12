import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../assets';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class MainStatementScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          switchOneValue: false,
        };
      }
    render(){
        return(

            <View style={{flex: 1, alignItems: 'center',}} >
<Text style={{left: width/-10, fontSize: width/25, color: 'black',fontWeight: '600', marginTop: height/55, opacity: 0.8, width: width/1.5, marginBottom: height/30}} >Выберите вид заявления</Text>



    <LottieView style={{display: 'flex', position: 'absolute', height: height/4, width: height/4, marginTop: height/40}}
      autoPlay
      loop
      source={animation.lottieFiles.statement}
      />



<View style={{marginTop: height/4}} >
<Text style={{left: width/25, fontSize: width/26, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1, marginBottom: height/50}} >Заявление на выезд из общежития</Text>
<Text style={{left: width/25, fontSize: width/26, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1, marginBottom: height/50}} >Заявление на выезд из общежития на каникулы</Text>
<Text style={{left: width/25, fontSize: width/26, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1, marginBottom: height/50}} >Заявление на выселение</Text>
</View>
<Text style={{left: width/15, fontSize: width/28, color: '#F97878', fontWeight: '600', marginTop: height/3.5, opacity: 0.8, width: width, marginBottom: height/50}} >Скоро будут доступны и другие виды заявлений</Text>




            </View>

        )
    }
}
export default MainStatementScreen;