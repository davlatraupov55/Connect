import React from "react";
import { View, Text,  Dimensions, Image} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default class OtdelButton1 extends React.Component {


 render(){
  const navigation = this.props.nav;

  const press = async() => {
    try {
      await AsyncStorage.setItem('deptId', this.props.data.dept);
      await AsyncStorage.setItem('deptName', this.props.data.deptName);
      await AsyncStorage.setItem('deptImg', this.props.data.deptImg);
      
    } catch (e) {
     
      console.log('error set id')
   
    }
    navigation.navigate('otdelScreen')
  }


  
    return(
        <View style={{minHeight: height/28, width: width, top: height/100, flexDirection:'row', paddingBottom: height/50, paddingRight: width/8}} >
        <View style={{height: height/15, width: height/15, justifyContent: 'center', alignItems: 'center', display:'flex', position: 'relative', left: width/65}}>
        <Image style={{ height: '100%', width: '100%', position: 'relative', borderRadius:50}} source={{uri: this.props.data.deptImg}}  />
          </View>  
          <Text onPress={press}style={{position: 'relative', fontSize:width/22, fontWeight:'500', top:height/60, left: width/25}} >{this.props.data.deptName}</Text>
        </View>
    )
}
}