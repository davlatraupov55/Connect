import React from "react";
import { Dimensions, View,  NativeModules,
  LayoutAnimation, SafeAreaView, Text} from "react-native";
import { Icon } from 'react-native-elements';
import CommentsText from "./commentsText";
import CommentTouch from "./CommentTouch";
import OtdelButton1 from "./otdelBut1";
import {More, Hide} from "../LangComponents/LangComponents"; 


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
 

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

  export default class News extends React.Component {

   state = {
txt: "flex",
txt2: "none",
op: 1,
op2: 0,
  };


  


  _onPress = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({txt: "none"})
    this.setState({txt2: 'flex'})
    this.setState({op: 0})
    this.setState({op2: 1})

  }

  _onPress1 = () => {
  
    LayoutAnimation.easeInEaseOut();
    this.setState({txt: "flex"})
    this.setState({txt2: 'none'})
    this.setState({op: 1})
    this.setState({op2: 0})

  }


  





 

  render() {

const deptId = this.props.data.dept;
const navigation = this.props.nav;
    return(


        <SafeAreaView style={{top: -height/20, zIndex: 0}}  >
            <View style={{minHeight: height/1.5, width: width, borderRadius: height/50, paddingBottom: height/35, shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3, paddingRight: width/200}}  >

<OtdelButton1 data={this.props.data} nav={navigation} deptId={deptId} />

<View style={{height: height/3,  width: width, top: height/80, left: width/80}} >
<CommentTouch img={this.props.img} imgN={this.props.data.img} data={this.props.data.id} />
</View>

<Text style={{fontSize:height/40, fontWeight: "900", marginTop: height/40, paddingLeft: width/20}} >{this.props.data.title}</Text>
<View style={{flexDirection: 'row',}} >
<Text onPress={this._onPress} style={{ display: this.state.txt, fontSize:height/52, fontWeight: "normal", zIndex: 0, paddingLeft: width/30, marginTop: height/88, textAlign: 'left', opacity: this.state.op}} >{this.props.data.shorttext}...
    <More/>         </Text>

<Text onPress={this._onPress1} style={{ display: this.state.txt, fontSize:height/52, fontWeight: "normal", zIndex: 0, paddingLeft: width/30, marginTop: height/88, textAlign: 'left', display: this.state.txt2, opacity: this.state.op2}} >{this.props.data.text} 
 <Hide/>   </Text>




</View>


<View style={{flexDirection:'row', left: width/17}} >
  <Text style={{fontSize: height/50, left: -width/50, top: height/40}} >{this.props.data.date}</Text>
<View style={{top: height/42, flexDirection: 'row', marginHorizontal: 10}} >
<Icon name="chatbubble-ellipses-outline" size={height/40} type='ionicon' color={'black'}/>
<Text style={{fontWeight: 'bold', fontSize:height/45, marginLeft: 5, top: height/-550}} >{this.props.data.count}</Text>
</View>

<CommentsText img={this.props.img} data={this.props.data.id} />
</View>


</View>


</SafeAreaView>






    )
  }
}

