import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { MMKV } from 'react-native-mmkv';
import LottieView from 'lottie-react-native';
import animation from '../assets';
import GetComments from '../redux/middleware/GetComments';
import ADDComment from '../redux/middleware/AddComment';
import { useSelector, useDispatch } from 'react-redux';
import Comments from '../Components/NewsDetailScreen.js/Comments';
import CommentsAvatar from '../Components/CommentsAvatar';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
export const storage = new MMKV()

function NewsDetailScreen (props) {
const dispatch = useDispatch();
const id = props.route.params.data.id;
const TOKEN = props.route.params.token
const [comment, setcomment] = useState('')
useEffect(()=> {
 dispatch(GetComments(id, TOKEN));
}, [dispatch])
const comments  =  useSelector(state => state.comments)
const UserImg  =  useSelector(state => state.accountInformation.img)
const display = useSelector(state => state.isLoaded)
function add () {
  if (comment.comment !== undefined & comment.comment !== null){
  dispatch(ADDComment(id, comment.comment, TOKEN))
setcomment('')
  }
}
        return(
            <View style={{flex: 1, alignItems: 'center'}} >
<ScrollView>

<Image source={{uri: props.route.params.data.img }} style={{height: height/3, width: width/1, top: 0}} />

<Text style={{color: 'black', fontSize: width/26, marginLeft: width/25, width: width/1.05, fontWeight: '700', marginTop: height/40, opacity: 0.8}} >{props.route.params.data.title}</Text>

<Text style={{color: 'black', fontSize: width/28, marginLeft: width/25, width: width/1.05, marginTop: height/40, opacity: 0.8}} >{props.route.params.data.text}.</Text>

  <Text style={{color: 'black', fontSize: width/26, marginLeft: width/25, width: width/1.05, fontWeight: '700', marginTop: height/40, marginBottom: height/40, opacity: 0.8}} >Комментарии</Text>

<View style={{height:height/18, width: width,  justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'grey',}} >

<View style={{marginTop: height/-20, marginRight: width/20}} >
<CommentsAvatar data={UserImg}/>
</View>

<View style={{flexDirection: 'row'}} >
<TextInput multiline placeholder='Напишите комментарий' value={comment}
onChangeText={comment => setcomment({comment: comment})}
 style={{height:height/14, width: width/1.47, left: width/30, fontSize: width/26, justifyContent: 'center', alignItems: 'center',marginTop: height/-60 }}/>
<TouchableOpacity onPress={()=>add()}>
<Image style={{height: width/20, width: width/20, marginLeft: width/20, display: display ? 'none' : 'flex'}} source={require('../img/send.png')} />
<View style={{height: width/20, width: width/10, alignItems: 'center', justifyContent: 'center', display: display ? 'flex' : 'none'}} >
<LottieView style={{display: 'flex', position: 'absolute', height: '200%', width: '200%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.loader}
        />
        </View>
</TouchableOpacity>
</View>


</View>

<Comments data={comments} />

</ScrollView> 
            </View>
        )
        }

export default NewsDetailScreen;