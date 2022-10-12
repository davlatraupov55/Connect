import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TeacherRating from "../screens/TeacherRating";


const TeacherNavigator = createStackNavigator( {
    TeacherRating: {screen: TeacherRating},
    
});

export default createAppContainer(TeacherNavigator)