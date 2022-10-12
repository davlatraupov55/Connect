import * as React from 'react';
import { View, Dimensions, Image, TouchableOpacity, ActivityIndicator} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView } from "react-native-gesture-handler";
import ComplainButton from "../components/CamplainButton";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewComplaint from "../components/newComplainContainer"
import Complain1 from "../screens/Complain1";
import Complain2 from "../screens/Complain2";
import Complain1Component from '../components/Complain1Component';
import Complain2Component from '../components/Complain2Component';
import shortid from 'shortid';
import { NewComplaintLang, Reviewed } from '../LangComponents/LangComponents';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


class Complain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloaded: false,
      display: 'flex',
       data1:  [{"count": "1", "id": "2", "sentence": "sentence ", "text": "text", "title": "title"}],
       data2: [{"count": "0", "id": "3", "sentence": "sentence", "text": "text", "title": "title"}]  
     };     
    }

componentDidMount = async() =>{
  this.setState({isloaded: true});
  this.setState({display: 'none'})
  const response1 = await fetch('https://connecttf.uz/complaint.php', {
    method: 'post',
    header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
      viewed: 1

            })
    
  })
  const data1 = await response1.json(); 
this.setState({data1: data1})
try {
  await AsyncStorage.setItem('data1', JSON.stringify(data1));
  
} catch (e) {
 
  console.log('error set complain data1')
}

const response0 = await fetch('https://connecttf.uz/complaint.php', {
  method: 'post',
  header:{
    'Accept': 'application/json',
    'Content-type': 'application/json'
  },
  body:JSON.stringify({
    viewed: 0

          })
  
})
const data0 = await response0.json(); 
this.setState({data2: data0})
try {
  await AsyncStorage.setItem('data2', JSON.stringify(data0));
  
} catch (e) {
 
  console.log('error set complain data0')
}
this.setState({isloaded: false});
this.setState({display: 'flex'})
}

 render(){
  const data1 = this.state.data1;
  const data2 = this.state.data2;
 const Refresh = async() => {
  this.setState({isloaded: true});
  this.setState({display: 'none'})
  const response1 = await fetch('https://connecttf.uz/complaint.php', {
    method: 'post',
    header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
      viewed: 1

            })
    
  })
  const data1 = await response1.json(); 
this.setState({data1: data1})
try {
  await AsyncStorage.setItem('data1', JSON.stringify(data1));
  
} catch (e) {
 
  console.log('error set complain data1')
}

const response0 = await fetch('https://connecttf.uz/complaint.php', {
  method: 'post',
  header:{
    'Accept': 'application/json',
    'Content-type': 'application/json'
  },
  body:JSON.stringify({
    viewed: 0

          })
  
})
const data0 = await response0.json(); 
this.setState({data2: data0})
try {
  await AsyncStorage.setItem('data2', JSON.stringify(data0));
  
} catch (e) {
 
  console.log('error set complain data0')
}
this.setState({isloaded: false});
this.setState({display: 'flex'})
 }


return(
    <View style={{flex: 1, width: width, height: height, alignItems: 'center', backgroundColor: '#FFF'}} >

       <Image style={{height: height/3.3, width: height/2.3, top: -height/15, position: 'absolute', left: width/10 }}  source={require("../img/complain2.jpg")} /> 

       <TouchableOpacity onPress={() => Refresh()}  style={{ height: height/35, width: height/35, position: 'absolute', zIndex: 1000, left: width/1.1, top: height/80}} >
       <Image style={{height: height/30, width: height/30, position: 'absolute',  opacity: 0.6, display: this.state.display}}  source={require("../img/refresh.png")} />
        {
          this.state.isloaded && <ActivityIndicator size={'large'} color={'black'} style={{left: width/200, top: -height/500}} />
        }
       </TouchableOpacity>

<Reviewed/>
       <View style={{ height: height/3.1, width: width, justifyContent: 'center', alignItems: 'center', top: height/5.1}} >
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{width: width, left:0, right: 0, padding: 0,}} >
<View style={{flexDirection: 'row'}} >



{ 
 data1.map(item =>(
<Complain1Component data={item} key={shortid.generate()}/>
 ))
} 

           </View>
              
           </ScrollView>
           </View>

           <View style={{ height: height/3.6, width: width, top: height/5.5}} >
<NewComplaintLang/>
<ScrollView showsHorizontalScrollIndicator={false} horizontal style={{width: width, left:0, right: 0, padding: 0}} >
<View style={{flexDirection: 'row'}} >


{
 data2.map(item =>(
<Complain2Component data={item} key={shortid.generate()}/>
 ))
} 

</View>
</ScrollView>
</View>

<ComplainButton/>
    </View>
)
 }
}

const Stack = createNativeStackNavigator();

function Complaint() {
  return (
    <NavigationContainer
    independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Complain" component={Complain} options={{headerShown: false}}  />
        <Stack.Screen name="NewComplain" component={NewComplaint} options={{headerShown: false}} />
        <Stack.Screen name="Complain1" component={Complain1} options={{headerShown: false}} />
        <Stack.Screen name="Complain2" component={Complain2} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Complaint;