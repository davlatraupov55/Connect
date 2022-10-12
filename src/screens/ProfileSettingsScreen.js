import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import LottieView from 'lottie-react-native';
import animation from '../assets';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class ProfileSettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          avatarSource: animation.lottieFiles.avatar5,
        };
      }

_SetAvatar = (Avatar) => {
console.log(this.state.avatar)
}

    render(){
        return(

            <View style={{flex: 1, alignItems: 'center',}} >

<View style={{height: height/5, width: height/5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
 borderColor: '#B6B6B6', marginTop: height/40, right: width/50}} >
    <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
      autoPlay
      loop
      source={this.state.avatarSource}
      />

</View>
<Text style={{marginTop: height/50, fontSize: width/26, color: 'black', fontWeight: '600', opacity: 0.7}} >Давлат Раупов Баходир угли</Text>

<Text style={{marginTop: height/20, fontSize: width/27, color: 'black', fontWeight: '500', opacity: 0.7, left: width/-3.5}} >Выбрать аватар</Text>


<View style={{width: width, height: height/10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: height/50}} >

    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar1}
         />
    </View>


    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar2}
         />
    </View>


    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar3}
         />
    </View>


    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar4}
         />
    </View>


    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar5}
         />
    </View>


    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar6}
         />
    </View>



</View>




<View style={{width: width, height: height/10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: height/-900}} >

    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar7}
         />
    </View>


    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar8}
         />
    </View>


    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar9}
         />
    </View>


    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar10}
         />
    </View>


    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar11}
         />
    </View>


    <View style={{height: height/20, width: height/20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', position: 'relative', borderRadius: height/5, borderWidth: 1,
        borderColor: '#B6B6B6', marginRight: width/20}} >
        <LottieView style={{display: 'flex', position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
         autoPlay
        loop
         source={animation.lottieFiles.avatar12}
         />
    </View>



</View>

<View style={{flexDirection: 'row', width: width, alignItems: 'center', opacity: 0.7, marginTop: height/55}} >
<Text style={{fontSize: width/27, color: 'black', fontWeight: '500', marginLeft: width/12}} >Выбрать из галереии</Text>
<View style={{height: height/90, width: width/50, justifyContent: 'center', alignItems: 'center', marginTop: height/250, marginLeft: width/50}} >
<Image source={require('../img/arrow.png')} style={{height: '100%', width: '100%'}} />
</View>
</View>

</View>
        )
    }
}

export default ProfileSettingsScreen
