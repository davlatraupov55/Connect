import React from "react";
import {View} from "react-native";
import News from "../components/News";
import { useNavigation } from '@react-navigation/native';
import shortid from 'shortid';
 

export default function NewsComponent(props) {
const data = props.data;
const navigation = useNavigation();
    return(
        <View>

    { data.map(item =>(
<News img={props.img} data={item} nav={navigation} key={shortid.generate()} />
 ))
    } 

    </View>
    )
}