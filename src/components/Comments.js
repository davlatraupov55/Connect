import React from "react";
import { View, Text, Image, Dimensions} from "react-native";
import { NotCommentsYet } from "../LangComponents/LangComponents";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default function Comments(props) {
  if (props.data !== ''){
    return(
<View style={{paddingBottom: 0, marginTop: height/30, width: width-width/25, backgroundColor: "white", flexDirection: 'row',}} >
      <View style={{top: height/50, borderBottomWidth: 0.22, paddingBottom: height/350, paddingTop: height/120, width: width, paddingRight: width/5}} >
<View style={{flexDirection: 'row'}} >
<Image source={{uri: props.data.img_user}} style={{height: height/22, width: height/22, borderRadius: height/80, top: height/300, left: width/80}}  />
<Text style={{fontSize: width/29, left: width/30}} >{props.data.name_user} {props.data.surname_user}</Text>
<Text style={{fontSize: width/29, left: width/20, top: height/700}} >{props.data.date_up.substr(0, 16)}</Text>
</View>
<Text style={{fontSize: width/28, color: 'black', left: width/8, top: height/-50}} >{props.data.comment}</Text>

</View>


</View>

    )
  }
  else if(props.data === '' ){

    return(
      <View style={{paddingBottom: 0, marginTop: height/30, width: width, backgroundColor: "white", flexDirection: 'row'}} >
<NotCommentsYet/>
      </View>
    )
  }

}