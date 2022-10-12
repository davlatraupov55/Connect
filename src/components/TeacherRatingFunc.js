import React from "react";
import { Dimensions, View, SafeAreaView, ScrollView} from "react-native";
import TeacherOtdel from "../components/TeacherOtdel";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TeacherBranch } from "../LangComponents/LangComponents";

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default class TacherRatingFunc extends React.Component {


      componentDidMount = async()=>{
    try {
        await AsyncStorage.setItem('dataOtdel', JSON.stringify(this.props.data));
        
      } catch (e) {
       
        console.log('error set data')
      }

      }


render(){

    const data = this.props.data
   
    return(
        <SafeAreaView style={{flex: 1, display: 'flex', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}} >
        <ScrollView
        vertical
        showsVerticalScrollIndicator={true}
        style={{marginTop: 0, bottom: 0, top: 0, paddingBottom: 0, height: height*2}}
>

<TeacherBranch/>




{ data.map(item =>(
<TeacherOtdel data={item} key={item.id} /> 
))
}

<View style={{ left: width/55,height:0.01, width: width, backgroundColor: '#FFFAFA',position: 'relative', marginTop:height/30,}} ></View>
       </ScrollView>
       
    </SafeAreaView>
    )
}
}