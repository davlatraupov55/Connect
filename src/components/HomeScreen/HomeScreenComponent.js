import React from 'react';
import {
  View,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../../assets';
import {useDispatch} from "react-redux";
import { setUserInformation, setAccountInformation, setPost } from '../../redux/actionType';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default function HomeScreenComponent (props){
    // const dispatch = useDispatch();
  
    // dispatch({ type: setUserInformation, payload: props.UserInformation });
    // dispatch({ type: setAccountInformation, payload: props.AccountInformation });
    // dispatch({ type: setPost, payload: props.AccountInformation });

    return(
        <View style={{height: 1, width: 1}} ></View>
    )
}