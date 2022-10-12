import React, {useState} from 'react';
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
import SingIn from '../redux/middleware/SingIn';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

function SingInScreen () {

    let state = {
            preloaderDisplay: 'none',
            preloaderOpacity: 1,
        }

const dispatch = useDispatch();  
const navigation = useNavigation();      
const [Login, setLogin] = useState('');
const [Password, setPassword] = useState('');

function Press () {
    dispatch(SingIn(Login, Password, navigation))
}

        return(
<View style={{flex: 1, alignItems: 'center'}} >
<LottieView style={{position: 'absolute', width: width/2, top: height/6, left: width/8, zIndex: 10000, display: state.preloaderDisplay}}
      autoPlay
      loop
      source={animation.lottieFiles.preloader}
      />
    <ScrollView style={{opacity: state.preloaderOpacity}} >
<Text style={{top: height/25, left: width/30.3, fontSize: width/22, fontWeight: '700'}} >Вход в аккаунт</Text>
<View style={{width: width, justifyContent: 'center', alignItems: 'center'}} >
<LottieView style={{position: 'relative', width: width/1.29}}
      autoPlay
      loop
      source={animation.lottieFiles.singin}
      />
      </View>
          <View style={{ top: height/-8, width: width, justifyContent: 'center', alignItems: 'center', zIndex: 1, height: height/2.9}} >
<Text style={{width: width/1.6, fontSize: width/30, textAlign: 'center',}} >Введите ваш логин и пароль чтобы войти в аккаунт</Text>

<TextInput placeholder='Логин'  style={{width: width/1.8, top: height/50, height: height/20, fontSize: width/28, justifyContent: 'center', alignItems: 'center', alignContent: 'center',
borderRadius: width/50, fontWeight: '500', paddingLeft: width/45, borderBottomWidth: 1, padding: 0}}
onChangeText={Login => setLogin(Login)} /> 

<TextInput placeholder='Пароль'  style={{width: width/1.8, top: height/25, height: height/20, fontSize: width/28, justifyContent: 'center', alignItems: 'center', alignContent: 'center',
borderRadius: width/50, fontWeight: '500', paddingLeft: width/45, borderBottomWidth: 1, padding: 0}}
onChangeText={Password => setPassword(Password)} /> 


<View style={{height: height/8, width: width/1.5, top: height/8, justifyContent: 'center', alignItems: 'center', zIndex: 0}} >
<Text style={{fontSize: width/30, marginBottom: height/35}} >Забыли логин или пароль?</Text>
<TouchableOpacity onPress={() => Press()} >
<View style={{height: height/17, borderRadius: height/45, width: width/3.2, backgroundColor: '#0277FA', justifyContent: 'center', alignItems: 'center'}} >

    <Text style={{fontSize: width/30, color: 'white' }} >Войти</Text>

</View>
</TouchableOpacity>
</View>

</View>
</ScrollView>
</View>
        )
    }

export default SingInScreen;