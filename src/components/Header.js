import React from "react";
import HeaderNavigationComponent from "./HeaderNavigationComponent";


 class Header extends React.Component {

 render(){
    
const name = this.props.data.name;
const surname = this.props.data.surname;
const img = this.props.data.avatar;
const group = this.props.data.group

const data = {name, surname, img, group}

    return (
 <HeaderNavigationComponent data={data}/>
    )
  }
}


export default Header;