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


class ComplaintMainScreen extends React.Component {
    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}} >
<ScrollView>

<View style={{height: height/5.2, width: width, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative'}} >
    <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
      autoPlay
      loop
      source={animation.lottieFiles.complaint1}
      />

</View>



<Text style={{color: 'black', fontSize: width/24, marginLeft: width/25, fontWeight: '700', marginTop: height/580, opacity: 0.8, backgroundColor: 'white'}}>Новые</Text>

<View style={{height: height/3.5, width: width, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: height/-180, backgroundColor: 'white'}} >
<ScrollView horizontal showsHorizontalScrollIndicator={false}>


<TouchableOpacity onPress={()=> this.props.navigation.navigate('ViewComplaint')} >
<View style={{height: height/4.2, width: width/1.2, backgroundColor: '#4494F1', marginLeft: width/40, marginRight: width/40, borderRadius: height/50, justifyContent: 'center', alignItems: 'center'}} >

<Text style={{fontSize: width/28, color: 'white', textAlign: 'center', fontWeight: '700', opacity: 0.9, marginBottom: height/70}} >Котороткая тема предложения с ограниченными знаками</Text>
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9, width: width/1.3, marginBottom: height/50}} >Котороткое описание предложения с ограниченными знаками. Пользователь может перейти и прочитать предложение полностью и при желании поддержать</Text>
<View style={{flexDirection: 'row'}} >
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9, marginRight: width/3.1}} >15.09.2022</Text>
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9}} >поддержали: 159</Text>
</View>
</View>
</TouchableOpacity>

<View style={{height: height/4.2, width: width/1.2, backgroundColor: '#4494F1', marginLeft: width/40, marginRight: width/40, borderRadius: height/50, justifyContent: 'center', alignItems: 'center'}} >

<Text style={{fontSize: width/28, color: 'white', textAlign: 'center', fontWeight: '700', opacity: 0.9, marginBottom: height/70}} >Котороткая тема предложения с ограниченными знаками</Text>
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9, width: width/1.3, marginBottom: height/50}} >Котороткое описание предложения с ограниченными знаками. Пользователь может перейти и прочитать предложение полностью и при желании поддержать</Text>
<View style={{flexDirection: 'row'}} >
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9, marginRight: width/3.1}} >15.09.2022</Text>
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9}} >поддержали: 159</Text>
</View>
</View>



<View style={{height: height/4.2, width: width/1.2, backgroundColor: '#4494F1', marginLeft: width/40, marginRight: width/40, borderRadius: height/50, justifyContent: 'center', alignItems: 'center'}} >

<Text style={{fontSize: width/28, color: 'white', textAlign: 'center', fontWeight: '700', opacity: 0.9, marginBottom: height/70}} >Котороткая тема предложения с ограниченными знаками</Text>
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9, width: width/1.3, marginBottom: height/50}} >Котороткое описание предложения с ограниченными знаками. Пользователь может перейти и прочитать предложение полностью и при желании поддержать</Text>
<View style={{flexDirection: 'row'}} >
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9, marginRight: width/3.1}} >15.09.2022</Text>
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9}} >поддержали: 159</Text>
</View>
</View>



</ScrollView>
</View>



<Text style={{color: 'black', fontSize: width/24, marginLeft: width/25, fontWeight: '700', opacity: 0.8}}>Рассмотренные</Text>

<View style={{height: height/3.5, width: width, justifyContent: 'center', alignItems: 'center'}} >
<ScrollView horizontal showsHorizontalScrollIndicator={false}>


<TouchableOpacity onPress={()=> this.props.navigation.navigate('ViewConsidered')} >
<View style={{height: height/4.2, width: width/1.2, backgroundColor: '#798AD4', marginLeft: width/40, marginRight: width/40, borderRadius: height/50, justifyContent: 'center', alignItems: 'center', marginTop: height/50}} >

<View style={{height: height/30, width: width/4, backgroundColor: 'red', position: 'absolute', top: -height/590, left: width/1.72, borderBottomLeftRadius: height/50, borderTopRightRadius: height/50, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{color: 'white', fontSize: width/30, fontWeight: '600'}} >Отклонено</Text>
</View>

<Text style={{fontSize: width/28, color: 'white', textAlign: 'center', fontWeight: '700', opacity: 0.9, marginBottom: height/70}} >Котороткая тема предложения с ограниченными знаками</Text>
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9, width: width/1.3, marginBottom: height/50}} >Котороткое описание предложения с ограниченными знаками. Пользователь...</Text>
<View style={{flexDirection: 'row'}} >
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9, marginRight: width/3.1}} >15.09.2022</Text>
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9}} >поддержали: 159</Text>
</View>
</View>
</TouchableOpacity>





<View style={{height: height/4.2, width: width/1.2, backgroundColor: '#798AD4', marginLeft: width/40, marginRight: width/40, borderRadius: height/50, justifyContent: 'center', alignItems: 'center', marginTop: height/50}} >

<View style={{height: height/30, width: width/4, backgroundColor: 'green', position: 'absolute', top: -height/590, left: width/1.72, borderBottomLeftRadius: height/50, borderTopRightRadius: height/50, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{color: 'white', fontSize: width/30, fontWeight: '600'}} >Одобрено</Text>
</View>

<Text style={{fontSize: width/28, color: 'white', textAlign: 'center', fontWeight: '700', opacity: 0.9, marginBottom: height/70}} >Котороткая тема предложения с ограниченными знаками</Text>
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9, width: width/1.3, marginBottom: height/50}} >Котороткое описание предложения с ограниченными знаками. Пользователь может перейти и прочитать предложение полностью и при желании поддержать</Text>
<View style={{flexDirection: 'row'}} >
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9, marginRight: width/3.1}} >15.09.2022</Text>
<Text style={{fontSize: width/30, color: 'white', textAlign: 'left', opacity: 0.9}} >поддержали: 159</Text>
</View>
</View>


</ScrollView>
</View>

</ScrollView>
<View style={{width: width, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: height/150}} >
<TouchableOpacity onPress={()=> this.props.navigation.navigate('Create')} >
<View style={{height: height/18, justifyContent: 'center', alignItems:'center', width: width/1.4, borderRadius: height/60, backgroundColor: '#0277FA',}} >
<Text style={{color: 'white', opacity: 0.8, fontWeight: '500', fontSize: width/28}} >Создать</Text>
</View>
</TouchableOpacity>
</View>
</View>
        )
    }
}

export default ComplaintMainScreen;