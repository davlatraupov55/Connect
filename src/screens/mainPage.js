import React from "react";
import {ScrollView } from "react-native-gesture-handler";
import { Dimensions, SafeAreaView, StatusBar,  View, TouchableOpacity, Image, ActivityIndicator} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import Tabs from "../components/Tabs";
import Header from "../components/Header";
import NewsComponent from "../components/NewsComponent";
import { Widgets } from "../components/Widgets";


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height 

const currentDate = moment().format('dddd'); 

export default class MainPage extends React.Component{

state= {
  data: [],
  group: '',
  tabs: [],
  tabsToday: [],
  week: [{"room": " ", "subject": " ", "teacher": " ", "time": " "}],
  isloaded: false,
  display: 'flex',
  name: '',
  surname: '',
  avatar: 'https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png',

}





  componentDidMount = async()=>{

    this.setState({isloaded: true})
    this.setState({display: 'none'})
    const id = await AsyncStorage.getItem('id')

    const response5 = await fetch('https://connecttf.uz/st.php', {
      method: 'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
  id: id
              })
      
    })
    const group = await response5.json();
      this.setState({group: group.direction})
      await AsyncStorage.setItem('group', group.direction);
      this.setState({name: group.name})
   
      this.setState({surname: group.surname})

      this.setState({avatar: group.photo})




    const response = await fetch('https://connecttf.uz/news.php');
    const data = await response.json();
    this.setState({data});  

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
    this.setState({tabs: table});
if (currentDate === 'Monday'){
  this.setState({week: this.state.tabs[0].Monday});
}else if(currentDate === 'Tuesday'){
  this.setState({week: this.state.tabs[1].Tuesday});
}else if(currentDate === 'Wednesday'){
  this.setState({week: this.state.tabs[2].Wednesday});
}else if(currentDate === 'Thursday'){
  this.setState({week: this.state.tabs[3].Thursday});
}else if(currentDate === 'Friday'){
  this.setState({week: this.state.tabs[4].Friday});
}else if(currentDate === 'Saturday'){
  this.setState({week: this.state.tabs[5].Saturday});
}else if(currentDate === 'Sunday'){
  this.setState({week: [{"room": " ", "subject": " ", "teacher": " ", "time": " "}] });
}

this.setState({isloaded: false})
this.setState({display: 'flex'})
     
  }

    render(){



      const Refresh = async() => {

        this.setState({avatar: 'https://w7.pngwing.com/pngs/336/946/png-transparent-avatar-user-medicine-surgery-patient-avatar-face-heroes-head.png'})
        this.setState({isloaded: true})
        this.setState({display: 'none'})

        const id = await AsyncStorage.getItem('id')

        const response5 = await fetch('https://connecttf.uz/st.php', {
          method: 'post',
          header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body:JSON.stringify({
      id: id
                  })
          
        })
        const group = await response5.json();

  

      this.setState({name: group.name})

      this.setState({group: group.direction})

      await AsyncStorage.setItem('group', group.direction);

      this.setState({surname: group.surname})

      this.setState({avatar: group.photo})

    
        const response = await fetch('https://connecttf.uz/news.php');
        const data = await response.json();
        this.setState({data});  
         const response1 = await fetch('https://connecttf.uz/timetab.php', {
          method: 'post',
          header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body:JSON.stringify({
       group: group.direction
      
                  })
          
        })
        const table = await response1.json();

        this.setState({tabs: table});
    if (currentDate === 'Monday'){
      this.setState({week: this.state.tabs[0].Monday});
    }else if(currentDate === 'Tuesday'){
      this.setState({week: this.state.tabs[1].Tuesday});
    }else if(currentDate === 'Wednesday'){
      this.setState({week: this.state.tabs[2].Wednesday});
    }else if(currentDate === 'Thursday'){
      this.setState({week: this.state.tabs[3].Thursday});
    }else if(currentDate === 'Friday'){
      this.setState({week: this.state.tabs[4].Friday});
    }else if(currentDate === 'Saturday'){
      this.setState({week: this.state.tabs[5].Saturday});
    }else if(currentDate === 'Sunday'){
      this.setState({week: [{"room": " ", "subject": " ", "teacher": " ", "time": " "}] });
    }
    
    this.setState({isloaded: false})
    this.setState({display: 'flex'})
         
      }

const name = this.state.name;
const surname = this.state.surname;
const avatar = this.state.avatar;
const group = this.state.group;

const HeaderData = {name, surname, avatar, group};



        return(
<>
            <StatusBar barStyle="light-content" />          
<SafeAreaView style={{justifyContent: "center", alignItems: 'center', display:'flex', flex:1, top:0, left:0, backgroundColor: 'white'}}>
<ScrollView
             contentInsetAdjustmentBehavior="automatic"
            vertical
            showsVerticalScrollIndicator={true}
            stickyHeaderIndices={[3]}
            style={{marginTop: 0, bottom: 0, top: 0, paddingBottom: 0, height: height*2}}
>
    <Header data={HeaderData} />
    <TouchableOpacity onPress={() => Refresh()}  style={{opacity: 0.5, height: height/35, width: height/35, position: 'absolute', zIndex: 1000, left: width/1.1, top: height/35}} >
       <Image style={{height: height/30, width: height/30, position: 'absolute', display: this.state.display}}  source={require("../img/refresh.png")} />
{
  this.state.isloaded && <ActivityIndicator size={'large'} color={'black'} />
}
       </TouchableOpacity>
<View style={{height: height/9.1, width: width, position: "relative", opacity: 0}} ></View>

<Tabs data={this.state.week} />



<View style={{height: height/3.9, width: width, top: height/-19, justifyContent: 'center'}} >
<Widgets/>
</View>


<NewsComponent img={this.state.avatar} data={this.state.data} />


</ScrollView>


</SafeAreaView>

</>
        )

    }


}

