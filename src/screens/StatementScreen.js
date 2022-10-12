import React from 'react'
import {Text, TouchableOpacity, Dimensions, View, TextInput} from 'react-native'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window'). width;


export default function StatementScreen() {

    return(
        <View style={{flex: 1, backgroundColor: 'white'}} >
            <Text style={{fontSize: width/22, marginTop: height/50, marginLeft: width/50}} >Заявление</Text>
<Text style={{fontSize: width/30, marginTop: height/50, marginLeft: width/50}} >от имени<Text style={{fontSize: width/25}} > Дмитрий Володин</Text></Text>
<View style={{marginTop: height/40}} >

            <TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}}  placeholder={'Причина'} />

<View style={{flexDirection: 'row', marginTop: height/50}} >
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/2.25, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}}  placeholder={'дата отъезда'} />

<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/2.25, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}}  placeholder={'дата приезда'} />
</View>


            <TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/40, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}}  placeholder={'Где будет находится'} />

</View>

<TouchableOpacity onPress={() => alert("Заявление отправлено успешно")}  style={{height: height/20, left: width/12, width: width/1.2, backgroundColor: '#0099cc', borderRadius: 12, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: height/50}} >

<Text style={{color: '#FFF', fontSize: width/25}} >Отправить</Text>

  </TouchableOpacity> 
        </View>
    )
}