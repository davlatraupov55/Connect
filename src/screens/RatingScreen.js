import React from "react";
import { Dimensions, View, SafeAreaView, Image, TouchableOpacity} from "react-native"
import { MyRating, TeachersRating } from "../LangComponents/LangComponents";



let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default function RatingScreen({navigation}) {



    return(
        <SafeAreaView style={{flex: 1, position: 'relative', height: height,
         width: width, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}} >

<View style={{height: height/2, width: height/2}} >

<Image style={{ height: "100%", width: "100%"}} source = {require('../img/rating.png')}  />

</View>

             <View style={{top: height/10}} >

<TouchableOpacity  onPress={() => navigation.navigate('Отделения1')} style={{backgroundColor: '#0099cc', alignItems: 'center', display: 'flex',
 justifyContent: 'center', height: height/20, width: width/1.2, borderRadius: 10, marginBottom: height/50 }} >
<TeachersRating/>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Рейтинг студента')} style={{backgroundColor: '#0099cc', alignItems: 'center', display: 'flex',
 justifyContent: 'center', height: height/20, width: width/1.2, borderRadius: 10}} >
<MyRating/>
</TouchableOpacity>

</View>

        </SafeAreaView>
    )
}