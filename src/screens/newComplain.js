import React from "react";
import { View,  Dimensions, Image, TouchableOpacity, TextInput} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Desirable, Neces, Neces2, PubComplaint, SaveAnonim} from "../LangComponents/LangComponents";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height



export default class NewComplaint1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ' ',
            text: ' ',
            text2: ' ',
            alertSave: '',
            alertError: '',
            themeComplaint: '',
            descriptionComplaint: '',
            offersComplaint: ''
        }
    }

componentDidMount = async() => {

    const language = await AsyncStorage.getItem('lang');

    if(language === 'uzb'){
        this.setState({alertSave: "Shikoyatingiz saqlandi. Ta'lim sifatini oshirishga qo'shgan hissangiz uchun tashakkur"});
        this.setState({alertError: "Shikoyat yuborish uchun kerakli maydonlarni to'ldirishingiz kerak"});
        this.setState({themeComplaint: "Shikoyat mavzusi"});
        this.setState({descriptionComplaint: "Batafsil tavsif"});
        this.setState({offersComplaint: "Yechim uchun takliflar"});
      } else if(language === 'ru'){
        this.setState({alertSave: 'Ваша жалоба сохранена. Спасибо что вносите свой вклад на улучшение качества образования'});
        this.setState({alertError: "Для отправки жалобы необходимо зополнить объязательные поля"});
        this.setState({themeComplaint: "Тема жалобы"});
        this.setState({descriptionComplaint: "Подробное описание"});
        this.setState({offersComplaint: "Предложения по решению"});
      }else if(language === 'eng'){
        this.setState({alertSave: 'Your complaint has been saved. Thank you for your contribution to improve the quality of education'});
        this.setState({alertError: "To send a complaint, you must fill in the required fields"});
        this.setState({themeComplaint: "Subject of complaint"});
        this.setState({descriptionComplaint: "Detailed description"});
        this.setState({offersComplaint: "Suggestions for a solution"});
      }

}


 render(){

    const CLR = this.textInput; 
 const CompGo = async() => {
    if(this.state.title !== ' ' && this.state.text !== ' '){
    const id = await AsyncStorage.getItem('id')
    await fetch('https://connecttf.uz/complaint.php', {
        method: 'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        
        body:JSON.stringify({
            command: 'add',
            title: this.state.title,
            sentence: this.state.text2,
            id_student: id,
            teacher: 0,
            text: this.state.text

 })
 
 })
 
 this.props.nav.navigate('Complain')
     alert(this.state.alertSave)
 CLR.clear();
}else{
     alert(this.state.alertError)
 }
}
return(
    <View style={{flex: 1, width: width, height: height, alignItems: 'center', backgroundColor: '#FFF'}} >
 <Image style={{height: height/3.3, width: height/2.3, top: -height/30,}}  source={require("../img/complain.png")} /> 

<TextInput  ref={input => { this.textInput = input }}  onChangeText={title => this.setState({title})} placeholder={this.state.themeComplaint} style={{height: height/20, width: width-width/30, borderWidth: height/999, borderRadius: 10, fontSize: width/25, paddingLeft: width/40, top: -height/25}} />

<Neces/>

<TextInput ref={input => { this.textInput = input }}  onChangeText={text => this.setState({text})}  placeholder={this.state.descriptionComplaint} style={{height: height/10, width: width-width/30, borderWidth: height/999, borderRadius: 10, fontSize: width/25, paddingLeft: width/40, top: -height/20}} />

<Neces2/>


<TextInput ref={input => { this.textInput = input }}  onChangeText={text2 => this.setState({text2})}  placeholder={this.state.offersComplaint} style={{height: height/10, width: width-width/30, borderWidth: height/999, borderRadius: 10, fontSize: width/25, paddingLeft: width/40, position: 'relative', top: -height/17}} />
<Desirable/>

<SaveAnonim/>

<TouchableOpacity onPress={() => CompGo()}  style={{height: height/20, width: height/2, backgroundColor: '#0099cc', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: height/7}} >

<PubComplaint/>

  </TouchableOpacity> 
    </View>
)
 }
}