import React from "react";
import { Dimensions, View,  NativeModules,
  LayoutAnimation, Image, TouchableOpacity} from "react-native"
import StarTeacher3 from "../components/StarsTeacher3";
import FeedbackComponent  from "../components/Feedback";
import { RateTeacher } from "../LangComponents/LangComponents";



let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


  export default class TeacherRatingMoreComponent extends React.Component {
    state = {
     h0: height/1.495 + height/6,
      h: 0,
      h1: -height/3.8,
      h2:0,
       h3: height/18,
       h4: height/18,
       look: 10,
       look2: 0,
       opac: 2,
       opac2: 2,
       rating: 5
    };
    _onPress = () => {
     
      LayoutAnimation.spring();
      this.setState({h: this.state.h})
      this.setState({h1: this.state.h1 + height/5})
      this.setState({h2: this.state.h2})
      this.setState({h3: this.state.h3 + height/8})
      this.setState({h4: this.state.h4 + height/8})
      this.setState({look: 0})
      this.setState({look2: 10})
  
    }
  
    _onPress1 = () => {
  
      LayoutAnimation.spring();
      this.setState({h: this.state.h})
      this.setState({h1: this.state.h1 - height/5})
      this.setState({h2: this.state.h2})
      this.setState({h3: this.state.h3 - height/8})
      this.setState({h4: this.state.h4 - height/8})
      this.setState({look: 10})
      this.setState({look2: 0})
  
    }
  
  
    render() {
  const H4 = this.state.h4;
  const H3 = this.state.h3
  const ND = this.props.data;
  const DATAS = {H4, ND};
  const DATA = {H3, ND}
 
  
      return(

        <View style={{position: 'relative'}} >
<View style={{ position: 'absolute', left: -width/50, height: height/3.8, width: width, backgroundColor: '#E6E6FA', top: this.state.h1 , opacity: 0.95, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
<RateTeacher/>
 
  <StarTeacher3 data={DATAS} />

  <TouchableOpacity onPress={this._onPress} style={{ height: height/30, width: height/18, backgroundColor: 'white', position: 'absolute', top:this.state.h, left: width/1.125, justifyContent: 'center', alignItems: 'center', zIndex: this.state.look, opacity: this.state.opac}} >
  <Image style={{ height:height/28, width: height/28, position: 'relative', borderRadius: height/5.5}} source = {require('../img/down.png')}  />
  </TouchableOpacity>

  <TouchableOpacity onPress={this._onPress1} style={{ height: height/30, width: height/18, backgroundColor: 'white', position: 'absolute', top:this.state.h2, left: width/1.125, zIndex: this.state.look2, justifyContent: 'center', alignItems: 'center', opacity: this.state.opac2}} >
  <Image style={{ height:height/28, width: height/28, position: 'relative', borderRadius: height/5.5}} source = {require('../img/up.png')}  />
</TouchableOpacity>



<FeedbackComponent data={DATA} />
</View>


   </View>

      )

    }
}