import React from "react";
import { SafeAreaView, ScrollView, View} from "react-native"
import TeacherRatingComponent from "../components/TeacherRatingComponent"
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid';



export default class TeacherRatingScreen extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {

            teacher: []  
         }     
        }

componentDidMount = async() =>{
          try {
        const teacher = await AsyncStorage.getItem('dataOtdel2');
        
        this.setState({teacher: JSON.parse(teacher)})

       } catch(e) {
         console.log('error get data')
       }
}


render(){
   
    const teacher = this.state.teacher
    return(
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', display: 'flex', }} >

<ScrollView
vertical >
{ teacher.map(item =>(
<TeacherRatingComponent data={item} key={shortid.generate()} />
))
}
<View style={{height: 50}} ></View>
</ScrollView>
        </SafeAreaView>
    )
}
}