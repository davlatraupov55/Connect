import React from "react";
import {TouchableOpacity} from "react-native-gesture-handler";
import { View, Text, Image, TextInput, StatusBar, Dimensions, SafeAreaView, Animated} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNBootSplash from "react-native-bootsplash";
import {SETLANG} from "../store/actionType"

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default class FirstClientScreen2 extends React.Component{


  constructor(props) {
    super(props);
    this.state = {

     anim1: new Animated.Value(width/5),
     anim2: new Animated.Value(width+width),
     anim3: new Animated.Value(width+width),

     bubleW1: height/50,
     bubleW2: height/70,
     bubleW3: height/70,

     bubleC1: '#0099cc',
     bubleC2: '#E8EAF6',
     bubleC3: '#E8EAF6',

     seria: '',
     numer: '',

     login:'',

     password: '',

     password2: '',

     password11: [],

     password12: [],

     display1: 'none',
     display2: 'flex',
     pass: [],

     layout1 : '#E8EAF6',
     layout2 : '#E8EAF6',
     layout3 : '#E8EAF6',
     layout4 : '#E8EAF6',


     layout11 : '#E8EAF6',
     layout12 : '#E8EAF6',
     layout13 : '#E8EAF6',
     layout14 : '#E8EAF6',

     layout21 : '#E8EAF6',
     layout22 : '#E8EAF6',
     layout23 : '#E8EAF6',
     layout24 : '#E8EAF6',

     alertBase: '',
     reType: '',
     alertEnterData: '',
     passSeria: 'Введите серию паспорта',
     passNum: 'Введите номер паспорта',
     Enter: 'Введите пароль',
    passwordError: '',
    passwordFalse: '',
    Reg: 'Регистрация',
    IHave: 'У меня уже есть аккаунт',
    Next: 'Далее',
    PickPass: 'Придумайте пароль',
    ConfirmPass: 'Повторите пароль',
    };
  }

  _Lang = async() => {


    if( await AsyncStorage.getItem('lang') !== 'uzb' && await AsyncStorage.getItem('lang') !== 'eng' && await AsyncStorage.getItem('lang') !== 'ru' ){

    await AsyncStorage.setItem('lang', 'ru');

  }
  
  const language = await AsyncStorage.getItem('lang');


    if(language === 'uzb'){
      this.setState({alertBase: "Sizni ma'lumotlar bazasidan topa olmadik!"});
      this.setState({reType: "Ma'lumotlarni tekshiring va qayta kiriting"});
      this.setState({alertEnterData: "Belgilangan ma'lumotlarni kiritishingiz kerak"});
      this.setState({passSeria: "Pasport seriyasi"});
      this.setState({passNum: "Pasport raqami"});
      this.setState({passwordError: "Noto'g'ri parol"});
      this.setState({passwordFalse: "Parollar mos kelmayapti"});
      this.setState({Enter: "Parolni kiriting"});
      this.setState({Reg: "Ro`yxatdan o`tish"});
      this.setState({IHave: "Menda akkaunt bor"});
      this.setState({Next: "Keyingi"});
      this.setState({PickPass: "Parol o'ylab toping"});
      this.setState({ConfirmPass: "Parolni qayta kiriting"});
    } 
    else if(language === 'ru'){
      this.setState({alertBase: 'Мы не нашли вас на базе данных!'});
      this.setState({reType: "Проверьте данные и введите заново"});
      this.setState({alertEnterData: "Необходимо ввести указанные данные"});
      this.setState({passSeria: "Введите серию паспорта"});
      this.setState({Enter: "Введите пароль"});
      this.setState({passNum: "Введите номер паспорта"});
      this.setState({passwordError: "Неправильный пароль"});
      this.setState({passwordFalse: "Пароли не совпадают"});
      this.setState({Reg: "Регистрация"});
      this.setState({IHave: "У меня уже есть аккаунт"});
      this.setState({Next: "Далее"});
      this.setState({PickPass: "Придумайте пароль"});
      this.setState({ConfirmPass: "Повторите пароль"});
    }
    else if(language === 'eng'){
      this.setState({alertBase: "We didn't find you in the database!"});
      this.setState({reType: "Check the data and re-enter"});
      this.setState({alertEnterData: "You must enter the specified data"});
      this.setState({passSeria: "Enter the passport series"});
      this.setState({Enter: "Enter password"});
      this.setState({passNum: "Enter your passport number"});
      this.setState({passwordError: "Wrong password"});
      this.setState({passwordFalse: "Passwords do not match"});
      this.setState({Reg: "Registration"});
      this.setState({IHave: "I already have an account"});
      this.setState({Next: "Next"});
      this.setState({PickPass: "Pick a password"});
      this.setState({ConfirmPass: "Confirm password"});
    }
  }


SetUZB = async() => {

    await AsyncStorage.setItem('lang', 'uzb');
    this.props.data.dispatch({ type: SETLANG, payload: 'uzb' }); 
  this._Lang();
}

 SetRU = async() => {

    await AsyncStorage.setItem('lang', 'ru');
    this.props.data.dispatch({ type: SETLANG, payload: 'ru' }); 
  this._Lang();
}

 SetENG = async() => {

    await AsyncStorage.setItem('lang', 'eng');
    this.props.data.dispatch({ type: SETLANG, payload: 'eng' }); 
  this._Lang();
}
  componentDidMount = async()=>{
    await AsyncStorage.setItem('lang', 'ru');
   this._Lang();
   this.SetRU()
    try {
      const Login = await AsyncStorage.getItem('Login')
       if(Login !== null) {

        this.setState({display1: 'flex'});

        this.setState({display2: 'none'});

       } else{
         console.log('not login')
       }
     } catch(e) {
    
       console.log('login get error')
     }
     RNBootSplash.hide(); 
  }

  _reg= async() =>{
if(this.state.password === this.state.password2  && this.state.login !== '' && this.state.password2 !== '' && this.state.password !== '' ){

  const response = await fetch('https://connecttf.uz/registr.php', {
    method: 'post',
    header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
 password: this.state.password,
 passport: this.state.login,
 command: 'register', 

            })
    
  })
  const data = await response.json();
  try {
    await AsyncStorage.setItem('id', data.id);
    
  } catch (e) {
   
    console.log('error set id')
  }
  if(data.answer === 200){



    const id = await AsyncStorage.getItem('id')
    const response = await fetch('https://connecttf.uz/st.php', {
      method: 'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
  id: id
              })
      
    })
    const group = await response.json();

    await AsyncStorage.setItem('group', group.direction);
  

    try {
      await AsyncStorage.setItem('Login', this.state.login);
     
    } catch (e) {
     
      console.log('login set error')
    }

    try {
      await AsyncStorage.setItem('id', data.id);
      
    } catch (e) {
     
      console.log('error set id')
    }

    this.props.navigation.navigate('Tpage');

  } else if(data.answer !== 200) {

    alert(this.state.alertBase)

    this.setState({password11: []})
    this.setState({password12: []})
    
    this.setState({password: ''})
    this.setState({password2: ''})
    
    this.setState({layout11: '#E8EAF6'});
    this.setState({layout12: '#E8EAF6'});
    this.setState({layout13: '#E8EAF6'});
    this.setState({layout14: '#E8EAF6'});
    
    this.setState({layout21: '#E8EAF6'});
    this.setState({layout22: '#E8EAF6'});
    this.setState({layout23: '#E8EAF6'});
    this.setState({layout24: '#E8EAF6'});
    
    Animated.timing(this.state.anim3, {
      toValue: width+width,
      duration: 500,
      useNativeDriver: false
    }).start();
  
    Animated.timing(this.state.anim2, {
      toValue: width+width,
      duration: 500,
      useNativeDriver: false
    }).start();
  
    Animated.timing(this.state.anim1, {
      toValue: width/5,
      duration: 500,
      useNativeDriver: false
    }).start();
  
    this.setState({ bubleC1: '#0099cc' })
    this.setState({ bubleC2: '#E8EAF6' })
    this.setState({ bubleC3: '#E8EAF6' })
  
    this.setState({ bubleW1: height/50 })
    this.setState({ bubleW2: height/70 })
    this.setState({ bubleW3: height/70 })
  }


} else{
  alert(this.state.passwordFalse)
 
}




   }

  _go= async() =>{
    if(this.state.pass.length === 0) {
      this.setState({layout1: '#E8EAF6'});
      this.setState({layout2: '#E8EAF6'});
      this.setState({layout3: '#E8EAF6'});
      this.setState({layout4: '#E8EAF6'});
    } else if(this.state.pass.length === 1){
      this.setState({layout1: '#0099cc'});
      this.setState({layout2: '#E8EAF6'});
      this.setState({layout3: '#E8EAF6'});
      this.setState({layout4: '#E8EAF6'});
    }
    else if(this.state.pass.length === 2){
      this.setState({layout1: '#0099cc'});
      this.setState({layout2: '#0099cc'});
      this.setState({layout3: '#E8EAF6'});
      this.setState({layout4: '#E8EAF6'});
    }     else if(this.state.pass.length === 3){
      this.setState({layout1: '#0099cc'});
      this.setState({layout2: '#0099cc'});
      this.setState({layout3: '#0099cc'});
      this.setState({layout4: '#E8EAF6'});
    }     else if(this.state.pass.length === 4){
      this.setState({layout1: '#0099cc'});
      this.setState({layout2: '#0099cc'});
      this.setState({layout3: '#0099cc'});
      this.setState({layout4: '#0099cc'});



    
     
      for(let i = 0; i<4; i++){
        this.state.password = this.state.password + this.state.pass[i];
      } 
      try {
        const Login = await AsyncStorage.getItem('Login')
         if(Login !== null) {
          this.setState({login: Login});
         } else{
           console.log('xz')
         }
       } catch(e) {

         console.log('error get login')
       }
       
      const response = await fetch('https://connecttf.uz/registr.php', {
        method: 'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
     passport: this.state.login,
     password: this.state.password,
     command: 'entrance',
    
                })
        
      })
      const data = await response.json();
      if(data.answer === 200){

   console.log('so okay')
   this.props.data.navigation.navigate('Tpage');

      this.setState({layout1: '#E8EAF6'});
      this.setState({layout2: '#E8EAF6'});
      this.setState({layout3: '#E8EAF6'});
      this.setState({layout4: '#E8EAF6'});

      this.setState({password: ''});
      this.setState({password2: ''});

      this.setState({pass: []});
    
      } else if(data !== 200) {
      
        
        alert(this.state.passwordError);

        this.setState({layout1: '#E8EAF6'});
        this.setState({layout2: '#E8EAF6'});
        this.setState({layout3: '#E8EAF6'});
        this.setState({layout4: '#E8EAF6'});

        this.setState({password: ''});
        this.setState({password2: ''});

        this.setState({pass: []});
      }
    }


  }





  _go2 = async() =>{
    if(this.state.password11.length === 0) {
      this.setState({layout11: '#E8EAF6'});
      this.setState({layout12: '#E8EAF6'});
      this.setState({layout13: '#E8EAF6'});
      this.setState({layout14: '#E8EAF6'});
    } else if(this.state.password11.length === 1){
      this.setState({layout11: '#0099cc'});
      this.setState({layout12: '#E8EAF6'});
      this.setState({layout13: '#E8EAF6'});
      this.setState({layout14: '#E8EAF6'});
    }
    else if(this.state.password11.length === 2){
      this.setState({layout11: '#0099cc'});
      this.setState({layout12: '#0099cc'});
      this.setState({layout13: '#E8EAF6'});
      this.setState({layout14: '#E8EAF6'});
    }     else if(this.state.password11.length === 3){
      this.setState({layout11: '#0099cc'});
      this.setState({layout12: '#0099cc'});
      this.setState({layout13: '#0099cc'});
      this.setState({layout14: '#E8EAF6'});
    }     else if(this.state.password11.length === 4){
      this.setState({layout11: '#0099cc'});
      this.setState({layout12: '#0099cc'});
      this.setState({layout13: '#0099cc'});
      this.setState({layout14: '#0099cc'});


      Animated.timing(this.state.anim2, {
        toValue: -width,
        duration: 500,
        useNativeDriver: false
      }).start();

      Animated.timing(this.state.anim3, {
        toValue: width/5,
        duration: 500,
        useNativeDriver: false
      }).start();
    
      this.setState({ bubleC1: '#E8EAF6' })
      this.setState({ bubleC2: '#E8EAF6' })
      this.setState({ bubleC3: '#0099cc' })

      this.setState({ bubleW1: height/70 })
      this.setState({ bubleW2: height/70 })
      this.setState({ bubleW3: height/50 })


    }
  }





  _go3= async() =>{
    if(this.state.password12.length === 0) {
      this.setState({layout21: '#E8EAF6'});
      this.setState({layout22: '#E8EAF6'});
      this.setState({layout23: '#E8EAF6'});
      this.setState({layout24: '#E8EAF6'});
    } else if(this.state.password12.length === 1){
      this.setState({layout21: '#0099cc'});
      this.setState({layout22: '#E8EAF6'});
      this.setState({layout23: '#E8EAF6'});
      this.setState({layout24: '#E8EAF6'});
    }
    else if(this.state.password12.length === 2){
      this.setState({layout21: '#0099cc'});
      this.setState({layout22: '#0099cc'});
      this.setState({layout23: '#E8EAF6'});
      this.setState({layout24: '#E8EAF6'});
    }     else if(this.state.password12.length === 3){
      this.setState({layout21: '#0099cc'});
      this.setState({layout22: '#0099cc'});
      this.setState({layout23: '#0099cc'});
      this.setState({layout24: '#E8EAF6'});
    }     else if(this.state.password12.length === 4){
      this.setState({layout21: '#0099cc'});
      this.setState({layout22: '#0099cc'});
      this.setState({layout23: '#0099cc'});
      this.setState({layout24: '#0099cc'});

            for(let i = 0; i<4; i++){
        this.state.password = this.state.password + this.state.password11[i];
        this.state.password2 = this.state.password2 + this.state.password12[i];
        
      } 

if(this.state.password === this.state.password2){
  console.log('done!!!!!!')
  this._reg();

    }else{
      alert(this.state.passwordFalse)
this.setState({password11: []})
this.setState({password12: []})

this.setState({password: ''})
this.setState({password2: ''})

this.setState({layout11: '#E8EAF6'});
this.setState({layout12: '#E8EAF6'});
this.setState({layout13: '#E8EAF6'});
this.setState({layout14: '#E8EAF6'});

this.setState({layout21: '#E8EAF6'});
this.setState({layout22: '#E8EAF6'});
this.setState({layout23: '#E8EAF6'});
this.setState({layout24: '#E8EAF6'});

console.log(this.state.password11 + '  ' + this.state.password12)
console.log(this.state.password + '  ' + this.state.password2)

      Animated.timing(this.state.anim3, {
        toValue: -width,
        duration: 500,
        useNativeDriver: false
      }).start();

      Animated.timing(this.state.anim2, {
        toValue: width/5,
        duration: 500,
        useNativeDriver: false
      }).start();
    
      this.setState({ bubleC1: '#E8EAF6' })
      this.setState({ bubleC2: '#0099cc' })
      this.setState({ bubleC3: '#E8EAF6' })

      this.setState({ bubleW1: height/70 })
      this.setState({ bubleW2: height/50 })
      this.setState({ bubleW3: height/70 })
    }
  }


  }







  _func1 = () => {
   this.state.pass.push('1');
   this._go()
  }
  _func2 = () => {
    this.state.pass.push('2');
    this._go()
   }
   _func3 = () => {
    this.state.pass.push('3');
    this._go();
   }
   _func4 = () => {
    this.state.pass.push('4');
    this._go() 
   }
   _func5 = () => {
    this.state.pass.push('5');
    this._go()
   }
   _func6 = () => {
    this.state.pass.push('6') 
    this._go() 
   }
   _func7 = () => {
    this.state.pass.push('7') 
    this._go() 
   }
   _func8 = () => {
    this.state.pass.push('8') 
    this._go() 
   }
   _func9 = () => {
    this.state.pass.push('9') 
    this._go() 
   }
   _func0 = () => {
    this.state.pass.push('0') 
    this._go() 
   }
   _del = () => {
    this.state.pass.pop()
    this._go()
   };




   _func11 = () => {
    this.state.password11.push('1');
    this._go2()
   }
   _func12 = () => {
     this.state.password11.push('2');
     this._go2()
    }
    _func13 = () => {
     this.state.password11.push('3');
     this._go2();
    }
    _func14 = () => {
     this.state.password11.push('4');
     this._go2() 
    }
    _func15 = () => {
     this.state.password11.push('5');
     this._go2()
    }
    _func16 = () => {
     this.state.password11.push('6') 
     this._go2() 
    }
    _func17 = () => {
     this.state.password11.push('7') 
     this._go2() 
    }
    _func18 = () => {
     this.state.password11.push('8') 
     this._go2() 
    }
    _func19 = () => {
     this.state.password11.push('9') 
     this._go2() 
    }
    _func01 = () => {
     this.state.password11.push('0') 
     this._go2() 
    }
    _del1 = () => {
     this.state.password11.pop()
     this._go2()
    };



    _func21 = () => {
      this.state.password12.push('1');
      this._go3()
     }
     _func22 = () => {
       this.state.password12.push('2');
       this._go3()
      }
      _func23 = () => {
       this.state.password12.push('3');
       this._go3();
      }
      _func24 = () => {
       this.state.password12.push('4');
       this._go3() 
      }
      _func25 = () => {
       this.state.password12.push('5');
       this._go3()
      }
      _func26 = () => {
       this.state.password12.push('6') 
       this._go3() 
      }
      _func27 = () => {
       this.state.password12.push('7') 
       this._go3() 
      }
      _func28 = () => {
       this.state.password12.push('8') 
       this._go3() 
      }
      _func29 = () => {
       this.state.password12.push('9') 
       this._go3() 
      }
      _func20 = () => {
       this.state.password12.push('0') 
       this._go3() 
      }
      _del2 = () => {
       this.state.password12.pop()
       this._go3()
      };




    render(){

      const go1 = () => {
        if(this.state.seria !== '' && this.state.numer !== ' ' && this.state.seria !== ' ' && this.state.numer !== ''){
        let log1 = this.state.seria + ' ' + this.state.numer;
        this.setState({login: log1})

        Animated.timing(this.state.anim1, {
          toValue: -width,
          duration: 500,
          useNativeDriver: false
        }).start();

        Animated.timing(this.state.anim2, {
          toValue: width/5,
          duration: 500,
          useNativeDriver: false
        }).start();
      
        this.setState({ bubleC1: '#E8EAF6' })
        this.setState({ bubleC2: '#0099cc' })
        this.setState({ bubleC3: '#E8EAF6' })

        this.setState({ bubleW1: height/70 })
        this.setState({ bubleW2: height/50 })
        this.setState({ bubleW3: height/70 })

        }else{
          alert(this.state.alertEnterData)
        }
        
      }





       return(
            <SafeAreaView style={{flex:1, backgroundColor: '#fefeff',alignItems: 'center'}}>
                 <StatusBar barStyle="light-content" backgroundColor="darkblue" />



                 <View style={{flexDirection: 'row', marginTop: height/80, left: width/2}} >
        <View style={{left: width/-6}} >
                <TouchableOpacity onPress={()=> this.SetUZB()} >
                <View style={{flexDirection: 'row'}} >
                <Image style={{height: height/48, width: height/38, marginRight: width/80}}  source={require('../img/uzb.png')} />
                </View>
                </TouchableOpacity>
                </View>
                <View style={{left: width/-6.9}} >
                <TouchableOpacity onPress={()=> this.SetENG()} >
                <View style={{flexDirection: 'row'}} >
                <Image style={{height: height/48, width: height/38, marginRight: width/80}}  source={require('../img/british.png')} />
                </View>
                </TouchableOpacity>
                </View>
    
                <View style={{left: width/-8}} >
                <TouchableOpacity onPress={()=> this.SetRU()} >
                <View style={{flexDirection: 'row'}} >
                <Image style={{height: height/48, width: height/38, marginRight: width/80}}  source={require('../img/rus.jpg')} />
                </View>
                </TouchableOpacity>
                </View>
                
            </View>




                 <Image style={{height: height/4, width: width/1.7}} source={require('../img/illustration.png')} />
                 <View style={{ display: this.state.display1, height: height/10, top: height/6.4, width: width, justifyContent: 'center', alignItems: 'center', position: 'relative'}} >

                 <Text style={{marginBottom: height/20, top: height/30, fontSize: height/40}} >{this.state.Enter}</Text>

<View style={{flexDirection: 'row', height: height/50, width: width/1.7, justifyContent: 'center', alignItems: 'center', top: height/30}} >

<View style={{height: height/35, width: height/35, borderRadius: height/35, backgroundColor: this.state.layout1,  margin: width/40}} ></View>

<View style={{height: height/35, width: height/35, borderRadius: height/35, backgroundColor: this.state.layout2,  margin: width/40}} ></View>

<View style={{height: height/35, width: height/35, borderRadius: height/35, backgroundColor: this.state.layout3,  margin: width/40}} ></View>

<View style={{height: height/35, width: height/35, borderRadius: height/35, backgroundColor: this.state.layout4,  margin: width/40}} ></View>

</View>


<View style={{height: height/3, width: width/1.5, marginBottom: height/40, top: height/7, position: 'relative',justifyContent: 'center', alignItems: 'center'}} >

<View style={{flexDirection: 'row'}} >

<View style={{ margin: width/25,}} >

  <View style={{ width: height/10, left: width/50}} >
<TouchableOpacity onPress={this._func1} style={{height: height/15, borderRadius: height/17, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >1</Text>
  </TouchableOpacity>
  </View>
  </View>

<View style={{margin: width/25,  width: height/10, left: width/100}} >
  <TouchableOpacity onPress={this._func2} style={{height: height/15, borderRadius: height/17, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >2</Text>
  </TouchableOpacity>
  </View>

<View style={{margin: width/25, width: height/10, left: width/-80}} >
<TouchableOpacity onPress={this._func3} style={{height: height/15, borderRadius: height/17, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >3</Text>
  </TouchableOpacity>
  </View>

</View>


<View style={{flexDirection: 'row'}} >

  <View style={{margin: width/25, width: height/10, left: width/80}} >
<TouchableOpacity onPress={this._func4} style={{height: height/15,  borderRadius: height/17, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >4</Text>
  </TouchableOpacity>
  </View>

<View style={{ margin: width/25, width: height/10, left: width/100}} >
  <TouchableOpacity onPress={this._func5} style={{height: height/15, borderRadius: height/17, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
  <Text style={{fontSize: height/22}} >5</Text>
  </TouchableOpacity>
  </View>

<View style={{margin: width/25, width: height/10, left: width/-90}} >
<TouchableOpacity onPress={this._func6} style={{height: height/15, borderRadius: height/17, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
  <Text style={{fontSize: height/22}} >6</Text>
  </TouchableOpacity>
  </View>

</View>

<View style={{flexDirection: 'row'}} >

  <View style={{margin: width/25, width: height/10, left: width/80}} >
<TouchableOpacity onPress={this._func7} style={{height: height/15, borderRadius: height/17, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >7</Text>
  </TouchableOpacity>
  </View>

      <View style={{ margin: width/25, width: height/10, left: width/80}} >
  <TouchableOpacity onPress={this._func8} style={{height: height/15, borderRadius: height/17, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >8</Text>
  </TouchableOpacity>
  </View>

 <View style={{margin: width/25, width: height/10, left: width/-100}} >
<TouchableOpacity onPress={this._func9} style={{height: height/15,  borderRadius: height/17, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >9</Text>
  </TouchableOpacity>
  </View>

</View>



<View style={{flexDirection: 'row'}} >
        <View style={{width: height/10, left: width/6.9, margin: width/25, }} >
  <TouchableOpacity onPress={this._func0} style={{ height: height/15, borderRadius: height/17, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >0</Text>
  </TouchableOpacity>
    </View>

        <View style={{margin: width/25, width: height/10, left: width/8}} >
  <TouchableOpacity onPress={this._del} style={{height: height/15, borderRadius: height/17, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
<Image style={{height: height/40, width: height/30, opacity: 0.6}} source={require('../img/clear.png')} />
  </TouchableOpacity>
  </View>

</View>


</View>

 
                </View>


     
             <View style={{ display: this.state.display2, height: height/10, top: height/10, width: width, justifyContent: 'center', alignItems: 'center',}} >


<Animated.View style={{left: this.state.anim1, position: 'absolute', top: height/100, height: height/2.3}} >
  <View style={{height: height/20, width: width, position: 'absolute', top: height/-15, left: width/-5, justifyContent: 'center', alignItems: 'center'}} >
<Text style={{fontSize: width/18, fontWeight: '500', position: 'relative'}} >{this.state.Reg}</Text>
</View>
             <TextInput
 placeholder={this.state.passSeria}
 style={{height: height/18, width: width/1.7,
    backgroundColor: 'white', borderRadius: 50, color: 'black',
     fontSize: width/25, paddingLeft: width/80, paddingBottom: 0, marginTop: height/55, 
     paddingTop: 0, zIndex: 10, position: 'relative', borderColor: 'black', borderWidth:1, paddingLeft: width/20, opacity: 0.7, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, }}
 onChangeText={seria => this.setState({seria: seria})}
 ref={input => { this.textInput = input }}
 />
              <TextInput
 placeholder={this.state.passNum} keyboardType='numeric'
 style={{height: height/18, width: width/1.7,
    backgroundColor: 'white', borderRadius: 50, color: 'black',
     fontSize: width/25, paddingLeft: width/80, paddingBottom: 0, marginTop: height/55, 
     paddingTop: 0, zIndex: 10, position: 'relative', borderColor: 'black', borderWidth:1, paddingLeft: width/20, opacity: 0.7, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, }}
 onChangeText={numer => this.setState({numer: numer})}
 ref={input => { this.textInput = input }}
 />


<TouchableOpacity onPress={()=> go1()}  style={{height: height/22, width: height/6, backgroundColor: '#0099cc', marginTop: height/22.1, borderRadius: 10, left: width/7, justifyContent: 'center', alignItems: 'center' }} >
<Text style={{color: 'white', fontSize: width/23}} >{this.state.Next}</Text>
   </TouchableOpacity>

   <View style={{top: height/2.6, position: 'absolute', left: width/10}} >
     <TouchableOpacity onPress={() => this.props.data.navigation.navigate('Login')}  >
     <View style={{height: height/20, width: width,  zIndex: 100, left: width/-3.5, justifyContent: 'center', alignItems: 'center',}} >
     <Text style={{fontSize: width/27, }} onPress={()=> console.log('Press')} >{this.state.IHave}</Text>
     </View>    
  </TouchableOpacity>
</View>

   </Animated.View >


   <Animated.View style={{left: this.state.anim2, position: 'absolute', top: -height/20,}} >

   <View style={{flexDirection: 'row', height: height/50, width: width/1.7, justifyContent: 'center', alignItems: 'center', left: width/40}} >

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout11,  margin: width/40}} ></View>

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout12,   margin: width/40}} ></View>

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout13,  margin: width/40}} ></View>

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout14,  margin: width/40}} ></View>

</View>
<View style={{height: height/20, width: width, position: 'absolute', top: height/35, left: width/-5.5, justifyContent: 'center', alignItems: 'center'}} >
<Text style={{fontSize: width/25,}} >{this.state.PickPass}</Text>
</View>
<View style={{height: height/3, width: width/1.5, marginBottom: height/40, top: height/10, position: 'relative',justifyContent: 'center', alignItems: 'center'}} >

<View style={{flexDirection: 'row',}} >

<View style={{ margin: width/25, width: height/10, left: width/50}} >
<TouchableOpacity onPress={this._func11} style={{height: height/17, borderRadius: height/17,  justifyContent: 'center', alignItems: 'center', position: 'relative'}} >
  <Text  style={{fontSize: height/22}} >1</Text>
  </TouchableOpacity>
  </View>

<View style={{ margin: width/25, width: height/10, left: width/100}} >
  <TouchableOpacity onPress={this._func12} style={{height: height/17, borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >2</Text>
  </TouchableOpacity>
  </View>

<View style={{margin: width/25, width: height/10, left: width/-80}} >
<TouchableOpacity onPress={this._func13} style={{height: height/17, borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >3</Text>
  </TouchableOpacity>
  </View>

</View>


<View style={{flexDirection: 'row'}} >

  <View style={{margin: width/25, width: height/10, left: width/80}} >
<TouchableOpacity onPress={this._func14} style={{height: height/17,  borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >4</Text>
  </TouchableOpacity>
  </View>

<View style={{margin: width/25, width: height/10, left: width/100}} >
  <TouchableOpacity onPress={this._func15} style={{height: height/17,  borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >5</Text>
  </TouchableOpacity>
  </View>

<View style={{margin: width/25, width: height/10, left: width/-90}} >
<TouchableOpacity onPress={this._func16} style={{height: height/17,  borderRadius: height/17, justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >6</Text>
  </TouchableOpacity>
  </View>

</View>

<View style={{flexDirection: 'row'}} >

  <View style={{margin: width/25, width: height/10, left: width/80}} >
<TouchableOpacity onPress={this._func17} style={{height: height/17,   borderRadius: height/17, justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >7</Text>
  </TouchableOpacity>
  </View>

<View style={{margin: width/25, width: height/10, left: width/80}} >
  <TouchableOpacity onPress={this._func18} style={{height: height/17,   borderRadius: height/17, justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >8</Text>
  </TouchableOpacity>
  </View>

<View style={{margin: width/25, width: height/10, left: width/-100}} >
<TouchableOpacity onPress={this._func19} style={{height: height/17,  borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text style={{fontSize: height/22}} >9</Text>
  </TouchableOpacity>
  </View>

</View>



<View style={{flexDirection: 'row'}} >

  <View style={{ width: height/10, left: width/6.9, margin: width/25,}} >
<TouchableOpacity onPress={this._func01} style={{height: height/17,  borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >0</Text>
  </TouchableOpacity>
  </View>

<View style={{margin: width/25, width: height/10, left: width/8}} >
  <TouchableOpacity onPress={this._del1} style={{height: height/17,  borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
<Image style={{height: height/40, width: height/30, opacity: 0.6}} source={require('../img/clear.png')} />
  </TouchableOpacity>
  </View>

</View>


</View>
</Animated.View>




<Animated.View style={{left: this.state.anim3, position: 'absolute', top: -height/20,}} >

<View style={{flexDirection: 'row', height: height/50, width: width/1.7, justifyContent: 'center', alignItems: 'center', left: width/40}} >

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout21,  margin: width/40}} ></View>

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout22,   margin: width/40}} ></View>

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout23,  margin: width/40}} ></View>

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout24,  margin: width/40}} ></View>

</View>
<View style={{height: height/20, width: width, position: 'absolute', top: height/35, left: width/-5.5, justifyContent: 'center', alignItems: 'center'}} >
<Text style={{fontSize: width/25,}} >{this.state.ConfirmPass}</Text>
</View>
<View style={{height: height/3, width: width/1.5, marginBottom: height/40, top: height/10, position: 'relative',justifyContent: 'center', alignItems: 'center'}} >

<View style={{flexDirection: 'row',}} >

<View style={{ margin: width/25, width: height/10, left: width/50}} >
<TouchableOpacity onPress={this._func21} style={{height: height/17, borderRadius: height/17, justifyContent: 'center', alignItems: 'center'}} >
<Text  style={{fontSize: height/22}} >1</Text>
</TouchableOpacity>
</View>

<View style={{margin: width/25,  width: height/10, left: width/100}} >
<TouchableOpacity onPress={this._func22} style={{height: height/17,  borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
<Text  style={{fontSize: height/22}} >2</Text>
</TouchableOpacity>
</View>

<View style={{margin: width/25, width: height/10, left: width/-80}} >
<TouchableOpacity onPress={this._func23} style={{height: height/17, borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
<Text  style={{fontSize: height/22}} >3</Text>
</TouchableOpacity>
</View>

</View>


<View style={{flexDirection: 'row'}} >

<View style={{margin: width/25, width: height/10, left: width/80}} >
<TouchableOpacity onPress={this._func24} style={{height: height/17, borderRadius: height/17, justifyContent: 'center', alignItems: 'center'}} >
<Text  style={{fontSize: height/22}} >4</Text>
</TouchableOpacity>
</View>

<View style={{ margin: width/25, width: height/10, left: width/100}} >
<TouchableOpacity onPress={this._func25} style={{height: height/17, borderRadius: height/17, justifyContent: 'center', alignItems: 'center'}} >
<Text  style={{fontSize: height/22}} >5</Text>
</TouchableOpacity>
</View>

<View style={{margin: width/25, width: height/10, left: width/-90}} >
<TouchableOpacity onPress={this._func26} style={{height: height/17, borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
<Text  style={{fontSize: height/22}} >6</Text>
</TouchableOpacity>
</View>

</View>

<View style={{flexDirection: 'row'}} >

<View style={{margin: width/25, width: height/10, left: width/80}} >
<TouchableOpacity onPress={this._func27} style={{height: height/17,  borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
<Text  style={{fontSize: height/22}} >7</Text>
</TouchableOpacity>
</View>

<View style={{ margin: width/25, width: height/10, left: width/80}} >
<TouchableOpacity onPress={this._func28} style={{height: height/17,  borderRadius: height/17, justifyContent: 'center', alignItems: 'center'}} >
<Text  style={{fontSize: height/22}} >8</Text>
</TouchableOpacity>
</View>

<View style={{margin: width/25, width: height/10, left: width/-100}} >
<TouchableOpacity onPress={this._func29} style={{height: height/17, borderRadius: height/17, justifyContent: 'center', alignItems: 'center'}} >
<Text style={{fontSize: height/22}} >9</Text>
</TouchableOpacity>
</View>

</View>



<View style={{flexDirection: 'row'}} >

<View style={{width: height/10, left: width/6.9, margin: width/25, }} >
<TouchableOpacity onPress={this._func20} style={{height: height/17,  borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >0</Text>
  </TouchableOpacity>
  </View>

<View style={{margin: width/25, width: height/10, left: width/8}} >
  <TouchableOpacity onPress={this._del2} style={{height: height/17,  borderRadius: height/17,  justifyContent: 'center', alignItems: 'center'}} >
<Image style={{height: height/40, width: height/30, opacity: 0.6}} source={require('../img/clear.png')} />
  </TouchableOpacity>
  </View>



</View>


</View>
</Animated.View>







<View style={{bottom: -height/3.5}} > 

<Animated.View  style={{height: height/70, width: this.state.bubleW1, borderRadius: 15, position: 'absolute', top: height/8, left: -width/10, backgroundColor: this.state.bubleC1}} ></Animated.View >
<Animated.View  style={{height: height/70, width: this.state.bubleW2, borderRadius: 15, position: 'absolute', top: height/8, left: width/100, backgroundColor: this.state.bubleC2}} ></Animated.View >
<Animated.View  style={{height: height/70, width: this.state.bubleW3,  borderRadius: 15, position: 'absolute', top: height/8, left: width/9, backgroundColor: this.state.bubleC3}} ></Animated.View >

</View>

               </View>
  
</SafeAreaView>
        );
    }
}