import React from "react";
import { View, Text,  Dimensions, Image} from "react-native";
import {ScrollView } from "react-native-gesture-handler";
import ComplainJoinButton from "../components/ComplainJoinButton"
import { AnonimTextComplaint, DescriptionComplaint, SolutionProposal, SubjectComplaint, Supported } from "../LangComponents/LangComponents";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default function Complain2({route}) {
return(
    <View style={{flex: 1, width: width, height: height, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF'}} >
<ScrollView>
 <Image style={{height: height/3.3, width: height/2.3, top: -height/30,}}  source={require("../img/complain3.jpg")} /> 

<SubjectComplaint/>

<Text style={{top: -height/22, fontSize: width/26, textAlign: 'auto', paddingLeft: width/30, paddingRight: width/30  }} >{route.params.data.title}</Text>

<DescriptionComplaint/>

<Text style={{top: -height/47, fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30  }} >{route.params.data.text}</Text>

<SolutionProposal/>

<Text style={{top: height/150, fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30  }} >{route.params.data.sentence}</Text>

<Text style={{ fontSize: width/26, textAlign: "auto", paddingLeft: width/30, paddingRight: width/30, fontWeight: 'bold', top: height/50  }}><Supported/>{route.params.data.count}</Text>

<AnonimTextComplaint/>


<ComplainJoinButton data={route.params.data.id} />


<View style={{opacity: 0, height: height/20, top: height/50}} ></View>

  </ScrollView>
    </View>
)
 }