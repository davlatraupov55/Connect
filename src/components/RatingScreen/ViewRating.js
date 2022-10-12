import React from 'react';
import {
  View,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


function ViewRating (props) {
    if (props.data == 5){
        return(
<View style={{flexDirection: 'row', marginTop: height/60, marginLeft: width/50}} >
  <Image source={require('../../img/star5.png')} style={styles.Image} />   
  <Image source={require('../../img/star5.png')} style={styles.Image} />   
  <Image source={require('../../img/star5.png')} style={styles.Image} />   
  <Image source={require('../../img/star5.png')} style={styles.Image} />   
  <Image source={require('../../img/star5.png')} style={styles.Image} />    
</View>
        )
}
else if (props.data == 4){
    return(
<View style={{flexDirection: 'row', marginTop: height/60, marginLeft: width/50}} >
<Image source={require('../../img/star4.png')} style={styles.Image} />   
<Image source={require('../../img/star4.png')} style={styles.Image} />   
<Image source={require('../../img/star4.png')} style={styles.Image} />   
<Image source={require('../../img/star4.png')} style={styles.Image}/>   
<Image source={require('../../img/star0.png')} style={styles.Image}/>    
</View>
    )
}
else if (props.data == 3){
    return(
<View style={{flexDirection: 'row', marginTop: height/60, marginLeft: width/50}} >
<Image source={require('../../img/star3.png')} style={styles.Image} />   
<Image source={require('../../img/star3.png')} style={styles.Image}/>   
<Image source={require('../../img/star3.png')} style={styles.Image} />   
<Image source={require('../../img/star0.png')} style={styles.Image} />   
<Image source={require('../../img/star0.png')} style={styles.Image} />    
</View>
    )
}
else if (props.data == 2){
    return(
<View style={{flexDirection: 'row', marginTop: height/60, marginLeft: width/50}} >
<Image source={require('../../img/star2.png')} style={styles.Image} />   
<Image source={require('../../img/star2.png')} style={styles.Image} />   
<Image source={require('../../img/star0.png')} style={styles.Image}/>   
<Image source={require('../../img/star0.png')} style={styles.Image}/>   
<Image source={require('../../img/star0.png')} style={styles.Image} />    
</View>
    )
}
else if (props.data == 1){
    return(
<View style={{flexDirection: 'row', marginTop: height/60, marginLeft: width/50}} >
<Image source={require('../../img/star1.png')} style={styles.Image} />   
<Image source={require('../../img/star0.png')} style={styles.Image} />   
<Image source={require('../../img/star0.png')} style={styles.Image} />   
<Image source={require('../../img/star0.png')} style={styles.Image} />   
<Image source={require('../../img/star0.png')} style={styles.Image} />    
</View>
    )
}
else if (props.data == 0){
    return(
<View style={{flexDirection: 'row', marginTop: height/60, marginLeft: width/50}} >
<Image source={require('../../img/star0.png')} style={styles.Image}/>   
<Image source={require('../../img/star0.png')} style={styles.Image} />   
<Image source={require('../../img/star0.png')} style={styles.Image} />   
<Image source={require('../../img/star0.png')} style={styles.Image} />   
<Image source={require('../../img/star0.png')} style={styles.Image} />    
</View>
    )
}
}

var styles = StyleSheet.create({
    Image: {
        height: height/25, width: height/25, marginRight: width/50
  },

})
export default ViewRating;