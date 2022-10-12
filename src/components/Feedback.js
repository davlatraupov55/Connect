import React from "react";
import { Dimensions, View,  Image, TextInput, TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default class FeedbackInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         feedbackText:'',
         teacherID: '',
         Alert: '',
         Input: '',
        };
      }

componentDidMount = async() => {
  const language = await AsyncStorage.getItem('lang');

  if(language === 'uzb'){
    this.setState({Alert: "O'qitish sifatini oshirishga qo'shgan hissangiz uchun tashakkur! Biz sizning fikr-mulohazalaringizni anonim qoldirdik va uni tez orada ko'rishingiz mumkin. Sizning fikringiz:"});
    this.setState({Input: "Anonim sharh yozing"});
  }
  else if(language === 'ru'){
    this.setState({Alert: 'Спасибо за вклад в развитии качества преподования! Мы сохранили ваш отзыв анонимно и скоро вы можете его увидеть. Ваш отзыв: '});
    this.setState({Input: "Написать анонимный отзыв"});
  }
  else if(language === 'eng'){
    this.setState({Alert: "Thank you for your contribution to the development of the quality of teaching! We have kept your feedback anonymous and you can see it soon. Your feedback:"});
    this.setState({Input: "Write an anonymous review"});

}
}
    render() {
      const id = this.props.data.ND.teacherId;
      const FeedTxt = this.state;
      const CLR = this.textInput; 

const SEND= async()=> {

  const Id = await AsyncStorage.getItem('id')
  fetch('https://connecttf.uz/reviews.php', {
    method: 'post',
    header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
      text: FeedTxt.feedbackText,
      student: Id,
      teacher: id,
      

            })
    
  })
  
    try {
      const teacherID = await AsyncStorage.getItem('teacherID');
   
      this.setState({teacherID:teacherID })

     } catch(e) {
       console.log('error get teacherID')
     }

    const response = await fetch('https://connecttf.uz/teachers.php', {
      method: 'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
   teacher: this.state.teacherID,


              })
      
    })
    const data3 = await response.json();
   
   
    try {
      await AsyncStorage.setItem('dataOtdel3', JSON.stringify(data3));
      
    } catch (e) {
     
      console.log(e)
    }

alert(this.state.Alert + ' ' + this.state.feedbackText)
  CLR.clear();
}
        return(
          <View style={{flexDirection: 'row', left: -width/2.3, top: this.props.data.H3 }} >
            <TextInput
            placeholder={this.state.Input}
            style={{height: height/25, width: width-width/4, left: width/20, backgroundColor: 'white', borderColor: 'black',
            borderWidth: 1, borderRadius: 50, color: 'black', fontSize: height/45, paddingLeft: width/80, paddingBottom: 0, paddingTop: 0,
             bottom: -height/30, zIndex: 10, alignSelf: 'flex-end', position: 'absolute',}}d
             onChangeText={feedbackText => this.setState({feedbackText})}
             ref={input => { this.textInput = input }}/>
                         <TouchableOpacity onPress={ () =>SEND() }  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: height/31, width: height/29, left: width/1.2, top: height/33}} >
            <Image style={{ height:"100%", width: "100%", position: 'relative',}} source = {require('../img/send.png')}  />
            </TouchableOpacity>
              </View>

        )
    }

}