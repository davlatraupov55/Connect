import React from "react";
import { View, Text,  Dimensions, Image} from "react-native";
import {ScrollView } from "react-native-gesture-handler";
import { DescriptionComplaint, Received, Rejected, ResponseManager, SolutionProposal, SubjectComplaint, Supported } from "../LangComponents/LangComponents";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default function Complain1 ({route}) {

if (route.params.data.answer == 2) {
return(
    <View style={{flex: 1, width: width, height: height, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF'}} >
<ScrollView>
 <Image style={{height: height/3.3, width: height/2.3, top: -height/30,}}  source={require("../img/complain3.jpg")} /> 

<SubjectComplaint/>
<View style={{height: height/28, width: height/9, backgroundColor: 'red', position: 'absolute', top: height/3.85, left: width/3.8, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}} >
<Rejected/>
</View>

    <Text style={{top: -height/22, fontSize: width/26, textAlign: 'auto', paddingLeft: width/30, paddingRight: width/30  }} >{route.params.data.title}</Text>


    <DescriptionComplaint/>

<Text style={{top: -height/47, fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30  }} >{route.params.data.text}</Text>

<SolutionProposal/>

<Text style={{top: -height/87, fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30 }} >{route.params.data.sentence}</Text>

<Text style={{ fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30, fontWeight: 'bold'  }}><Supported/>{route.params.data.count}</Text>

<ResponseManager/>

<Text style={{top: height/70, fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30 }} >{route.params.data.division_answer}</Text>
<View style={{opacity: 0, height: height/20, top: height/50}} ></View>

  </ScrollView>
    </View>
)}
else if(route.params.data.answer == 1){
    return(
        <View style={{flex: 1, width: width, height: height, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF'}} >
    <ScrollView>
     <Image style={{height: height/3.3, width: height/2.3, top: -height/30,}}  source={require("../img/complain3.jpg")} /> 
    
     <SubjectComplaint/>
    <View style={{height: height/28, width: height/9, backgroundColor: 'green', position: 'absolute', top: height/3.85, left: width/3.8, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}} >
     <Received/>
    </View>
    
        <Text style={{top: -height/22, fontSize: width/26, textAlign: 'auto', paddingLeft: width/30, paddingRight: width/30  }} >{route.params.data.title}</Text>
    
    
<DescriptionComplaint/>
    
    <Text style={{top: -height/47, fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30  }} >{route.params.data.text}</Text>
    
 <SolutionProposal/>
    
    <Text style={{top: -height/1000, fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30 }} >{route.params.data.sentence}</Text>
    
    <Text style={{ fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30, fontWeight: 'bold'  }}><Supported/>{route.params.data.count}</Text>
    
<ResponseManager/>
    
    <Text style={{top: height/70, fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30 }} >{route.params.data.division_answer}</Text>
    <View style={{opacity: 0, height: height/20, top: height/50}} ></View>
    
      </ScrollView>
        </View>
    )
}
else{
    return(
        <View style={{flex: 1, width: width, height: height, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF'}} >
    <ScrollView>
     <Image style={{height: height/3.3, width: height/2.3, top: -height/30,}}  source={require("../img/complain3.jpg")} /> 
    
     <SubjectComplaint/>
    
        <Text style={{top: -height/22, fontSize: width/26, textAlign: 'auto', paddingLeft: width/30, paddingRight: width/30  }} >{route.params.data.title}</Text>
    
    
    <Text style={{fontSize: width/17, color: 'black', fontWeight: 'bold', top: -height/45, paddingLeft: width/20}} >Описание</Text>
    
    <Text style={{top: -height/47, fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30  }} >{route.params.data.text}</Text>
    
    <Text style={{fontSize: width/17, color: 'black', fontWeight: 'bold', top: -height/80, paddingLeft: width/20}} >Предложение по решению</Text>
    
    <Text style={{top: -height/87, fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30 }} >{route.params.data.sentence}</Text>
    
    <Text style={{ fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30, fontWeight: 'bold'  }}>Поддержали: {route.params.data.count}</Text>
    
    <Text style={{ top: height/80,fontSize: width/17, color: 'black', fontWeight: 'bold', paddingLeft: width/20}} >Ответ от руководства</Text>
    
    <Text style={{top: height/70, fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30 }} >{route.params.data.division_answer}</Text>
    <View style={{opacity: 0, height: height/20, top: height/50}} ></View>
    
      </ScrollView>
        </View>
    )
}
 }