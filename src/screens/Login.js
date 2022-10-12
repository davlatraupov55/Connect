import React from "react";
import {TouchableOpacity} from "react-native-gesture-handler";
import { View, Text, Image, TextInput, StatusBar, Dimensions, SafeAreaView, Animated} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default class Login extends React.Component{


  constructor(props) {
    super(props);
    this.state = {

     anim1: new Animated.Value(width/5),
     anim2: new Animated.Value(width+width),

     bubleW1: height/50,
     bubleW2: height/70,

     bubleC1: '#0099cc',
     bubleC2: '#E8EAF6',

     seria: '',
     numer: '',

     login:'',

     password: '',


     password11: [],

     display1: 'none',
     display2: 'flex',
     pass: [],

     layout21 : '#E8EAF6',
     layout22 : '#E8EAF6',
     layout23 : '#E8EAF6',
     layout24 : '#E8EAF6',

     alertBase: '',
     reType: '',
     alertEnterData: '',
     passSeria: '',
     passNum: '',
     Login: '',
     Next: '',
     EnterPassword: '',
    };
  }

componentDidMount = async() => {

  const language = await AsyncStorage.getItem('lang');
console.log(language)
  if(language === 'uzb'){
    this.setState({alertBase: "Sizni ma'lumotlar bazasidan topa olmadik!"});
    this.setState({reType: "Ma'lumotlarni tekshiring va qayta kiriting"});
    this.setState({alertEnterData: "Belgilangan ma'lumotlarni kiritishingiz kerak"});
    this.setState({passSeria: "Pasport seriyasi"});
    this.setState({passNum: "Pasport raqami"});
    this.setState({Login: "Login"});
    this.setState({Next: "Keyingi"});
    this.setState({EnterPassword: "Parolni kiriting"});
  } 
  else if(language === 'ru'){
    this.setState({alertBase: 'Мы не нашли вас на базе данных!'});
    this.setState({reType: "Проверьте данные и введите заново"});
    this.setState({alertEnterData: "Необходимо ввести указанные данные"});
    this.setState({passSeria: "Введите серию паспорта"});
    this.setState({passNum: "Введите номер паспорта"});
    this.setState({Login: "Вход"});
    this.setState({Next: "Далее"});
    this.setState({EnterPassword: "Введите пароль"});
  }
  else if(language === 'eng'){
    this.setState({alertBase: "We didn't find you in the database!"});
    this.setState({reType: "Check the data and re-enter"});
    this.setState({alertEnterData: "You must enter the specified data"});
    this.setState({passSeria: "Enter the passport series"});
    this.setState({passNum: "Enter your passport number"});
    this.setState({Login: "Login"});
    this.setState({Next: "Next"});
    this.setState({EnterPassword: "Enter password"});
  }
}


  _login= async() =>{
if(this.state.login !== '' && this.state.password !== '' ){

  const response = await fetch('https://connecttf.uz/registr.php', {
    method: 'post',
    header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
 password: this.state.password,
 passport: this.state.login,
 command: 'entrance', 
            })
    
  })
  const data = await response.json();
  try {
    await AsyncStorage.setItem('id', data.id);
    
  } catch (e) {
   
    console.log('error set id')
  }
  if(data.answer === 200){



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
    
    alert(this.state.alertBase + ' ' + data.answer)

    this.setState({password11: []})
    
    this.setState({password: ''})
    
    
    this.setState({layout21: '#E8EAF6'});
    this.setState({layout22: '#E8EAF6'});
    this.setState({layout23: '#E8EAF6'});
    this.setState({layout24: '#E8EAF6'});
    

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
  
    this.setState({ bubleW1: height/50 })
    this.setState({ bubleW2: height/70 })
  }


} else{
  alert(this.state.reType)
 
}

   }


  _go2= async() =>{
    if(this.state.password11.length === 0) {
      this.setState({layout21: '#E8EAF6'});
      this.setState({layout22: '#E8EAF6'});
      this.setState({layout23: '#E8EAF6'});
      this.setState({layout24: '#E8EAF6'});
    } else if(this.state.password11.length === 1){
      this.setState({layout21: '#0099cc'});
      this.setState({layout22: '#E8EAF6'});
      this.setState({layout23: '#E8EAF6'});
      this.setState({layout24: '#E8EAF6'});
    }
    else if(this.state.password11.length === 2){
      this.setState({layout21: '#0099cc'});
      this.setState({layout22: '#0099cc'});
      this.setState({layout23: '#E8EAF6'});
      this.setState({layout24: '#E8EAF6'});
    }     else if(this.state.password11.length === 3){
      this.setState({layout21: '#0099cc'});
      this.setState({layout22: '#0099cc'});
      this.setState({layout23: '#0099cc'});
      this.setState({layout24: '#E8EAF6'});
    }     else if(this.state.password11.length === 4){
      this.setState({layout21: '#0099cc'});
      this.setState({layout22: '#0099cc'});
      this.setState({layout23: '#0099cc'});
      this.setState({layout24: '#0099cc'});

            for(let i = 0; i<4; i++){
        this.state.password = this.state.password + this.state.password11[i];
        
      } 

  console.log('done!!!!!!')
  this._login();

  }


  }

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

        this.setState({ bubleW1: height/70 })
        this.setState({ bubleW2: height/50 })

        }else{
          alert(this.state.alertEnterData)
        }
        
      }



       return(
            <SafeAreaView style={{flex:1, backgroundColor: '#fefeff',alignItems: 'center'}}>
                 <StatusBar barStyle="light-content" backgroundColor="darkblue" />
                 <Image style={{height: height/3.3, width: width/1.4}} source={require('../img/illustration.png')} />
     
             <View style={{ display: this.state.display2, height: height/10, top: height/10, width: width, justifyContent: 'center', alignItems: 'center',}} >


<Animated.View style={{left: this.state.anim1, position: 'absolute', top: height/100, height: height/2.3}} >
<Text style={{marginBottom: height/20, top: height/-12, fontSize: width/18, fontWeight: '500', position: 'absolute', left: width/4.3}} >{this.state.Login}</Text>
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

   </Animated.View >


   <Animated.View style={{left: this.state.anim2, position: 'absolute', top: -height/20,}} >

   <View style={{flexDirection: 'row', height: height/50, width: width/1.7, justifyContent: 'center', alignItems: 'center', left: width/40}} >

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout21,  margin: width/40}} ></View>

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout22,   margin: width/40}} ></View>

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout23,  margin: width/40}} ></View>

