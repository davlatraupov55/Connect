import React from 'react';
import {
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import PublicationPostComponent from './PublicationPostComponent';
import shortid from 'shortid';


export default function Publication (props) {

const posts  =  useSelector(state => state.posts)
    return(
      <View>  
      { posts.map(item =>(

  
<PublicationPostComponent data={item} token={props.data} key={shortid.generate()}  />
 ))
      }
      </View>
    )
}