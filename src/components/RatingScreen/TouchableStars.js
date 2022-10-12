import React, {useState} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import { MotiView } from 'moti';
import { useDispatch } from 'react-redux';
import { setNewRating } from '../../redux/actionType';
import Star1 from "./Star1";
import Star2 from "./Star2";
import Star3 from "./Star3";
import Star4 from "./Star4";
import Star5 from "./Star5";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


function TouchableStars() {
const dispatch = useDispatch();
const [nRating, setNRating] = useState(0)

    const setRating = (rating) => {
dispatch({type: setNewRating, payload: rating})
setNRating(rating)
    }
    return(
        <View style={{flexDirection: 'row', marginTop: height/50, marginLeft: width/40}} >
            <TouchableOpacity onPress={()=>setRating(1)} >
        <MotiView
      from={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'timing',
        duration: 350,
        scale: {
          type: 'spring',
          delay: 100,
        },
      }}
    >
<Star1 data={nRating} /> 
      </MotiView> 
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setRating(2)} >
      <MotiView
      from={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'timing',
        duration: 350,
        scale: {
          type: 'spring',
          delay: 100,
        },
      }}
    >
<Star2 data={nRating}/> 
      </MotiView> 
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setRating(3)} >
      <MotiView
      from={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'timing',
        duration: 350,
        scale: {
          type: 'spring',
          delay: 100,
        },
      }}
    > 
     <Star3 data={nRating} />
      </MotiView>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setRating(4)} >
      <MotiView
      from={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'timing',
        duration: 350,
        scale: {
          type: 'spring',
          delay: 100,
        },
      }}
    >
        <Star4 data={nRating} />
      </MotiView> 
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setRating(5)} >
      <MotiView
      from={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'timing',
        duration: 350,
        scale: {
          type: 'spring',
          delay: 100,
        },
      }}
    >
        <Star5 data={nRating} />
    </MotiView>
    </TouchableOpacity>
        </View>
    )
}

export default TouchableStars;