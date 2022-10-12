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
import RegToSingInButton from '../Components/RegistrationScreen/RegToSingInButton';
import API from '../Consts/apis';
import { MMKV } from 'react-native-mmkv';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const storage = new MMKV()


class RegistrationScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
preloaderDisplay: 'none',
preloaderOpacity: 1,
PasportSeria: '',
PasportNumber: '',
Pasport: '',
Login: '',
Password: '',
RePassword: '',
CorrectData: {
    passport: '',
    password: '',
    login: ''
}
        };
      }


      _Check = () => {


if(this.state.PasportSeria.length == 2 & this.state.PasportNumber.length == 7){
        this.state.Pasport = this.state.PasportSeria + this.state.PasportNumber
        this.state.CorrectData.passport = this.state.Pasport
       }else {
alert('Введите корректные паспортные данные')
       }
if (this.state.Login.length > 5){
    this.state.CorrectData.login = this.state.Login
}else{
    alert('Логин должен содержать минимум 8 символов. Вы ввели ' + this.state.Login.length + ' символов')
}

if (this.state.Password.length > 5){
    this.state.CorrectPassword = this.state.Password
}else{
    alert('Пароль должен содержать минимум 6 символов. Вы ввели ' + this.state.Password.length + ' символов')
}


if (this.state.CorrectPassword == this.state.RePassword ){
    this.state.CorrectData.password = this.state.CorrectPassword
}else{
    alert('Пароли должны совпадать')
}
if (this.state.CorrectData.login.length > 5 & this.state.CorrectData.passport != '' & this.state.CorrectData.password.length > 5){
    let formdata = new FormData();
    formdata.append("login", this.state.CorrectData.login)
    formdata.append("password", this.state.CorrectData.password)
    formdata.append("passport", this.state.CorrectData.passport)
    const REQUEST = async() => {

        this.setState({preloaderDisplay: 'flex'})
        this.setState({preloaderOpacity: 0.5})

        const response = await fetch( API.RegistrationApi, {
          method: 'POST',
          header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
              body: formdata     
        })
        const data1 = await response.json();
        console.log(data1)

        if(data1.message === 'Поздравляем, вы зарегистрировались'){
            storage.set('login', this.state.CorrectData.login)
            storage.set('password', this.state.CorrectData.password)
            storage.set('passport', this.state.CorrectData.passport)

            let formdata2 = new FormData();
            formdata2.append("login", this.state.CorrectData.login)
            formdata2.append("password", this.state.CorrectData.password)
            const response1 = await fetch( API.AuthApi, {
              method: 'POST',
              header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
              },
                  body: formdata2     
            })
            const data2 = await response1.json();
            console.log(data2)
            this.setState({preloaderDisplay: 'none'})
            this.setState({preloaderOpacity: 1})

if(data2.message === 'Вы успешео зашли на свой аккаунт'){
            storage.set('token', data2.token_api)
            storage.set('user', 0)
  this.props.navigation.navigate('HomeScreen')
}
        }else{
                        this.setState({preloaderDisplay: 'none'})
            this.setState({preloaderOpacity: 1})
            alert(data1.message)
        }

      }
REQUEST();
}
    }

    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', position: 'relative', backgroundColor: 'white'}}>

                <LottieView style={{position: 'absolute', width: width/2, top: height/6, left: width/8, zIndex: 10000, display: this.state.preloaderDisplay}}
      autoPlay
      loop
      source={animation.lottieFiles.preloader}
      />
                <ScrollView style={{opacity: this.state.preloaderOpacity}} >


            <View style={{top: height/-30}}>
            <Text style={{top: height/25, left: width/50, fontSize: width/22, fontWeight: '500'}} >Регистрация</Text>
            <View style={{width: width, justifyContent: 'center', alignItems: 'center', marginBottom: height/40}} >
                <LottieView style={{position: 'relative', width: width/1.18}}
      autoPlay
      loop
      source={animation.lottieFiles.reg1}
      />
      </View>
            </View>

<View style={{top: height/-1.95, justifyContent: 'center', alignItems: 'center'}} >

<Text style={{width: width/1.4, fontSize: width/30, textAlign: 'center', top: height/3}} >Введите серию и номер паспорта чтобы мы проверили вас на базе университета</Text>
<View style={{flexDirection: 'row'}} >
   <TextInput placeholder='AB'  style={{width: width/10, height: height/20, fontSize: width/22, top: height/2.8, justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginRight: width/20,
borderRadius: width/50, fontWeight: '500', paddingLeft: width/45, borderBottomWidth: 1, padding: 0}}
onChangeText={PasportSeria => this.setState({PasportSeria: PasportSeria})} ref={input => { this.textInput = input }} /> 

<TextInput placeholder='XXXXXXX'  style={{width: width/4.2, height: height/20, fontSize: width/22, top: height/2.8, justifyContent: 'center', alignItems: 'center', alignContent: 'center',
borderRadius: width/50, fontWeight: '500', paddingLeft: width/45, borderBottomWidth: 1, padding: 0}}
onChangeText={PasportNumber => this.setState({PasportNumber: PasportNumber})} ref={input => { this.textInput = input }} /> 
</View>
    </View>
    <View style={{ top: height/-8, width: width, justifyContent: 'center', alignItems: 'center', zIndex: 1, height: height/2.9}} >
<Text style={{width: width/1.4, fontSize: width/30, textAlign: 'center',}} >Придумайте логин и пароль для вашего аккаунта</Text>

<TextInput placeholder='Логин (минимум 8 символов)'  style={{width: width/1.8, top: height/50, height: height/20, fontSize: width/28, justifyContent: 'center', alignItems: 'center', alignContent: 'center',
borderRadius: width/50, fontWeight: '500', paddingLeft: width/45, borderBottomWidth: 1, padding: 0}}
onChangeText={Login => this.setState({Login: Login})} ref={input => { this.textInput = input }} /> 

<TextInput placeholder='Пароль (минимум 6 символов)'  style={{width: width/1.8, top: height/25, height: height/20, fontSize: width/28, justifyContent: 'center', alignItems: 'center', alignContent: 'center',
borderRadius: width/50, fontWeight: '500', paddingLeft: width/45, borderBottomWidth: 1, padding: 0}}
onChangeText={Password => this.setState({Password: Password})} ref={input => { this.textInput = input }} /> 

<TextInput placeholder='Повторите пароль'  style={{width: width/1.8, top: height/15, height: height/25, fontSize: width/28, justifyContent: 'center', alignItems: 'center', alignContent: 'center',
borderRadius: width/50, fontWeight: '500', paddingLeft: width/45, borderBottomWidth: 1, padding: 0}}
onChangeText={RePassword => this.setState({RePassword: RePassword})} ref={input => { this.textInput = input }} /> 


<View style={{height: height/8, width: width/1.5, top: height/7, justifyContent: 'center', alignItems: 'center', zIndex: 0}} >
<RegToSingInButton/>

<TouchableOpacity onPress={() =>this._Check()}>
<View style={{height: height/17, borderRadius: height/45, width: width/3.2, backgroundColor: '#0277FA', justifyContent: 'center', alignItems: 'center'}} >

    <Text style={{fontSize: width/30, color: 'white' }} >Готово</Text>

</View>
</TouchableOpacity>
</View>

</View>


</ScrollView>

            </View>
        )
    }
}

export default RegistrationScreen;