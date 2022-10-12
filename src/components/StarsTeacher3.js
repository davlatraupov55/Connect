import React from "react";
import { Dimensions, View, TouchableOpacity} from "react-native"
import StarRating from 'react-native-star-rating';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RatingSave } from "../LangComponents/LangComponents";

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;



 class StarTeacher3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          starCount: 0,
        };
      }
    
      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      };




render(){
  const rating = this.state.starCount;
  const id =  parseInt(this.props.data.ND.teacherId)


  const SEND = async () => {
    const Id = await AsyncStorage.getItem('id')
    const studentId = parseInt(Id)

    fetch('https://connecttf.uz/rating.php', {
     method: 'post',
     header:{
       'Accept': 'application/json',
       'Content-type': 'application/json'
     },
     body:JSON.stringify({
      rating: rating,
      id_student: studentId,
       teacher: id,
       
       

             })
     
   })


    alert('Ваша оценка сохранена.' + ' ' + 'Мы заботемся о вашей конфеденциальности!')
  }
if (this.state.starCount >= 5) {
    return(
        <View style={{position: 'absolute', top:this.props.data.H4, flexDirection:'row', left: width/4}} >
        <StarRating
        fullStarColor={"#FFEB3B"}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={height/17}
     
      />

<TouchableOpacity onPress={ () => SEND() }
             style={{height: height/22, width: width/4, backgroundColor:'#0099cc', justifyContent: 'center', alignItems: 'center', borderRadius: 8, top: height/13, left: -width/2.55}} >
 <RatingSave/>
 </TouchableOpacity>

    </View>
    )
} else if (this.state.starCount >= 4){
 
    return(
        <View style={{position: 'absolute', top:this.props.data.H4, flexDirection:'row', left: width/4}} >
        <StarRating
        fullStarColor={"#77DD77"}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={height/17}
      />

<TouchableOpacity onPress={ () => SEND() }
            style={{height: height/22, width: width/4, backgroundColor:'#0099cc', justifyContent: 'center', alignItems: 'center', borderRadius: 8, top: height/13, left: -width/2.55}} >
 <RatingSave/>
 </TouchableOpacity>
      </View>
    )   
} else if (this.state.starCount >= 3){
 
    return(
        <View style={{position: 'absolute', top:this.props.data.H4, flexDirection:'row', left: width/4}} >
        <StarRating
        fullStarColor={"dodgerblue"}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={height/17}
      />
<TouchableOpacity onPress={ () => SEND() }
             style={{height: height/22, width: width/4, backgroundColor:'#0099cc', justifyContent: 'center', alignItems: 'center', borderRadius: 8, top: height/13, left: -width/2.55}} >
 <RatingSave/>
 </TouchableOpacity>
      </View>
    )   
}  else if (this.state.starCount >= 2){
 
    return(
        <View style={{position: 'absolute', top:this.props.data.H4, flexDirection:'row', left: width/4}} >
        <StarRating
        fullStarColor={"#FE6F5E"}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={height/17}
      />
<TouchableOpacity onPress={ () => SEND() }
              style={{height: height/22, width: width/4, backgroundColor:'#0099cc', justifyContent: 'center', alignItems: 'center', borderRadius: 8, top: height/13, left: -width/2.55}} >
 <RatingSave/>
 </TouchableOpacity>
      </View>
    )   
}  else if (this.state.starCount >= 1){
 
    return(
        <View style={{position: 'absolute', top:this.props.data.H4, flexDirection:'row', left: width/4}} >
        <StarRating
        fullStarColor={"#CC0605"}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={height/17}
      />
<TouchableOpacity onPress={ () => SEND() }
              style={{height: height/22, width: width/4, backgroundColor:'#0099cc', justifyContent: 'center', alignItems: 'center', borderRadius: 8, top: height/13, left: -width/2.55}} >
 <RatingSave/>
 </TouchableOpacity>
      </View>

    )   
}
else if (this.state.starCount >= -1){
 
  return(
      <View style={{position: 'absolute', top:this.props.data.H4, flexDirection:'row', left: width/4}} >
      <StarRating
      disabled={false}
      maxStars={5}
      rating={0}
      selectedStar={(rating) => this.onStarRatingPress(rating)}
      starSize={height/17}
    />
<TouchableOpacity onPress={ () => SEND() }
            style={{height: height/22, width: width/4, backgroundColor:'#0099cc', justifyContent: 'center', alignItems: 'center', borderRadius: 8, top: height/13, left: -width/2.55}} >
 <RatingSave/>
</TouchableOpacity>
    </View>

  )   
}
}
}
 
export default StarTeacher3;