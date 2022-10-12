import React from "react";
import {View} from "react-native";
import TeacherScreen1Component from "../components/TeacherScreen1Component"
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid';


export default class TeacherRating extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            teacher: []  
         }     
        }

componentDidMount = async() =>{
          try {
        const teacher = await AsyncStorage.getItem('dataOtdel3');
     
        this.setState({teacher: JSON.parse(teacher)})

       } catch(e) {
         console.log('error get data3')
       }
}
    render(){

    const teacher = this.state.teacher

    return(
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#F1F1FB', alignItems: 'center'}} >
 { teacher.map(item =>(
    <TeacherScreen1Component data={item} key={shortid.generate()} />
    ))
    }
</View>
    )
}
}