import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../assets';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


function MainSettingsScreen () {
  const navigation  = useNavigation();
const user = useSelector(state => state.userInformation)
        return(

            <View style={{flex: 1, alignItems: 'center',}} >

<View style={{flexDirection: 'row'}} >
<View style={{height: height/12, width: height/12, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
 borderColor: '#B6B6B6', marginTop: height/40, right: width/50}} >
    <LottieView style={{display: 'flex', position: 'absolute', height: '95%', width: '95%', justifyContent: 'center', alignItems: 'center'}}
      autoPlay
      loop
      source={animation.lottieFiles.avatar0}
      />

</View>
<Text style={{left: width/20, fontSize: width/25, color: 'black',fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1.5, marginBottom: height/30}} >{user.name} {user.surname} {user.patronymic}</Text>
</View>
<Text style={{left: width/8, fontSize: width/28, color: '#606060', fontWeight: '600', marginTop: height/-30, opacity: 0.8, width: width/1.5}} >{user.group.title}</Text>

<View style={{marginTop: height/10}} >
  <TouchableOpacity onPress={()=>navigation.navigate('ProfileSettingsScreen')} >
<Text style={{left: -width/10, fontSize: width/26, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1.5, marginBottom: height/50}} >Настройки профиля</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('MainStatementScreen')} >
{/* <Text style={{left: -width/10, fontSize: width/26, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1.5, marginBottom: height/50}} >Онлайн заявления</Text> */}
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('ConfidentialityScreen')} >
<Text style={{left: -width/10, fontSize: width/26, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1.5, marginBottom: height/50}} >Конфиденциальность</Text>
</TouchableOpacity>
<TouchableOpacity  >
<Text style={{left: -width/10, fontSize: width/26, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1.5, marginBottom: height/20}} >Связь с разработчиком</Text>
</TouchableOpacity>
<TouchableOpacity >
<Text style={{left: -width/10, fontSize: width/26, color: '#606060', fontWeight: '600', marginTop: height/4.5, opacity: 0.8, width: width/1.5, marginBottom: height/50}} >Выйти из профиля</Text>
</TouchableOpacity>

</View>


            </View>

        )
        }
export default MainSettingsScreen;