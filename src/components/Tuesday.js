import React from "react";
import { Dimensions, View, Text} from "react-native";
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default function Tuesday(props) {
        return(
            <View>
            
<View style={{height:height/13, width: width-width/50, 
borderTopColor: 'black', borderTopWidth:0.5, left: -width/400, top: -height/25,
 opacity: 1, zIndex: 0, flexDirection: 'row', marginBottom:1}} >

<View style={{ height: height/13, width: width/6.2, justifyContent: 'center', alignItems: 'center', position: 'relative'}} >
<Text style={{position: 'relative', fontSize: height/70,}} >{props.data.time}</Text>
</View>

<View style={{ height: height/13, width: width/1.53, justifyContent: 'center',}} >
<Text style={{ left: width/80, fontSize: height/73, paddingBottom: height/150}} >{props.data.subject}</Text>
<Text style={{ left: width/80, fontSize: height/73}} >{props.data.teacher}</Text>
</View>

<View style={{ height: height/13, width: width/6.52, justifyContent: 'center', alignItems: 'center',}} >
<Text style={{position: 'relative', fontSize: height/70,}} >{props.data.room}</Text>
</View>

</View>
 
                </View>
        );
}