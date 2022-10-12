import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import { MMKV } from 'react-native-mmkv'; 
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import ChangeLogPass from "../redux/middleware/ChangeLogPass"
import { set } from 'react-native-reanimated';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const storage = new MMKV()

function ConfidentialityScreen () {
  const dispatch = useDispatch();
  const TOKEN2 = useSelector(state => state.token)
const TOKEN1 = storage.getString('token');
const TOKEN = TOKEN1 ? TOKEN1 : TOKEN2;

  const navigation = useNavigation();
  const LOGIN = storage.getString('login')
  const PASSWORD = storage.getString('password')
  
const [loginCount, setLoginCount] = useState(0)
const [passwordCount, setPasswordCount] = useState(0)

  const [newPass, setNewPass] = useState('')
  const [newLogin, setNewLogin] = useState('')
  const [Pass, setPass] = useState('')
  const [Login, setLogin] = useState('')
  const [rePass, setRePass] = useState('')
  const [reLogin, setReLogin] = useState('')


  const [newPassDisp, setNewPassDisp] = useState('none')
  const [newLoginDisp, setNewLoginDisp] = useState('none')
  const [PassDisp, setPassDisp] = useState('flex')
  const [LoginDisp, setLoginDisp] = useState('flex')
  const [rePassDisp, setRePassDisp] = useState('none')
  const [reLoginDisp, setReLoginDisp] = useState('none')

  // const [newPassDisp, setNewPassDisp] = useState('none')
  // const [newLoginDisp, setNewLoginDisp] = useState('none')
  const [PassNext, setPassNext] = useState('Далее')
  const [LoginNext, setLoginNext] = useState('Далее')

  
  const CheckLogin = () => {
    if(Login == LOGIN){
      setLoginDisp('none');
      setNewLoginDisp('flex')
      setLoginCount(1)
    }else{
      alert('Указан не правильный логин')
    }
  }

  const getNewLogin = () => {
    if(newLogin.length > 5){
      setReLoginDisp('flex');
      setNewLoginDisp('none')
      setLoginNext('Готово')
      setLoginCount(2)
    }else{
      alert('Минимальное количество символов 6')
    }
  }


  const finishNewLogin = () => {
if(newLogin === reLogin){
  setLogin('');
  setNewLogin('');
  setReLogin('');
  setLoginNext('Далее');
  setLoginDisp('flex');
  setReLoginDisp('none');
  setNewLoginDisp('none');  
  setLoginCount(0)
  console.log('success ' + reLogin)
  SetNewData();
} else {
  alert("Логин не совпадает")
}
  }
  
  const LoginFunc = (count) => {
if(count == 0){
  CheckLogin();
}
else if (count == 1){
  getNewLogin();
} else if (count == 2){
  finishNewLogin();
}
  }


  const CheckPassword = () => {
    if(Pass == PASSWORD){
      setPassDisp('none');
      setNewPassDisp('flex')
      setPasswordCount(1)
    }else{
      alert('Указан не правильный пароль')
    }
  }

  const getNewPassword = () => {
    if(newPass.length > 5){
      setRePassDisp('flex');
      setNewPassDisp('none')
      setPassNext('Готово')
      setPasswordCount(2)
    }else{
      alert('Минимальное количество символов 6')
    }
  }


  const finishNewPassword = () => {
if(newPass === rePass){
  setPass('');
  setNewPass('');
  setRePass('');
  setPassNext('Далее');
  setPassDisp('flex');
  setRePassDisp('none');
  setNewPassDisp('none');  
  setPasswordCount(0)
  SetNewData();
} else {
  alert("Пароли не совпадает")
}
  }
  
  const PasswordFunc = (count) => {
if(count == 0){
  CheckPassword();
}
else if (count == 1){
  getNewPassword();
} else if (count == 2){
  finishNewPassword();
}
  }


const SetNewData = () => {
  if(!rePass || reLogin){
    dispatch(ChangeLogPass(reLogin, PASSWORD, TOKEN))
  }else if(rePass || !reLogin){
    dispatch(ChangeLogPass(LOGIN, rePass, TOKEN))
  }else{
    console.log('error')
  }
 
}

        return(

            <View style={{flex: 1, alignItems: 'center',}} >
              <ScrollView>
<Text style={{left: width/30, fontSize: width/25, color: 'black',fontWeight: '600', marginTop: height/55, opacity: 0.8, width: width/1.2, marginBottom: height/30}} >Конфиденциальность</Text>

<View style={{marginTop: height/20, width: width, height: height/10, justifyContent: 'center', alignItems: 'center'}} >
  
<Text style={{fontSize: width/25, color: '#606060', fontWeight: '600', opacity: 0.8, width: width/1, marginBottom: height/90, marginLeft: width/10}} >Сменить логин</Text>
<TextInput onChangeText={Login => setLogin(Login)} value={Login} style={{display: LoginDisp, height: height/20, width: width/1.3, borderBottomColor: 'grey', borderBottomWidth: 1, fontSize: width/28, paddingBottom: height/-50}} placeholder={'Введите действующий логин'}  />
<TextInput onChangeText={nLogin => setNewLogin(nLogin)} value={newLogin} style={{display: newLoginDisp, height: height/20, width: width/1.3, borderBottomColor: 'grey', borderBottomWidth: 1, fontSize: width/28, paddingBottom: height/-50}} placeholder={'Придумайте новый логин'}  />
<TextInput onChangeText={rLogin => setReLogin(rLogin)} value={reLogin} style={{display: reLoginDisp, height: height/20, width: width/1.3, borderBottomColor: 'grey', borderBottomWidth: 1, fontSize: width/28, paddingBottom: height/-50}} placeholder={'Повторите новый логин'}  />

</View>

<View style={{width: width, justifyContent: 'center', alignItems: 'center', marginTop: height/40}} >
<TouchableOpacity onPress={()=> LoginFunc(loginCount)} >
<View style={{height: height/18, justifyContent: 'center', alignItems:'center', width: width/1.4, borderRadius: height/60, backgroundColor: '#0277FA',}} >
<Text style={{color: 'white', opacity: 0.8, fontWeight: '500', fontSize: width/28}} >{LoginNext}</Text>
</View>
</TouchableOpacity>
</View>

<View style={{marginTop: height/20, width: width, height: height/10, justifyContent: 'center', alignItems: 'center'}} >
  
<Text style={{fontSize: width/25, color: '#606060', fontWeight: '600', opacity: 0.8, width: width/1, marginBottom: height/90, marginLeft: width/10}} >Сменить пароль</Text>
<TextInput onChangeText={Password => setPass(Password)} value={Pass} style={{display: PassDisp, height: height/20, width: width/1.3, borderBottomColor: 'grey', borderBottomWidth: 1, fontSize: width/28, paddingBottom: height/-50}} placeholder={'Введите действующий пароль'}  />
<TextInput onChangeText={nPass => setNewPass(nPass)} value={newPass} style={{display: newPassDisp, height: height/20, width: width/1.3, borderBottomColor: 'grey', borderBottomWidth: 1, fontSize: width/28, paddingBottom: height/-50}} placeholder={'Придумайте новый пароль'}  />
<TextInput onChangeText={rPass => setRePass(rPass)} value={rePass} style={{display: rePassDisp, height: height/20, width: width/1.3, borderBottomColor: 'grey', borderBottomWidth: 1, fontSize: width/28, paddingBottom: height/-50}} placeholder={'Повторите новый пароль'}  />

</View>

<View style={{width: width, justifyContent: 'center', alignItems: 'center', marginTop: height/40}} >
<TouchableOpacity onPress={()=> PasswordFunc(passwordCount)} >
<View style={{height: height/18, justifyContent: 'center', alignItems:'center', width: width/1.4, borderRadius: height/60, backgroundColor: '#0277FA',}} >
<Text style={{color: 'white', opacity: 0.8, fontWeight: '500', fontSize: width/28}} >{PassNext}</Text>
</View>
</TouchableOpacity>
</View>

<View style={{marginTop: height/20, width: width, height: height/10, justifyContent: 'center', alignItems: 'center'}} >
  
 <TouchableOpacity onPress={()=> navigation.navigate('ChangePIN1')} >
<Text style={{display: 'flex', fontSize: width/25, color: '#606060', fontWeight: '600', opacity: 0.8, width: width/1.03, marginBottom: height/90, marginLeft: width/10}} >Установить PIN-код</Text>
</TouchableOpacity>
<TouchableOpacity>  
<Text style={{display: 'none',fontSize: width/25, color: '#606060', fontWeight: '600', opacity: 0.8, width: width/1.03, marginBottom: height/90, marginLeft: width/10}} >Изменить PIN-код</Text>
</TouchableOpacity> 
</View>

<View style={{marginTop: height/90, width: width, height: height/10, justifyContent: 'center', alignItems: 'center'}} >
  
<Text style={{display: 'none', fontSize: width/25, color: '#606060', fontWeight: '600', opacity: 0.8, width: width/1.03, marginBottom: height/90, marginLeft: width/10}} >Не запрашивать PIN-код</Text>
</View>
</ScrollView>
            </View>

        )
    }
export default ConfidentialityScreen;