import React from "react";
import { Dimensions, View, Text} from "react-native";
import { NotReviews } from "../LangComponents/LangComponents";


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default class FeedText extends React.Component {
    render(){
if(this.props.data.text ===''){
return(
<View style={{minHeight: height/15, width: width-width/25, paddingBottom: height/100, paddingTop: height/100,  paddingLeft: width/20, paddingRight: width/40}} >

<NotReviews/>
</View>
)           
} else{
    return(
        <View style={{minHeight: height/15, width: width-width/25, paddingBottom: height/100, paddingTop: height/100, borderColor: 'black', borderBottomWidth: 0.3, paddingLeft: width/20, paddingRight: width/40}} >
        
        <Text style={{fontSize: height/52}} >{this.props.data.text}</Text>
        </View>
        )
}
}
}