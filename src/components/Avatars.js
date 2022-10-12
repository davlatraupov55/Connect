import React from "react";
import { View, Dimensions} from "react-native";
import LottieView from 'lottie-react-native';
import animation from "../assets";

const height = Dimensions.get('window').height

export default function Avatars (props) {
const img = props.data
if(img == 1){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar1}
        />
    )
}

else if(img == 2){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar2}
        />
    )
}
else if(img == 3){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar3}
        />
    )
}
else if(img == 4){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar4}
        />
    )
}
else if(img == 5){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar5}
        />
    )
}
else if(img == 6){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar6}
        />
    )
}
else if(img == 7){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar7}
        />
    )
}
else if(img == 8){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar8}
        />
    )
}
else if(img == 9){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar9}
        />
    )
}
else if(img == 10){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar10}
        />
    )
}
else if(img == 11){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar11}
        />
    )
}
else if(img == 12){
    return(
        <LottieView style={{display: 'flex', position: 'absolute', borderRadius: height/15, height: '98%', width: '98%', justifyContent: 'center', alignItems: 'center'}}
        autoPlay
        loop
        source={animation.lottieFiles.avatar12}
        />
    )
}
} 