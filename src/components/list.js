import React from "react";
import {ScrollView } from "react-native-gesture-handler";
import { Dimensions, SafeAreaView, ActivityIndicator} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListComponent from "../components/ListComponent";
import shortid from 'shortid';


let height = Dimensions.get('window').height

export default class ListScreen extends React.Component{

    state= {
        isloaded: false,
        display: 'flex',
        group: '',
        table: [{"Monday": [[Object], [Object], [Object], [Object], [Object]]}, {"Tuesday": [[Object], [Object], [Object], [Object], [Object]]}, {"Wednesday": [[Object], [Object], [Object], [Object], [Object]]}, {"Thursday": [[Object], [Object], [Object], [Object], [Object]]}, {"Friday": [[Object], [Object], [Object], [Object], [Object]]}, {"Saturday": [[Object], [Object], [Object], [Object], [Object]]}],
      }
    componentDidMount = async()=>{
      this.setState({isloaded: true});
      this.setState({display: 'none'});
        try {
            const group = await AsyncStorage.getItem('group')
             if(group !== null) {
              this.setState({group: group});
             } else{
               console.log('xz')
             }
           } catch(e) {
      
             console.log('error')
           }
        const response1 = await fetch('https://connecttf.uz/timetab.php', {
            method: 'post',
            header:{
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            body:JSON.stringify({
         group: this.state.group
        
                    })
            
          })
          const table = await response1.json();
          console.log(table)
          this.setState({table: table});

          this.setState({isloaded: false});
          this.setState({display: 'flex'});
           
        }




render() {
const list = this.state.table;

    return(
        <SafeAreaView style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E9E7E7', flex: 1, position: 'relative'}} >
          {
            this.state.isloaded && <ActivityIndicator size={'large'} />
          }
<ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            style={{ display: this.state.display, marginTop: 0, bottom: 0, top: 0, paddingBottom: 0, height: height*2}}>



<ListComponent data={list} key={shortid.generate()} />



</ScrollView>
</SafeAreaView>
    )
}

}