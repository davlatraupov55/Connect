import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../assets';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class CreateComplaintScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          switchOneValue: false,
        };
      }
    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}} >
<ScrollView>

<Text style={{color: 'black', fontSize: width/24, marginLeft: width/25, fontWeight: '700', marginTop: height/50, opacity: 0.8, marginBottom: height/50}} >Создать жалобу или предложение</Text>


<View style={{height: height/4, width: width, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative'}} >
    <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
      autoPlay
      loop
      source={animation.lottieFiles.creation}
      />

</View>

<Text style={{color: 'black', fontSize: width/24, marginLeft: width/25, fontWeight: '700', marginTop: height/50, opacity: 0.8, marginBottom: height/80}} >Тема</Text>
<TextInput placeholder='Коротко напишите тему предложения(50 символов)'  style={{width: width/1.08, height: height/20, fontSize: width/28, justifyContent: 'center', alignItems: 'center', alignContent: 'center',
borderRadius: width/50, fontWeight: '500', paddingLeft: width/45, borderBottomWidth: 1, padding: 0, marginLeft: width/40}} />


<Text style={{color: 'black', fontSize: width/24, marginLeft: width/25, fontWeight: '700', marginTop: height/50, opacity: 0.8, marginBottom: height/80}} >Описание проблемы</Text>
<TextInput placeholder='Опишите проблему'  style={{width: width/1.08, height: height/20, fontSize: width/28, justifyContent: 'center', alignItems: 'center', alignContent: 'center',
borderRadius: width/50, fontWeight: '500', paddingLeft: width/45, borderBottomWidth: 1, padding: 0, marginLeft: width/40}} />


<Text style={{color: 'black', fontSize: width/24, marginLeft: width/25, fontWeight: '700', marginTop: height/50, opacity: 0.8, marginBottom: height/80}} >Предложение по решению</Text>
<TextInput placeholder='Опишите решение преблемы'  style={{width: width/1.08, height: height/20, fontSize: width/28, justifyContent: 'center', alignItems: 'center', alignContent: 'center',
borderRadius: width/50, fontWeight: '500', paddingLeft: width/45, borderBottomWidth: 1, padding: 0, marginLeft: width/40, marginBottom: height/4.8}} />


</ScrollView>

<View style={{width: width, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: height/150}} >
<TouchableOpacity onPress={()=> this.props.navigation.navigate('ViewCreated')} >
<View style={{height: height/18, justifyContent: 'center', alignItems:'center', width: width/1.4, borderRadius: height/60, backgroundColor: '#0277FA',}} >
<Text style={{color: 'white', opacity: 0.8, fontWeight: '500', fontSize: width/28}} >Готово</Text>
</View>
</TouchableOpacity>
</View>


</View>
        )
    }
}

export default CreateComplaintScreen;