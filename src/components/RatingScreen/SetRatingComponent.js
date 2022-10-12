import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { MotiView } from 'moti'
import TouchableStars from './TouchableStars';
import ADDRating from '../../redux/middleware/AddRating';
import { useDispatch, useSelector } from 'react-redux';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const storage = new MMKV()
function SetRatingComponent (props) {
    const TOKEN2 = useSelector(state => state.token)
    const TOKEN1 = storage.getString('token');
    const TOKEN = TOKEN1 ? TOKEN1 : TOKEN2;
    const dispatch = useDispatch();
    const worker = props.data;
    const rating = useSelector(state => state.newRating)
    const SendRating = () => {
dispatch(ADDRating(worker, rating, TOKEN))
    }
    const [containerTop, setContainerTop] = useState(0)
    const [bottonRotate, setBottonRotate] = useState('0deg')

    const Down = async(containerTop) => {
        if (containerTop === 0) {
        setContainerTop(height/6)
        setBottonRotate('180deg')
        } else if(containerTop === height/6) {
            setContainerTop(0)
            setBottonRotate('0deg')
        }
    }
        return(
            <MotiView from={{ top: containerTop, marginTop: -containerTop, }}
            animate={{ top: containerTop, marginTop: -containerTop, }}
            transition={{
              type: 'timing',
              duration: 250,
              scale: {
                type: "timing",
                delay: 0,
              },
            }}  style={{height: height/4.2, width: width, backgroundColor: '#798AD4', borderTopLeftRadius: height/50, borderTopRightRadius: height/50, justifyContent: 'center', alignItems: 'center'}}>
    <View style={{flexDirection: 'row'}} >
    <Text style={{fontSize: width/28, color: 'white', opacity: 0.7, fontWeight: '700',  marginTop: height/90}} >Оцените преподователя</Text>
    <TouchableOpacity onPress={()=>Down(containerTop)} style={{height: height/25, width: width/10, position: 'absolute', left: width/1.7, transform: [{ rotate: bottonRotate}]}}>
        <Image source={require('../../img/down.png')} style={{height: '80%', width: '80%'}} />
    </TouchableOpacity>
    </View>
 <TouchableStars/>
    <TouchableOpacity onPress={()=> SendRating()} >
        <View style={{height: height/20, width: width/2.8, backgroundColor: 'white', borderRadius: height/50, marginTop: height/20, justifyContent: 'center', alignItems: 'center'}} >
<Text style={{fontSize: width/28, color: 'black', opacity: 0.8, fontWeight: '700',}} >Сохранить</Text>
        </View>
    </TouchableOpacity>
</MotiView>
        )
}

export default SetRatingComponent