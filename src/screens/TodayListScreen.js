import React from "react";
import { Dimensions, View, SafeAreaView, Image, Text, ActivityIndicator} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

function Today(props){
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
  )
}








export default class TodayListScreen extends React.Component {
  state= {
    today: '',
    group: '',
    isloaded: false,
    display: 'none',
    week: [{"Monday": [[Object], [Object], [Object], [Object], [Object]]}, {"Tuesday": [[Object], [Object], [Object], [Object], [Object]]}, {"Wednesday": [[Object], [Object], [Object], [Object], [Object]]}, {"Thursday": [[Object], [Object], [Object], [Object], [Object]]}, {"Friday": [[Object], [Object], [Object], [Object], [Object]]}, {"Saturday": [[Object], [Object], [Object], [Object], [Object]]}]
  }

  componentDidMount = async()=>{
    this.setState({isloaded: true})
    this.setState({display: 'none'})
      const group = await AsyncStorage.getItem('group')
       if(group !== null) {
        this.setState({group: group});
       } else{
         console.log('xz')
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
    this.setState({week: table});

    const currentDate = moment().format('dddd');
if (currentDate === 'Monday'){
  this.setState({week: this.state.week[0].Monday});
  this.setState({today: 'Понедельник'});
}else if(currentDate === 'Tuesday'){
  this.setState({week: this.state.week[1].Tuesday});
  this.setState({today: 'Вторник'});
}else if(currentDate === 'Wednesday'){
  this.setState({week: this.state.week[2].Wednesday});
  this.setState({today: 'Среда'});
}else if(currentDate === 'Thursday'){
  this.setState({week: this.state.week[3].Thursday});
  this.setState({today: 'Четверг'});
}else if(currentDate === 'Friday'){
  this.setState({week: this.state.week[4].Friday});
  this.setState({today: 'Пятница'});
}else if(currentDate === 'Saturday'){
  this.setState({week: this.state.week[5].Saturday});
  this.setState({today: 'Суббота'});
}

   
this.setState({isloaded: false})
this.setState({display: 'flex'})  
  }



render(){
  const day = this.state.week
return(

<SafeAreaView style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flex: 1, position: 'relative'}} >
{
  this.state.isloaded && <ActivityIndicator size={'large'} />
}
<View style={{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14, display: this.state.display, marginTop: height/100, height: height/2.22, width: width-width/30, borderRadius: 10, backgroundColor: "white",}}  >

<View style={{ marginTop: height/100, height: height/2.22, width: width-width/30, borderRadius: 10, backgroundColor: "white",}}  >
            <Text name='title' style={{color: '#5FACE0', fontSize:height/40, fontWeight: 'bold', left: width/2.5, top: height/100 }} >{this.state.today}</Text>
<Image style={{ height: height/35, width: height/35, left:width/20, top: -height/55}} source = {require('../img/clock.png')}  />
<Image style={{ height: height/40, width: height/45, left:width/1.14, top: -height/23}} source = {require('../img/door.png')}  />

{ day.map(item =>(
<Today data={item} key={item.id} />
 ))
}
<View style={{height:height-height/1.68, width:1, backgroundColor: 'black', marginLeft: width/6.3, marginTop: -height/2.3, opacity: 0.3, position: 'relative'}} ></View>
<View style={{height:height-height/1.67, width:1, backgroundColor: 'black',marginLeft: width/1.23, marginTop: -height/2.48, opacity: 0.3, position: 'relative'}} ></View>
    </View>

    </View>

    </SafeAreaView>
);

}
}