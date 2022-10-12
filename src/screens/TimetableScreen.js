import React from 'react';
import {
  View,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class TimetableScreen extends React.Component {
    render(){
        return(
<View style={{flex:1, justifyContent: 'center', alignItems: 'center', justifyContent: 'center'}} >
            <ScrollView style={{position: 'relative', height: height, width: width,}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
              
              <View style={{height: height/10, width: width, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}} >

              <View style={{height: height/30, width: width/20, opacity: 0.7}}>
                <TouchableOpacity>
              <Image  style={{height: '100%', width: '100%', transform: [{ rotate: '90deg'}]}}  source={require('../img/down.png')} />
                </TouchableOpacity>
              </View>


                <View style={{height: height/20, width: width/1.25, justifyContent: 'center', alignItems: 'center', position: 'relative'}} >
                <Text style={{color: 'black', fontSize: width/26}} >12.09.2022 - 18.09.2022</Text>
                </View>


              <View style={{height: height/30, width: width/20, opacity: 0.7}}>
                <TouchableOpacity>
              <Image  style={{height: '100%', width: '100%', transform: [{ rotate: '-90deg'}]}}  source={require('../img/down.png')} />
                </TouchableOpacity>
              </View>



              </View>
              
              
<Text style={{color: 'black', fontSize: width/25, fontWeight: '600', marginBottom: height/60, left: width/-3}} >Понедельник</Text>
<View style={{height: height/2, width: width/1.05, justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: height/30}}>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Image style={{width:width/20, height: height/33}} source={require('../img/clock2.png')} />
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Text style={{fontSize: width/28, color: 'black', opacity: 0.6}} >Название дисциплины</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
    <Image style={{width: width/23, height: height/35}} source={require('../img/door.png')} />
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >8:30</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:00</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Сооружение и ремонт систем трубопроводного транспорта</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >416</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:10</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >11:40</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Дифференциальные исчисления и аналитическая геометрия</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >12:20</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >13:50</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >14:00</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:30</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
   

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:40</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >17:10</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

</View>





<Text style={{color: 'black', fontSize: width/25, fontWeight: '600', marginBottom: height/60, left: width/-2.7}} >Вторник</Text>
<View style={{height: height/2, width: width/1.05, justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: height/30}}>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Image style={{width:width/20, height: height/33}} source={require('../img/clock2.png')} />
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Text style={{fontSize: width/28, color: 'black', opacity: 0.6}} >Название дисциплины</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
    <Image style={{width: width/23, height: height/35}} source={require('../img/door.png')} />
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >8:30</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:00</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Сооружение и ремонт систем трубопроводного транспорта</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >416</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:10</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >11:40</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Дифференциальные исчисления и аналитическая геометрия</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >12:20</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >13:50</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >14:00</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:30</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
   

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:40</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >17:10</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

</View>





<Text style={{color: 'black', fontSize: width/25, fontWeight: '600', marginBottom: height/60, left: width/-2.6}} >Среда</Text>
<View style={{height: height/2, width: width/1.05, justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: height/30}}>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Image style={{width:width/20, height: height/33}} source={require('../img/clock2.png')} />
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Text style={{fontSize: width/28, color: 'black', opacity: 0.6}} >Название дисциплины</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
    <Image style={{width: width/23, height: height/35}} source={require('../img/door.png')} />
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >8:30</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:00</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Сооружение и ремонт систем трубопроводного транспорта</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >416</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:10</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >11:40</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Дифференциальные исчисления и аналитическая геометрия</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >12:20</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >13:50</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >14:00</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:30</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
   

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:40</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >17:10</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

</View>





<Text style={{color: 'black', fontSize: width/25, fontWeight: '600', marginBottom: height/60, left: width/-2.7}} >Четверг</Text>
<View style={{height: height/2, width: width/1.05, justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: height/30}}>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Image style={{width:width/20, height: height/33}} source={require('../img/clock2.png')} />
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Text style={{fontSize: width/28, color: 'black', opacity: 0.6}} >Название дисциплины</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
    <Image style={{width: width/23, height: height/35}} source={require('../img/door.png')} />
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >8:30</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:00</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Сооружение и ремонт систем трубопроводного транспорта</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >416</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:10</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >11:40</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Дифференциальные исчисления и аналитическая геометрия</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >12:20</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >13:50</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >14:00</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:30</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
   

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:40</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >17:10</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

</View>





<Text style={{color: 'black', fontSize: width/25, fontWeight: '600', marginBottom: height/60, left: width/-2.7}} >Пятница</Text>
<View style={{height: height/2, width: width/1.05, justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: height/30}}>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Image style={{width:width/20, height: height/33}} source={require('../img/clock2.png')} />
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Text style={{fontSize: width/28, color: 'black', opacity: 0.6}} >Название дисциплины</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
    <Image style={{width: width/23, height: height/35}} source={require('../img/door.png')} />
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >8:30</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:00</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Сооружение и ремонт систем трубопроводного транспорта</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >416</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:10</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >11:40</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Дифференциальные исчисления и аналитическая геометрия</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >12:20</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >13:50</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >14:00</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:30</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
   

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:40</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >17:10</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

</View>






<Text style={{color: 'black', fontSize: width/25, fontWeight: '600', marginBottom: height/60, left: width/-2.7}} >Суббота</Text>
<View style={{height: height/2, width: width/1.05, justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: height/30}}>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Image style={{width:width/20, height: height/33}} source={require('../img/clock2.png')} />
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
        <Text style={{fontSize: width/28, color: 'black', opacity: 0.6}} >Название дисциплины</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent:'center', alignItems:'center'}} >
    <Image style={{width: width/23, height: height/35}} source={require('../img/door.png')} />
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >8:30</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:00</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Сооружение и ремонт систем трубопроводного транспорта</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >416</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >


    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >10:10</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >11:40</Text>
    </View>

    <View style={{height: '100%', width: '78%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.8}} >Дифференциальные исчисления и аналитическая геометрия</Text>
    <Text style={{fontSize: width/32, width: '96%', color: 'black', opacity: 0.6}} >Михайловичь С. В. \ Леоновских Ф. Ф.</Text>
    </View>

    <View style={{height: '100%', width: '11%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >612</Text>
    </View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >12:20</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >13:50</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

<View style={{height: '16.6%', width: width/1.05, backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
    

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >14:00</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:30</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: '#CDE6FD', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>


<View style={{height: '16.6%', width: width/1.05, backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', flexDirection: 'row'}} >
   

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >15:40</Text>
    <Text style={{fontSize: width/29, color: 'black', opacity: 0.6}} >17:10</Text>
    </View>

    <View style={{height: '100%', width: '70%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>

    <View style={{height: '100%', width: '15%', backgroundColor: 'white', borderColor: '#E1E5E9', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} ></View>


</View>

</View>


              
                </ScrollView>
                </View>
        )
    }
}
export default TimetableScreen