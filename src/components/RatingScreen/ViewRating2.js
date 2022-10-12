import React from 'react';
import {
  View,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


function ViewRating2 (props) {
    if (props.data == 5){
        return(
<View style={{flexDirection: 'row'}} >
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
<View style={{flexDirection: 'row'}} >
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
<View style={{flexDirection: 'row'}} >
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
<View style={{flexDirection: 'row'}} >
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
<View style={{flexDirection: 'row'}} >
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
<View style={{flexDirection: 'row'}} >
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
        height: height/30, width: height/30, marginTop: height/150, marginLeft: width/40
  },

})
export default ViewRating2;