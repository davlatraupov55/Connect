import React from "react";
import FirstClientSceen2 from "../screens/firstClientScreen2"
import { useDispatch } from "react-redux";

export default function FirstClientScreen(props){ 
    const dispatch = useDispatch();
    const navigation = props.navigation;
    const data = {dispatch, navigation}
    return(
<FirstClientSceen2 data={data} />
    )
}