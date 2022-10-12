import React from "react";
import { View, Image, Dimensions, TextInput, TouchableOpacity} from "react-native";
import {NEWCOMMENT, SETCOMMENT} from "../store/actionType";
import AsyncStorage from '@react-native-async-storage/async-storage';


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default class CommentButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         commentText:'',
         addComment: ''
        };
     
      }

componentDidMount = async() => {
  const language = await AsyncStorage.getItem('lang');
  if(language === 'uzb'){
    this.setState({addComment: 'Izoh qoldirish'});
  } else if(language === 'ru'){
    this.setState({addComment: 'Добавить комментарий'});
  }else if(language === 'eng'){
    this.setState({addComment: 'Add a comment'});
  }
}

render(){

  const CLR = this.textInput; 
  
    const Next = async() =>{
      const id = await AsyncStorage.getItem('id')

        const response = await fetch('https://connecttf.uz/news.php', {
            method: 'post',
            header:{
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            
            body:JSON.stringify({
                comment: this.state.commentText,
                news: this.props.data.id,
                id_user: id,
                workers: 0,
  
     })
            
          })
          const commetText = this.state.commentText;
          const newsId = this.props.data;
          const data = await response.json();
         const dispatch = this.props.data.dispatch;
     
        
        dispatch({ type: NEWCOMMENT, payload: commetText, id: newsId }); 

        CLR.clear();

        const responsee = await fetch('https://connecttf.uz/news.php', {
        method: 'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
     news_id: this.props.data.id,


                })
        
      })
      const dataa = await responsee.json();
      dispatch({ type: SETCOMMENT, payload: dataa }); 

  }
    return(
<View style={{height:height/15, width: width, top: height/50.35, justifyContent: 'center', position: 'relative', borderWidth:0.3}} >
    <View style={{flexDirection: 'row'}} > 
<Image source={{uri: this.props.img}} style={{height: height/18, width: height/18, borderRadius: height/80, top: height/300, left: width/80}}  /> 
<TextInput  ref={input => { this.textInput = input }}  onChangeText={commentText => this.setState({commentText})}  placeholder={this.state.addComment}
style={{height:height/15, width:width/1.32, left: width/50, fontSize: width/28,}} />
<View style={{ top: height/55, left: width/20, position: 'relative'}} >
    <TouchableOpacity onPress={() =>  Next()} >
    <Image source={require('../img/send.png')} style={{ height: height/32, width: height/28,}} />
    </TouchableOpacity>
</View>
    </View>
</View>
    )
}
}
