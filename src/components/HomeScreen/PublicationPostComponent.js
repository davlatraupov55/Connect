import React, {useState,  useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { commentCounter } from '../../redux/actionType';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function PublicationPostComponent (props) {
    const navigation = useNavigation();
//  const dispatch = useDispatch();
//  const [commentCount, setCommentCount] = useState(0)
//  const count = useSelector(state => state.commentCounter)
//  useEffect(()=>{
//  dispatch({type: commentCounter, payload: props.data.comment})
//  setCommentCount(count)
//  }, [dispatch])
    return (
        <TouchableOpacity onPress={()=> navigation.navigate('Details', {data: props.data, token: props.token})}>
        <View style={{height:height/1.96, width: width/1.03, backgroundColor: 'white', borderColor: '#E1E5E9',
shadowColor: "#000", shadowOffset: { width: 0, height: 2}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, 
borderWidth: 1, borderRadius: height/50, alignItems: 'center', marginBottom: height/50}} >

<View style={{flexDirection: 'row',  width: width/1.03, alignItems: 'center', justifyContent: 'flex-start', marginLeft: width/15}} >
 <View style={{height: height/25, width: height/25, borderRadius: height/15,
 justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1, top: height/90}} >
<Image style={{height: height/25, width: height/25, borderRadius: height/15}}  source={{uri: props.data.department.img}} />
</View>
<Text style={{fontSize: width/25, color: 'black', fontWeight: '600', marginLeft: width/90, top: height/90, opacity: 0.8,}} >{props.data.department.title.substr(0, 38)}...</Text>
</View>  

<View>
<Image style={{height: height/3.5, width: width/1.04, position: 'relative', top: height/50}}  source={{uri: props.data.img}} />  
</View>
<View style={{position: 'relative', top: height/35}} >
<Text style={{fontSize: width/25, left: width/50, fontWeight: '500', color: 'black', opacity: 0.8, marginBottom: height/100}} >{props.data.title.substr(0, 38)}...</Text>
<Text style={{fontSize: width/28, left: width/-550, width: width/1.1, color: 'black', opacity: 0.8}} >{props.data.shorts.substr(0, 80)}...</Text>
</View>


<View style={{flexDirection: 'row'}} >
<View style={{top: height/22, flexDirection: 'row', left: width/500}} >
<Image style={{height: height/35, width: height/35, marginRight: width/60, opacity: 0.7}}  source={require('../../img/comment.png')} />
<Text style={{fontSize: width/30, color: 'black', top: height/500, marginRight: width/1.6, opacity: 0.7}} >{props.data.comment}</Text>
<Text style={{fontSize: width/32, color: 'black', top: height/300, opacity: 0.7}} >{props.data.date.substr(0, 10)}</Text>
</View>
</View>


</View>
</TouchableOpacity>
    )
}