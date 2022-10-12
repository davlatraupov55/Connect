import React, {useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import ViewRating2 from '../Components/RatingScreen/ViewRating2';
import GetTeacher from '../redux/middleware/GetTeachers';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import shortid from 'shortid';
import LottieView from 'lottie-react-native';
import animation from '../assets';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


function TeachersCheckScreen (props) {
  const dispatch = useDispatch()
  const navigation = useNavigation();
const id = props.route.params.data
const TOKEN = props.route.params.token
const title = props.route.params.title
useEffect(()=>{
  dispatch(GetTeacher(TOKEN, id));
}, [dispatch])
const teachers = useSelector(state => state.teachers);
const display = useSelector(state => state.isLoaded)
        return(

<View style={{flex:1, justifyContent: 'center', alignItems: 'center',}} >
<LottieView style={{position: 'absolute', width: width/2, top: height/6, left: width/8, zIndex: 10000, display: display ? 'flex' : 'none'}}
      autoPlay
      loop
      source={animation.lottieFiles.preloader}
      />
<ScrollView style={{height: '100%', width: '100%', position: 'relative', opacity: display ? 0.1 : 1}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} >


<Text style={{fontSize: width/24, color: 'black', opacity: 0.5, fontWeight: '700', left: -width/4.5, marginTop: height/40}} >{title}</Text>

<Text style={{fontSize: width/25, color: 'black', opacity: 0.5, fontWeight: '700', left: -width/5, marginTop: height/40}} >Выберите преподователя</Text>


{ teachers.map(item =>(
<View key={shortid.generate()} >

<TouchableOpacity onPress={()=> navigation.navigate('DetailsTeacher', {data: item})} >
<View style={{justifyContent: 'center', position: 'relative', alignItems: 'center', height: height/6.2, width: width/1.1, backgroundColor: '#F5F4F4', borderRadius: height/50, shadowColor: "#000",
shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25, shadowRadius: 3.84,elevation: 5, marginTop: height/50, marginBottom: height/100, flexDirection: 'row'}} >


<Image style={{height: height/8, width: height/8, borderRadius: height/50, left: width/-50}}  
source={{uri: item.img}}/>
<View style={{flexDirection: 'column'}} >
<Text style={{color: 'black', opacity: 0.8, fontWeight: '600', fontSize: width/28, width: width/1.7}} >{item.surname} {item.name} {item.patronymic}</Text>
<Text style={{color: 'black', opacity: 0.7, fontWeight: '500', fontSize: width/30, width: width/1.7}} >{item.description.substr(0, 60)}</Text>
<ViewRating2 data={item.rating}/>
</View>
</View>


</TouchableOpacity>

</View>
))}



</ScrollView>
</View>


        )
  
}

export default TeachersCheckScreen