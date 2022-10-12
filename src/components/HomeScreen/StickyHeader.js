import React, {useState, useEffect} from "react";
import {View, Text, Dimensions, Image} from "react-native";
import {useSelector} from "react-redux";
import {day, time} from "../../Consts/values"

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function StickyHeader () {
    const fullTable = useSelector(state => state.stickyTable)
    const [todayTable, setTodayTable] = useState([{"date": "2022-09-02", "day": "2", "group": "group", "month": "9", "room": "room", "subject": "subject", "time_finish": "11:40", "time_start": "10:10", "worker": {"img": "img", "name": "name", "patronymic": "patronymic", "surname": "surname"}, "year": "year"}])
    const [nowTable, setNowTable] = useState({"date": "2022-09-02", "day": "2", "group": "group", "month": "9", "room": "room", "subject": "subject", "time_finish": "11:40", "time_start": "10:10", "worker": {"img": "img", "name": "name", "patronymic": "patronymic", "surname": "surname"}, "year": "year"})

console.log(fullTable[0])

    return(
        <View>
        <View style={{flexDirection: 'row', top: height/50, marginBottom: height/80}} >
        <Image style={{height: height/42, width: height/35.5, marginRight: width/60, left: width/40}}  source={require('../../img/Group-3.png')} />
        <Text style={{fontSize: width/35, left: width/30, color: 'black', opacity: 0.8, color: 'white', width: width/1, top: height/550}} >{nowTable.subject}</Text>
        </View>
        
        <View style={{flexDirection: 'row', top: height/50}} >
        <Image style={{height: height/45, width: height/45, marginRight: width/60, left: width/30}}  source={require('../../img/Group.png')} />
        <Text style={{fontSize: width/35, left: width/30, color: 'black', opacity: 0.8, color: 'white', width: width/1, top: height/550}} >{nowTable.worker.surname} {nowTable.worker.name[0]} {nowTable.worker.patronymic[0]}</Text>
        </View>
        
        
        
        
        <View style={{width: width/200, height: height/15, backgroundColor: 'white', top: height/-25, left: width/1.25, opacity: 0.6}} ></View>
        
        
        <View style={{flexDirection: 'row', top: height/-9.5, marginBottom: height/80, left: width/1.25}} >
        <Image style={{height: height/51, width: height/50, marginRight: width/180, left: width/60, top: height/200}}  source={require('../../img/clock.png')} />
        <Text style={{fontSize: width/30, left: width/30, color: 'black', opacity: 0.8, color: 'white', width: width/1, top: height/550}} >{nowTable.time_start}</Text>
        </View>
        
        <View style={{flexDirection: 'row', top: height/-9.55, left: width/1.28}} >
        <Image style={{height: height/45, width: height/50, marginRight: width/60, left: width/30}}  source={require('../../img/Group-1.png')} />
        <Text style={{fontSize: width/38, left: width/30, color: 'black', opacity: 0.8, color: 'white', width: width/1, top: height/550}} >{nowTable.room}</Text>
        </View>
        </View>  
    )
}