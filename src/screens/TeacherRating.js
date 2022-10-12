import React from "react";
import TeacherRatingFunc from '../components/TeacherRatingFunc'




export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
}

componentDidMount= async() => {
  const response = await fetch('https://connecttf.uz/teachers.php');
  const data = await response.json();
  this.setState({data});  

}


 
render(){
  
  const data = this.state.data;
    return(
<TeacherRatingFunc data={data}/>
    )
    } 
  }


