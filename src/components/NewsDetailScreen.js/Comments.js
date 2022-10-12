import React from 'react';
import {
  View,
  Dimensions,
  Text,
} from 'react-native';
import CommentsAvatar from '../CommentsAvatar';
import shortid from 'shortid';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width



export default function Comments (props) {
    const comments = props.data 
    if (comments === '') {
        return(
            <View style={{marginTop: height/30, justifyContent: 'center', alignItems: 'center', width: width, height: height/20}} >

            <Text style={{color: 'black', opacity: 0.9, fontSize: width/28,  marginBottom: height/50}} >Нет комментариев</Text>
            
            </View> 
        )
    }
return(
    <View>
{ comments.map(item =>(
    <View style={{marginLeft: width/-50, marginBottom: height/50}} key={shortid.generate()} >
    <View style={{flexDirection: 'row'}} > 
    
    <CommentsAvatar data={item.img}/>
    
    <Text style={{marginTop: height/30, left: width/12, color: 'black', opacity: 0.9, fontSize: width/28, fontWeight: '600'}} >{item.name_first} {item.name_two}</Text>
    {/* <Text style={{marginTop: height/28, left: width/12, color: 'black', opacity: 0.8, fontSize: width/32, fontWeight: '600'}} > 12:54 12.09.2022</Text> */}
    
    </View>
    <Text style={{marginTop: height/-40, left: width/5, color: 'black', opacity: 0.9, fontSize: width/28, width: width/1.25}} >{item.comment}</Text>
    
    </View>

    ))
    }
        </View>
)
}