import React from 'react';
import { View, Text,  Dimensions,} from "react-native";
import MoreButton2 from "../components/MoreButton2"
import { Supported } from '../LangComponents/LangComponents';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default function Complain2Component (props) {
 
return(
<View>
<View style={{ shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,height: height/4.5, width: width/1.4, backgroundColor: '#E1F5FE', marginLeft: width/34, borderRadius: 15, top: height/95, justifyContent: 'center', alignItems: 'center'}} >

<Text style={{textAlign: 'center', color: '#242222', fontSize: height/45, marginBottom: height/60, fontSize: width/25}} >{props.data.title}</Text>
<Text style={{color: '#242222', opacity: 0.8,  marginBottom: height/50, fontSize: width/28}} ><Supported/> {props.data.count}</Text>
<View style={{flexDirection: 'row', marginTop: height/60}} >
                       <Text style={{textAlign: 'center', color: '#242222', opacity: 0.8, marginLeft: -width/200, fontSize: width/28 }}>{props.data.time}</Text>
<MoreButton2 data={props.data} />
                       </View> 
</View>
</View> 
)
}