<View style={{height: height/40, width: height/40, borderRadius: height/40, backgroundColor: this.state.layout24,  margin: width/40}} ></View>

</View>

<Text style={{fontSize: width/25, position: 'absolute', top: height/22, left: width/5.5}} >{this.state.EnterPassword}</Text>
<View style={{height: height/3, width: width/1.5, marginBottom: height/40, top: height/10, position: 'relative',justifyContent: 'center', alignItems: 'center'}} >

<View style={{flexDirection: 'row',}} >

<View style={{ margin: width/25, width: height/10, left: width/50}} >
<TouchableOpacity onPress={this._func11} style={{height: height/17,  justifyContent: 'center', alignItems: 'center', position: 'relative'}} >
  <Text  style={{fontSize: height/22}} >1</Text>
  </TouchableOpacity>
  </View>

  <View style={{margin: width/25,  width: height/10, left: width/100}} >
  <TouchableOpacity onPress={this._func12} style={{height: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >2</Text>
  </TouchableOpacity>
  </View>

  <View style={{margin: width/25, width: height/10, left: width/-80}} >
<TouchableOpacity onPress={this._func13} style={{height: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >3</Text>
  </TouchableOpacity>
  </View>

</View>


<View style={{flexDirection: 'row'}} >

<View style={{margin: width/25, width: height/10, left: width/80}} >
<TouchableOpacity onPress={this._func14} style={{height: height/17,   justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >4</Text>
  </TouchableOpacity>
  </View>

  <View style={{ margin: width/25, width: height/10, left: width/100}} >
  <TouchableOpacity onPress={this._func15} style={{height: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >5</Text>
  </TouchableOpacity>
  </View>

  <View style={{margin: width/25, width: height/10, left: width/-90}} >
<TouchableOpacity onPress={this._func16} style={{height: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >6</Text>
  </TouchableOpacity>
  </View>

</View>

<View style={{flexDirection: 'row'}} >

<View style={{margin: width/25, width: height/10, left: width/80}} >
<TouchableOpacity onPress={this._func17} style={{height: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >7</Text>
  </TouchableOpacity>
  </View>

  <View style={{ margin: width/25, width: height/10, left: width/80}} >
  <TouchableOpacity onPress={this._func18} style={{height: height/17, justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >8</Text>
  </TouchableOpacity>
  </View>

  <View style={{margin: width/25, width: height/10, left: width/-100}} >
<TouchableOpacity onPress={this._func19} style={{height: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text style={{fontSize: height/22}} >9</Text>
  </TouchableOpacity>
  </View>

</View>



<View style={{flexDirection: 'row'}} >

<View style={{width: height/10, left: width/6.9, margin: width/25, }} >
<TouchableOpacity onPress={this._func01} style={{height: height/17,  justifyContent: 'center', alignItems: 'center'}} >
  <Text  style={{fontSize: height/22}} >0</Text>
  </TouchableOpacity>
  </View>

  <View style={{margin: width/25, width: height/10, left: width/8}} >
  <TouchableOpacity onPress={this._del1} style={{height: height/17, justifyContent: 'center', alignItems: 'center'}} >
<Image style={{height: height/40, width: height/30, opacity: 0.6}} source={require('../img/clear.png')} />
  </TouchableOpacity>
  </View>

</View>


</View>
</Animated.View>





<View style={{bottom: -height/3.5}} > 
<Animated.View  style={{height: height/70, width: this.state.bubleW1, borderRadius: 15, position: 'absolute', top: height/8, left: -width/30, backgroundColor: this.state.bubleC1}} ></Animated.View >
<Animated.View  style={{height: height/70, width: this.state.bubleW2, borderRadius: 15, position: 'absolute', top: height/8, left: width/20, backgroundColor: this.state.bubleC2}} ></Animated.View >
</View>

               </View>
  
</SafeAreaView>
        );
    }
}