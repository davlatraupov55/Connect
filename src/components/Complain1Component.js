import React from 'react';
import { View, Text,  Dimensions,} from "react-native";
import { Received, Rejected, Supported } from '../LangComponents/LangComponents';
import MoreButton1 from "./MoreBotton1"

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default function Complain1Component (props) {
 if(props.data.answer == 2){
return(
    <View>
    <View style={{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,height: height/3.5, width: height/3, backgroundColor: '#E8EAF6', borderRadius: 10, marginLeft: width/40, top: height/60, justifyContent: 'center', alignItems: 'center', padding: width/60}} >
    <Text style={{textAlign: 'center', color: '#242222', marginBottom: height/60, fontSize: height/45 }} >{props.data.title}</Text>
    <Text style={{textAlign: 'center', color: '#242222', opacity: 1, marginBottom: height/60  }}><Supported/> {props.data.count}</Text>
    <View style={{height: height/22, width: height/4, backgroundColor: 'red', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginBottom: height/60}} >
      <Rejected/>
        </View> 
        <View style={{flexDirection: 'row', marginTop: height/60}} >
            <Text style={{textAlign: 'center', color: '#242222', opacity: 0.8, marginLeft: -height/200 }}>{props.data.time}</Text>
            <MoreButton1 data={props.data} />
            </View> 
            </View>
</View> 
)}else if( props.data.answer == 1 ){
    return(
        <View>
        <View style={{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,height: height/3.5, width: height/3, backgroundColor: '#E8EAF6', borderRadius: 10, marginLeft: width/40, top: height/60, justifyContent: 'center', alignItems: 'center', padding: width/60}} >
        <Text style={{textAlign: 'center', color: '#242222', marginBottom: height/60, fontSize: width/25 }} >{props.data.title}</Text>
        <Text style={{textAlign: 'center', color: '#242222', opacity: 1, marginBottom: height/60, fontSize: width/28 }}><Supported/> {props.data.count}</Text>
        <View style={{height: height/22, width: height/4, backgroundColor: 'green', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginBottom: height/60}} >
        <Received/>
            </View> 
            <View style={{flexDirection: 'row', marginTop: height/60}} >
                <Text style={{textAlign: 'center', color: '#242222', opacity: 0.8, marginLeft: -width/200, fontSize: width/28 }}>{props.data.time}</Text>
                <MoreButton1 data={props.data} />
                </View> 
    </View> 

    </View>
    
    ) 
}
else if( props.data.answer == 0 ){
    return(
        <View>
        <View style={{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,height: height/3.5, width: height/3, backgroundColor: '#E8EAF6', borderRadius: 10, marginLeft: width/40, top: height/60, justifyContent: 'center', alignItems: 'center', padding: width/60}} >
        <Text style={{textAlign: 'center', color: '#242222', marginBottom: height/60, fontSize: height/45 }} >{props.data.title}</Text>
        <Text style={{textAlign: 'center', color: '#242222', opacity: 1, marginBottom: height/60  }}>Поддержали {props.data.count}</Text>
        <View style={{height: height/22, width: height/4, backgroundColor: 'dodgerblue', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginBottom: height/60}} >
          <Text style={{color: '#FFF',}} >Рассматривается</Text>
            </View> 
            <View style={{flexDirection: 'row', marginTop: height/60}} >
                <Text style={{textAlign: 'center', color: '#242222', opacity: 0.8, marginLeft: -height/200 }}>{props.data.time}</Text>
                <MoreButton1 data={props.data} />
                </View> 
    </View> 

    </View>
    ) 
}
else{
    return(
        <View>
        <View style={{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,height: height/3.5, width: height/3, backgroundColor: '#E8EAF6', borderRadius: 10, marginLeft: width/40, top: height/60, justifyContent: 'center', alignItems: 'center', padding: width/60}} >
        <Text style={{textAlign: 'center', color: '#242222', marginBottom: height/60, fontSize: height/45 }} >{props.data.title}</Text>
        <Text style={{textAlign: 'center', color: '#242222', opacity: 1, marginBottom: height/60  }}>Поддержали {props.data.count}</Text>
      
            <View style={{flexDirection: 'row', marginTop: height/60}} >
                <Text style={{textAlign: 'center', color: '#242222', opacity: 0.8, marginLeft: -height/200 }}>{props.data.time}</Text>
                <MoreButton1 data={props.data} />
                </View> 
    </View> 
    </View>
    ) 
}
}