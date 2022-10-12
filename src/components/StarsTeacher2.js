import React from "react";
import { Dimensions, View} from "react-native";
import StarRating from 'react-native-star-rating';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;


 const StarTeacher2 =(props) => {
    
if (props.data >= 4.2) {
    return(
        <View style={{position: 'absolute', top:height/3.8, flexDirection:'row', left: width/3}} >
        <StarRating
        fullStarColor={"#FFEB3B"}
        disabled={false}
        maxStars={5}
        rating={props.data}
  
        starSize={height/32}
     
      />

    </View>
    )
} else if (props.data >= 3.2){
 
    return(
        <View style={{position: 'absolute', top:height/3.8, flexDirection:'row', left: width/3}} >
        <StarRating
        fullStarColor={"green"}
        disabled={false}
        maxStars={5}
        rating={props.data}
      
        starSize={height/32}
      />

      </View>
    )   
} else if (props.data >=2.2){
 
    return(
        <View style={{position: 'absolute', top:height/3.8, flexDirection:'row', left: width/3}} >
        <StarRating
        fullStarColor={"dodgerblue"}
        disabled={false}
        maxStars={5}
        rating={props.data}
    
        starSize={height/32}
      />

      </View>
    )   
}  else if (props.data >= 1.2){
 
    return(
        <View style={{position: 'absolute',  top:height/3.8, flexDirection:'row', left: width/3}} >
        <StarRating
        fullStarColor={"#FE6F5E"}
        disabled={false}
        maxStars={5}
        rating={props.data}
      
        starSize={height/32}
      />

      </View>
    )   
}  else if (props.data >= 0.5){
 
    return(
        <View style={{position: 'absolute',  top:height/3.8, flexDirection:'row', left: width/3}} >
        <StarRating
        fullStarColor={"#CC0605"}
        disabled={false}
        maxStars={5}
        rating={props.data}
   
        starSize={height/32}
      />

      </View>

    )   
}
}

export default StarTeacher2;