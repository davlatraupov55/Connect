import React from "react";
import { View, Text, Image, Dimensions, SafeAreaView, ScrollView} from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import CommentButton from "../components/CommentButton";
import Comments from "../components/Comments";
import { CommentsNews } from "../LangComponents/LangComponents";


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


function NewsScreen ({route}) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.comments);
  const id = data.newsId
  let comments  = [''];
  if (data.comments !== undefined){
  comments = data.comments
  }


  const button = { id, dispatch }

    return(


        <SafeAreaView style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}} >
            <ScrollView
             >
               
            <View style={{top: 0, height: "auto", paddingBottom: 0, width: width, backgroundColor: "white"}}  >
<View style={{height: height/15, width: width, top: height/180, flexDirection:'row'}} >
<View style={{height: height/15, width: height/15, justifyContent: 'center', alignItems: 'center', display:'flex', position: 'relative', left: width/65}}>
<Image style={{ height: '100%', width: '100%', position: 'relative', borderRadius:50}} source={{uri: data.deptImg}}  />
  </View>  
  <Text style={{position: 'relative', fontSize:height/38, fontWeight:'500', top:height/60, left: width/20}} >{data.name}</Text>
</View>
<View style={{height: height/3, width: width, top: height/80, left: width/80}} >
<Image style={{ height: '100%', width: '98%', position: 'relative', borderRadius: 15}} source={{uri: data.newsImg}}  />  
</View>

<Text style={{fontSize:height/40, fontWeight: "900", marginTop: height/50, paddingLeft: width/20, paddingBottom: height/50}} >{data.title}</Text>

<Text style={{ fontSize:height/48,
   fontWeight: "normal", zIndex: 0, paddingLeft: width/30, marginTop: height/1000005, 
   textAlign: 'left',}} >{data.text}</Text>

<CommentButton img={route.params.img} data={button} />

<View style={{ width: width, paddingBottom: height/10}} >
    <CommentsNews/>
    


    

{ comments.map(item =>(
<Comments data={item} key={item.id} />
 ))
    } 



       





</View>
</View>


  
</ScrollView>




</SafeAreaView>






    )
}

export default NewsScreen;