import React, { useEffect } from 'react';
import {
  Dimensions,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function UserName () {

const name = useSelector(state => state.userInformation.name)
const surname = useSelector(state => state.userInformation.surname)

    return(
        <Text style={{left: width/20, fontSize: width/22, color: 'black', fontWeight: '600', top: height/70, opacity: 0.8}} >{name} {surname}</Text>
    )
}
