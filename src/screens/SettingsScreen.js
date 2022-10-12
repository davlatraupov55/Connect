import React from 'react';

import * as ImagePicker from "react-native-image-picker"
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SetLang from '../components/SetLang';
import {Group, ProfilePhoto} from "../LangComponents/LangComponents"
import Objective from '../components/objective';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ObjectiveScreen from "./ObjectiveScreen";
import { useSelector} from "react-redux";


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


class SettingsClass extends React.Component {
state = {
  avatarSource: null,
  isUploading: false,
  data: [],
  avatar: '',
  name: '',
  surname: '',
  patronymic: '',
  group: '',
  isloaded: false,
  display: 'flex',
  random: 0,
}


componentDidMount = async() =>{

  this.setState({isloaded: true})
  this.setState({display: 'none'})
  const photo = this.props.data.img
  this.setState({avatar: photo});
  const name = this.props.data.name
  this.setState({name: name});
  const surname = this.props.data.surname
  this.setState({surname: surname});

  const group = this.props.data.group
  this.setState({group: group});


  this.setState({isloaded: false})
  this.setState({display: 'flex'})
}


chooseImage = () => {
  let options = {
    title: 'Select Image',
    customButtons: [
      { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      const source = { uri: response.assets[0].uri };
      const assets = response.assets;

      this.setState({
        filePath: response,
        fileData: response.data,
        fileUri: assets
      });
    }
  });
  
}

launchCamera = () => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchCamera(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      const source = { uri: response.assets[0].uri };

      this.setState({
        filePath: response,
        fileData: response.data,
        fileUri: response.assets[0].uri
      });
    }
  });

}

launchImageLibrary = async() => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
      includeBase64:true,
      noData: true,
      mediaType: 'photo'
    },
  };
  ImagePicker.launchImageLibrary(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      this.setState({avatarSource: response.assets[0].uri})
      this.setState({data: response.assets[0]})
      this.uploadImage(response.uri)
    }
  });

}




uploadImage = async() => {
  const id = await AsyncStorage.getItem('id')
  this.setState({isUploading: true});
  console.log(this.state.isUploading)
  let base_url = 'https://connecttf.uz/st.php';
  let uploadData = new FormData();

  let a = 'avatar'
let b = '.jpg'
let c = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let avatarName = a+c+b;


  uploadData.append('command', 'addPhoto')
  uploadData.append('id', id)
  uploadData.append('file',  {name: avatarName, uri: this.state.data.uri, type: 'image/jpeg'})

 fetch(base_url, {
  method: 'post',
  header: {
    'Content-type': 'multipart/form-data'
  },
  body: uploadData  
}).then(response => response.json())
  .then(data => {
    if(data == 200){
      console.log(data)
      this.setState({isUploading: false})
    } else{
      alert('Фотография не загрузилось. Пожалуйста, выберите фото меньшего размера')
    }
  }).catch(() => {
    console.log(this.state.isUploading + ' dscvd')
    this.setState({isUploading: false});

  })



const photo = this.state.data.uri
this.setState({avatar: photo});

}
renderFileUri() {
  if (this.state.avatar !== ' ' && this.state.avatar !== null  && this.state.avatar !== '' && this.state.isUploading === false ) {
    return <Image
      source={{ uri: this.state.avatar }}
      style={{height: height/7, width: height/7, borderRadius: 25,  position: 'relative',  marginTop: height/16}}
    />
  } else {
    return <Image
      source={require('../img/notAvatar.png')}
      style={{height: height/7, width: height/7, borderRadius: 25,  position: 'relative',  marginTop: height/16 }}
    />
  }
}

  render(){
    const Refresh = async() => {

      this.setState({isloaded: true})
  this.setState({display: 'none'})

      const photo = this.props.data.img
  this.setState({avatar: photo});

  this.setState({isloaded: false})
  this.setState({display: 'flex'})    
    }


    return(
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}} >
        <Image source={require('../img/buble1.png')} style={{height: height/5, width: height/5, top: -height/7, left: width/1.5, position: 'absolute'}} />
        <Image source={require('../img/buble2.png')} style={{height: height/9, width: height/9, top: -height/70, left: -width/15, position: 'absolute'}} />
        <Image source={require('../img/buble3.png')} style={{height: height/18, width: height/16, top: -height/50, left: width/10, position: 'absolute'}} />
{this.renderFileUri()}
<View style={{position: 'absolute', left: width/2.15, top: height/9}} >
          {
  this.state.isUploading && <ActivityIndicator size={'large'} color={'black'} />
}
</View>
<View style={{flexDirection: 'column', marginTop: height/50}} >
<Text style={{fontSize: width/18, fontWeight: 'bold', color: 'black', position: 'relative',}} >{this.state.surname} {this.state.name}</Text>
<View style={{flexDirection: 'row'}} >
<Group/>
<Text style={{fontSize: width/28, marginLeft: width/50, color: 'black', marginTop:height/150 }} >{this.state.group}</Text>
</View>
</View>
<TouchableOpacity onPress={() => Refresh()}  style={{opacity: 0.5, height: height/35, width: height/35, position: 'absolute', zIndex: 1000, left: width/1.1, top: height/35}} >
       <Image style={{height: height/30, width: height/30, position: 'absolute', display: this.state.display}}  source={require("../img/refresh.png")} />
{
  this.state.isloaded && <ActivityIndicator size={'large'} color={'black'} />
}
       </TouchableOpacity>
<View style={{flexDirection: 'row'}} >
<Image source={require('../img/accountIcon.png')} style={{height: height/30, width: height/30, top: height/17, left: width/15}} />
        <TouchableOpacity onPress={this.launchImageLibrary} style={{height: height/15, width: width, justifyContent: 'center', top: height/25}}>
          <ProfilePhoto/>
          </TouchableOpacity>


          </View>

<SetLang/>

<View style={{ marginTop: height/11, height: height/35, width: width/2, left: -width/4.9}} >
<Objective/>
</View>



      </View>
    )
  }
}

function Settings (){
  const data = useSelector((state) => state.headerToSettings);
  return(
<SettingsClass data={data} />
  )
}


const Stack = createNativeStackNavigator();

export default function SettingsScreen() {
  return (
    <NavigationContainer
    independent={true}>
      <Stack.Navigator initialRouteName="Settings">

      <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}  />

      <Stack.Screen name="ObjectiveScreen" component={ObjectiveScreen} options={{headerShown: false}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
