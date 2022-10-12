import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { TouchableOpacity} from "react-native-gesture-handler"
import {YouCanRest} from "../LangComponents/LangComponents"

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

function Tab (props) {
 const navigation = useNavigation();
 const tabsList = props.data;


if(tabsList !== undefined && tabsList.subject !== " "){
   
  return (
    <View style={{height: height/5.8, width: width, position: 'relative', zIndex: 1000}} >
   <TouchableOpacity onPress={() => navigation.navigate("Расписание")} style={{position: 'relative', height: height/8.2,}} >
<Image style={{ height: height/8.3, width: '100%', position: 'relative',}} source = {require("../img/top1.png")}  />
<View style={{height: height/20, width: height/17, display: 'flex', justifyContent: 'center', alignItems: 'center', top: -height/9, left: width/200}} >
<Image style={{ height: '50%', width: '50%', position: 'relative', margin: 10}} source = {require('../img/Group-3.png')}  />
</View>
<View style={{top: -height/6.6, left: width/8}}><Text style={{fontSize: width/24.9, color: 'white'}} >{props.data.subject.substr(0, 23)}</Text></View>
<View style={{height: height/30, width: height/30, display: 'flex', justifyContent: 'center', alignItems: 'center', top: -height/7.8, left: width/35}} >
<Image style={{ height: '70%', width: '70%', position: 'relative', margin: 10}} source = {require('../img/Group.png')}  />
</View>
<View style={{top: -height/6.3, left: width/8}}><Text style={{fontSize: width/30, color: 'white'}} >{props.data.teacher}</Text></View>
<View style={{height: height/40, width: height/40, left: width/1.55,top: -height/7, flexDirection: 'row',  display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
<Image style={{ height: '100%', width: '100%', position: 'relative', opacity: 0}} source = {require('../img/Vector-2.png')}  />
<Text style={{fontSize:width/23, color: 'white', fontWeight: 'bold',top: height/90, left: width/50, width: width/10, height: width/10}} ></Text>
</View>
<View style={{height: height/12, width: height/300, borderRadius: 10, backgroundColor: 'white', top: -height/3.8, opacity: 0.7, zIndex: 100, left: width/1.35 }} ></View>

<View style={{height: height/29.5, width: height/30, display: 'flex', justifyContent: 'center', alignItems: 'center', top: -height/2.88, left: width/1.155, flexDirection:'row', marginBottom:1}} >
<Image style={{ height: '70%', width: '70%', position: 'relative', margin: 2}} source = {require('../img/Group-1.png')}  />
<Text style={{ fontSize: width/29, color: 'white', width: width/5,}} >{props.data.room}</Text>
</View>

<View style={{height: height/25, width: height/24, top: -height/3.02, left: width/1.3 }} >
<Image style={{ height: '70%', width: '70%', position: 'relative'}} source = {require('../img/Vector-1.png')}  />
</View>
<View style={{height: height/50, width: height/70, top: -height/2.74, left: width/1.26 }} >
<Image style={{ height: '70%', width: '70%', position: 'relative'}} source = {require('../img/Vector.png')}  />
</View>
<Text style={{fontSize: width/27, color: 'white', top: -height/2.55, left: width/1.195}} >{props.data.time.substr(0, 5)}</Text>


</TouchableOpacity>
</View>
  )
}else {
 return(
 
   <SafeAreaView style={{height: height/5.8, width: width, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', top: -height/70 }}>
 <Image style={{ height: height/8.3, width: '100%', position: 'relative'}} source = {require("../img/top1.png")}  />
 <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', top: -height/14.5, left: width/200}} >
<YouCanRest/>
 </View>
 </SafeAreaView>
 )
 }
}


const time  = moment().format('Hmm');
class Tabs extends React.Component {
 state= {
today: {"room": " ", "subject": " ", "teacher": " ", "time": " "}
}
_get = async() => {
 if(time <530){
this.setState({today: this.props.data[0]});

}else if(time >= 830 && time < 1000){
this.setState({today: this.props.data[1]});
}else if(time >= 1000 && time < 1220){
this.setState({today: this.props.data[2]});
}else if(time >= 1220 && time <1400 ){
this.setState({today: this.props.data[3]});

}else if(time >= 1400 && time < 1530){
this.setState({today: this.props.data[4]});

}else if(time > 1530){
 this.setState({today: {"room": " ", "subject": " ", "teacher": " ", "time": " "}})

} else if(this.state.today === undefined){
this.setState({today: {"room": " ", "subject": " ", "teacher": " ", "time": " "}})

}
}
   
  


 render(){
   setTimeout(() =>this._get(), 2000);
  return (
      <Tab data={this.state.today}/>
  )
}
}




export default Tabs;