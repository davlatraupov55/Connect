import React from "react";
import { Dimensions, View,  NativeModules,
  LayoutAnimation, SafeAreaView, Image,  Text} from "react-native";
import { Icon } from 'react-native-elements';
import { Hide, More } from "../LangComponents/LangComponents";
import CommentsText from "./commentsText";


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
 

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

  export default class DeptNews extends React.Component {

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

    return(


        <SafeAreaView >
            <View style={{minHeight: height/1.7, width: width, backgroundColor: "white", borderBottomColor: 'black', borderBottomWidth: 0.2, paddingBottom: height/55}}  >



<View style={{height: height/3,  width: width, top: height/80}} >
<Image style={{ height: '100%', width: '100%', position: 'relative',}}  source={{uri: this.props.data.img}}  />  
</View>

<Text style={{fontSize:height/40, fontWeight: "900", marginTop: height/40, paddingLeft: width/20}} >{this.props.data.title}</Text>
<View style={{flexDirection: 'row'}} >
<Text onPress={this._onPress} style={{ display: this.state.txt, fontSize:height/52, fontWeight: "normal", zIndex: 0, paddingLeft: width/30, marginTop: height/85, textAlign: 'left', opacity: this.state.op}} >{this.props.data.shorttext}...
<More/></Text>

<Text onPress={this._onPress1} style={{ display: this.state.txt, fontSize:height/52, fontWeight: "normal", zIndex: 0, paddingLeft: width/30, marginTop: height/85, textAlign: 'left', display: this.state.txt2, opacity: this.state.op2}} >{this.props.data.text} 
<Hide/></Text>




</View>


<View style={{flexDirection:'row', left: width/17}} >
  <Text style={{fontSize: height/50, left: -width/50, top: height/40}} >{this.props.data.date}</Text>
<View style={{top: height/50, flexDirection: 'row', marginHorizontal: 10}} >
<Icon name="chatbubble-ellipses-outline" size={height/30} type='ionicon' color={'grey'}/>
<Text style={{fontWeight: 'bold', fontSize:height/40, marginLeft: 5}} >{this.props.data.count}</Text>
</View>

<CommentsText data={this.props.data.id} />
</View>


</View>


</SafeAreaView>






    )
  }
}

