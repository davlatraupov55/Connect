import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import { MMKV } from 'react-native-mmkv'; 
import LottieView from 'lottie-react-native';
import animation from '../assets';
import UserAvatar from '../Components/HomeScreen/UserAvatar';
import Publication from '../Components/HomeScreen/Publication';
import StickyHeader from '../Components/HomeScreen/StickyHeader';
import UserName from '../Components/HomeScreen/UserName';
import { useDispatch, useSelector } from 'react-redux';
import GetUserInformaton from '../redux/middleware/GetUserInfo';
import GetAccountInfo from '../redux/middleware/GetAccountInfo';
import GetPosts from '../redux/middleware/GetPosts';
import GetStickyTable from '../redux/middleware/GetStickyTable';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export const storage = new MMKV()

const HomeScreen = () => {

const dispatch = useDispatch();
const TOKEN2 = useSelector(state => state.token)
const TOKEN1 = storage.getString('token');
const TOKEN = TOKEN1 ? TOKEN1 : TOKEN2;

  useEffect(()=>{
    dispatch(GetUserInformaton(TOKEN));
    dispatch(GetAccountInfo(TOKEN));
    dispatch(GetStickyTable(TOKEN));
    dispatch(GetPosts(TOKEN));


}, [dispatch])
  // _handleScroll = (event) => {
  //   const positionY = event.nativeEvent.contentOffset.y;
  //   const scroll = (positionY*100)/height
  //   if ( scroll > 170 & scroll < 185){

  //     this._Publication();
  //   }

  // };

  const display = useSelector(state => state.isLoaded)

  // storage.set('id', this.state.AccountInformation.id)
  // onScroll={this._handleScroll} 

        return(
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center', justifyContent: 'center',}} >
<LottieView style={{position: 'absolute', width: width/2, top: height/6, left: width/8, zIndex: 10000, display: display ? 'flex' : 'none'}}
      autoPlay
      loop
      source={animation.lottieFiles.preloader}
      />
          <ScrollView style={{position: 'relative', height: height, width: width, opacity: display ? 0.1 : 1}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
           stickyHeaderIndices={[1]}  >
            
  <View style={{height: height/12, width: width, justifyContent: 'center', marginBottom: height/100}} >
  
  <View style={{flexDirection: 'row'}} >
  

  
<UserAvatar/>
  
<UserName/>
  </View> 
  
  </View>
  
  
  <View style={{height: height/10, width: width/1.01, backgroundColor: '#66A2E4', borderRadius: height/50, marginBottom: height/40, flexDirection: 'row'}} >
  
<StickyHeader/>
  
  </View>

    <Publication data={TOKEN}/>
  
          </ScrollView>
          </View>
        )
    }

  

export default HomeScreen