import React from "react";
import NewComplaint1 from "../screens/newComplain"
import { useNavigation } from '@react-navigation/native';

export default function NewComplaint () {
    const navigation = useNavigation();
return(
    <NewComplaint1 nav={navigation} />
)

}