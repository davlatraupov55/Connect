import React from "react";
import { Dimensions, View} from "react-native"
import StarRating from 'react-native-star-rating';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;


export default class StarTeacher extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          starCount: parseInt(this.props.data)
        };
      }
    
      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }

render(){
if (this.state.starCount >= 4.2) {
    return(
        <View style={{position: 'absolute', top:height/18, flexDirection:'row', left: width/4.4
        }} >
        <StarRating
        fullStarColor={"#FFEB3B"}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={height/32}
     
      />

    </View>
    )
} else if (this.state.starCount >= 3.2){
 
    return(
        <View style={{position: 'absolute', top:height/18, flexDirection:'row', left: width/4.4}} >
        <StarRating
        fullStarColor={"green"}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={height/32}
      />

      </View>
    )   
} else if (this.state.starCount >= 2.2){
 
    return(
        <View style={{position: 'absolute', top:height/18, flexDirection:'row', left: width/4.4}} >
        <StarRating
        fullStarColor={"dodgerblue"}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={height/32}
      />

      </View>
    )   
}  else if (this.state.starCount >= 1.2){
 
    return(
        <View style={{position: 'absolute', top:height/18, flexDirection:'row', left: width/4.4}} >
        <StarRating
        fullStarColor={"#FE6F5E"}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={height/32}
      />

      </View>
    )   
}  else if (this.state.starCount >= 0.5){
 
    return(
        <View style={{position: 'absolute', top:height/18, flexDirection:'row', left: width/4.4}} >
        <StarRating
        fullStarColor={"#CC0605"}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={height/32}
      />

      </View>

    )   
}
}
}