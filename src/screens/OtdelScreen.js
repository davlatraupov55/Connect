import React from "react";
import {ScrollView } from "react-native-gesture-handler";
import { Dimensions, View, Text, Image} from "react-native";
import DeptNews from "../components/deptNews";
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid';
import { AllPublic } from "../LangComponents/LangComponents";



let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default class OtdelScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    data: [],
    deptId: '',
    deptName: '', 
    deptImg: "https://yandex.uz/images/search?pos=6&img_url=https%3A%2F%2Fkmto-premiera.ru%2Fupload%2Fspeaker-azzurro.png&text=картинка%20юзера&lr=10335&rpt=simage&source=wiz&rlt_url=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fdownload_507356.png&ogl_url=https%3A%2F%2Fkmto-premiera.ru%2Fupload%2Fspeaker-azzurro.png",
        };
      }

    componentDidMount = async()=>{
        try {
            const deptId = await AsyncStorage.getItem('deptId')
            const deptName = await AsyncStorage.getItem('deptName')
            const deptImg = await AsyncStorage.getItem('deptImg')
            this.setState({deptId: deptId});
            this.setState({deptName: deptName});
            this.setState({deptImg: deptImg});
          
        } catch(e) {
      
            console.log('error')
          }
           
          
        const response = await fetch('https://connecttf.uz/news.php', {
            method: 'post',
            header:{
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            body:JSON.stringify({
         command: 'teamNews',
         id: this.state.deptId 
        
                    })
            
          })
          const data = await response.json();
          this.setState({data: data});
        
          
         
        }
   render(){
const data = this.state.data;
    return(

        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
            <ScrollView
vertical >

<View style={{height: height/3, width: width-width/80, backgroundColor: 'white', borderRadius: 10, top: height/10000, alignItems: 'center', marginBottom: height/50}} >
<Image style={{ height:height/5.5, width: height/5.5, top: height/50, position: 'relative', borderRadius: height/5.5}} source={{uri: this.state.deptImg}}  />
<Text style={{fontSize: width/25, top: height/30, fontWeight: 'bold'}} >{this.state.deptName}</Text>
</View>
<AllPublic/>
{ 
 data.map(item =>(
<DeptNews data={item}  key={shortid.generate()} />
 ))

    }
</ScrollView>
        </View>

    )

}
}