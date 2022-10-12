import React from "react";
import { View, Text, Dimensions, TouchableOpacity, SafeAreaView} from "react-native";
import LottieView from 'lottie-react-native';
import animation from '../assets'

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

class ChangePINScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
PIN: [1, 2, 0, 3],
EnteredPIN: [],
layout1: '#C9D0E8',
layout2: '#C9D0E8',
layout3: '#C9D0E8',
layout4: '#C9D0E8',  
 pass: [],
 status: 'Введите действующий PIN-код'
        };
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
         this.state.EnteredPIN.pop()
         this._go()
        };

        _delAll = () => {
            this.state.pass = []
            this.state.EnteredPIN = []
            this._go()
           };

        _go= async() =>{
            if(this.state.pass.length === 0) {
              this.setState({layout1: '#C9D0E8'});
              this.setState({layout2: '#C9D0E8'});
              this.setState({layout3: '#C9D0E8'});
              this.setState({layout4: '#C9D0E8'});
            } else if(this.state.pass.length === 1){
              this.setState({layout1: '#0099cc'});
              this.setState({layout2: '#C9D0E8'});
              this.setState({layout3: '#C9D0E8'});
              this.setState({layout4: '#C9D0E8'});
            }
            else if(this.state.pass.length === 2){
              this.setState({layout1: '#0099cc'});
              this.setState({layout2: '#0099cc'});
              this.setState({layout3: '#C9D0E8'});
              this.setState({layout4: '#C9D0E8'});
            }     else if(this.state.pass.length === 3){
              this.setState({layout1: '#0099cc'});
              this.setState({layout2: '#0099cc'});
              this.setState({layout3: '#0099cc'});
              this.setState({layout4: '#C9D0E8'});
            }     else if(this.state.pass.length === 4){
              this.setState({layout1: '#0099cc'});
              this.setState({layout2: '#0099cc'});
              this.setState({layout3: '#0099cc'});
              this.setState({layout4: '#0099cc'});

for (let i = 0; i < 4; i++ ) {
    if ( this.state.pass[i] == this.state.PIN[i] ){
        this.state.EnteredPIN[i] = true
    }else{
        this.state.EnteredPIN[i] = false
    }
}
console.log(this.state.EnteredPIN)
        if(this.state.EnteredPIN[0] === true & this.state.EnteredPIN[1] === true & this.state.EnteredPIN[2] === true & this.state.EnteredPIN[3] === true){
            this.setState({layout1: 'green'});
            this.setState({layout2: 'green'});
            this.setState({layout3: 'green'});
            this.setState({layout4: 'green'});
            this.setState({status: 'Ай маладес что пароль помнишь'}); 
        }else{
            this.setState({layout1: 'red'});
            this.setState({layout2: 'red'});
            this.setState({layout3: 'red'});
            this.setState({layout4: 'red'});
            this.setState({status: 'Неправильный пароль'}); 
        }
            }  
        }      
     

    render(){
        return(
<SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}} >
<View style={{height: height/3, width: width, position: 'relative', justifyContent: 'center', alignItems: 'center'}}> 
<Text style={{color: '#858585', fontSize: width/27, marginBottom: height/70, fontWeight: '700', left: width/3.5}} >Забыли PIN-код?</Text>    
      <LottieView style={{position: 'relative', width: width/1.8}}
      autoPlay
      loop
      source={animation.lottieFiles.pin}
      />


      </View>

            <Text style={{color: '#858585', fontSize: width/29, marginBottom: height/70}} >{this.state.status}</Text>
      <View style={{height: height/20, width: width/2.5,position: 'relative', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', opacity: 0.7}}>
        <View style={{height: height/40, width: height/40, backgroundColor: this.state.layout1, borderRadius: height/40}} ></View>
        <View style={{height: height/40, width: height/40, backgroundColor: this.state.layout2, borderRadius: height/40, marginLeft: width/20}} ></View>
        <View style={{height: height/40, width: height/40, backgroundColor: this.state.layout3, borderRadius: height/40, marginLeft: width/20}} ></View>
        <View style={{height: height/40, width: height/40, backgroundColor: this.state.layout4, borderRadius: height/40, marginLeft: width/20}} ></View>
      </View>

<View style={{height: height/2, width: width, position: 'relative', justifyContent: 'center', alignItems: 'center'}} >

<View style={{flexDirection: 'row'}} >
    <TouchableOpacity onPress={this._func1}>
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center',shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >1</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={this._func2}>
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginLeft: width/9, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >2</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={this._func3}>
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginLeft: width/9, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >3</Text>
    </View>
    </TouchableOpacity>
</View>

<View style={{flexDirection: 'row', marginTop: height/20}} >
<TouchableOpacity onPress={this._func4}>
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >4</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={this._func5}>
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginLeft: width/9, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >5</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={this._func6} >
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginLeft: width/9, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >6</Text>
    </View>
    </TouchableOpacity>
</View>

<View style={{flexDirection: 'row', marginTop: height/20}} >
<TouchableOpacity onPress={this._func7} >
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >7</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={this._func8} >
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginLeft: width/9, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >8</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={this._func9} >
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginLeft: width/9, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >9</Text>
    </View>
    </TouchableOpacity>
</View>

<View style={{flexDirection: 'row', marginTop: height/20}} >
<TouchableOpacity onPress={this._del} >
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >C</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={this._func0} >
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: width/9, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >0</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={this._delAll} >
    <View style={{height: height/15, width: height/12, borderRadius: height/50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginLeft: width/9, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
        <Text style={{fontSize: width/12, fontWeight: 'bold', color: '#858585'}} >D</Text>
    </View>
    </TouchableOpacity>
</View>

</View>


</SafeAreaView>
)
}
}

export default ChangePINScreen;