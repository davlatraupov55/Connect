import React from 'react';
import {
  Dimensions,
  Image
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


function Star3 (props) {
    if (props.data == 0){
    return(
        <Image source={require('../../img/star0.png')} style={{height: height/20, width: height/20, marginRight: width/50}} /> 
    )
    }
    else if (props.data == 1){
        return(
            <Image source={require('../../img/star0.png')} style={{height: height/20, width: height/20, marginRight: width/50}} /> 
        )
        }
        else if (props.data == 2){
            return(
                <Image source={require('../../img/star0.png')} style={{height: height/20, width: height/20, marginRight: width/50}} /> 
            )
            }
            else if (props.data == 3){
                return(
                    <Image source={require('../../img/star3.png')} style={{height: height/20, width: height/20, marginRight: width/50}} /> 
                )
                }
                else if (props.data == 4){
                    return(
                        <Image source={require('../../img/star4.png')} style={{height: height/20, width: height/20, marginRight: width/50}} /> 
                    )
                    }
                    else if (props.data == 5){
                        return(
                            <Image source={require('../../img/star5.png')} style={{height: height/20, width: height/20, marginRight: width/50}} /> 
                        )
                        }
}

export default Star3;