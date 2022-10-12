import React, {useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image
} from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import GetDepartaments from "../redux/middleware/GetDepartaments" ;
import shortid from 'shortid';
import LottieView from 'lottie-react-native';
import animation from '../assets';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const storage = new MMKV()

function OtdelRatingScreen () {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const TOKEN2 = useSelector(state => state.token)
  const TOKEN1 = storage.getString('token');
  const TOKEN = TOKEN1 ? TOKEN1 : TOKEN2;
  
    useEffect(()=>{
      dispatch(GetDepartaments(TOKEN));
  }, [dispatch])
  const dept = useSelector(state => state.department);
  const display = useSelector(state => state.isLoaded)
        return(

<View style={{flex:1, justifyContent: 'center', alignItems: 'center',}} >
<LottieView style={{position: 'absolute', width: width/2, top: height/6, left: width/8, zIndex: 10000, display: display ? 'flex' : 'none'}}
      autoPlay
      loop
      source={animation.lottieFiles.preloader}
      />
<ScrollView style={{height: '100%', width: '100%', position: 'relative', opacity: display ? 0.1 : 1}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} >
<View style={{height: height/12, width: width, flexDirection: 'row', position: 'relative', zIndex: 10000, top: 0, justifyContent: 'center', alignItems:'center'}} >
<TextInput style={{height: height/22, borderRadius: height/50, width: width/1.3, backgroundColor: '#F5F4F4', justifyContent: 'center', alignItems: 'center',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5, marginRight: width/40 }} placeholder={'поиск отделения или по имени преподователя'} />

<TouchableOpacity>
<View style={{height: height/22, width: width/10, borderRadius: height/50, backgroundColor: '#7FB9FA', justifyContent: 'center', alignItems: 'center',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} >
<Image style={{height: '50%', width: '45%'}}  source={require('../img/searchIcon.png')} />
</View>
</TouchableOpacity>

</View>


<Text style={{fontSize: width/25, color: 'black', opacity: 0.5, fontWeight: '700', left: -width/4.5, marginTop: height/70}} >Выберите отделение</Text>


{ dept.map(item =>(
<View key={shortid.generate()} >

<TouchableOpacity onPress={()=> navigation.navigate('Teachers', {data: item.id, token: TOKEN, title: item.title})} >
<View style={{justifyContent: 'center', position: 'relative', alignItems: 'center', height: height/15, width: width/1.1, backgroundColor: '#F5F4F4', borderRadius: height/50, shadowColor: "#000",
shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5, marginTop: height/30, marginBottom: height/50}} >
<Text style={{color: 'black', opacity: 0.7, fontWeight: '600', fontSize: width/28}} >{item.title}</Text>
</View>
</TouchableOpacity>

</View>
))}

</ScrollView>
</View>



        )
}

export default OtdelRatingScreen