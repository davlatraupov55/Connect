import React from "react";
import { Dimensions, View, Image, ScrollView, Text} from "react-native";
import StarTeacher2 from "../components/StarsTeacher2";
import TeacherRatingMoreComponent from "../components/TeacherRatingMoreComponent";
import FeedText from "../components/FeedText";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ReviewsTeacher } from "../LangComponents/LangComponents";



let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


export default class TeacherScreen1Component extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            navigation: []  
         }     
        }

componentDidMount = async() => {
    try {
        await AsyncStorage.setItem('reviews', JSON.stringify(this.props.data.reviews));
        
      } catch (e) {
       
        console.log('error set reviews ' + e)
      }

      try {
        const navigation = await AsyncStorage.getItem('navigation');
       
        this.setState({navigation: JSON.parse(navigation)})

       } catch(e) {
         console.log('error get navigation')
       }      
         
       try {
        const reviews = await AsyncStorage.getItem('reviews');
       
        this.setState({reviews: JSON.parse(reviews)})

       } catch(e) {
         console.log('error get reviews')
       }
}



render(){
console.log(this.props.data.reviews)
    const teacherId = this.props.data.id;
const nav = this.state.navigation
    const datas = {nav, teacherId}

 
   let data = [];
    const data1 = this.props.data.reviews
if(data1 !== undefined){
    data = data1;
}else{
    data = [
        {text: ''
}
    ]
};

    return(
        
<View>
        <View style={{height: height/3, width: width-width/13, backgroundColor: 'white', borderRadius: 10, top: height/80, alignItems: 'center'}} >
        <Image style={{ height:height/5.5, width: height/5.5, top: height/50, position: 'relative', borderRadius: height/5.5}} source={{uri: this.props.data.img}}  />
        <StarTeacher2 data={parseInt(this.props.data.rating)} />
        <View style={{position: 'absolute', height: height/18, width: width/3, opacity: 0, top: height/4}} ></View>
        <Text style={{fontSize: width/25, top: height/30, fontWeight: 'bold'}} >{this.props.data.name} {this.props.data.surname}</Text>
        </View>
        
        <ScrollView
        vertical
        style={{marginTop: 0, bottom: 0, top: 0, paddingBottom: 0, height: height*2}} >
        <View style={{minHeight: height/1.8, width: width-width/13, backgroundColor: 'white', paddingBottom: height/80, borderRadius: 10, top: height/50, alignItems: 'center'}} >
        
<ReviewsTeacher/>
        
        
        { 
       
        data.map(item =>(
        <FeedText data={item} key={item.id} />
         ))
      
            }
            <View style={{height: height/15}} ></View>
        
        </View>
        
        </ScrollView>
        
        <TeacherRatingMoreComponent data={datas} />
        
        
           </View>
    )

}
}