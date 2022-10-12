import API from '../../Consts/apis';
import {setDepartament, isLoaded} from "../actionType";



export default function GetDepartaments (TOKEN) {
  return dispatch => {
    dispatch({type: isLoaded, payload: true})
fetch( API.GetDepartament, {
    method: 'GET',
    headers: {
      token: TOKEN,
    }
  })
    .then((response) => response.json())
    .then((json) => {
    if(json){
        dispatch({type: setDepartament, payload: json})
        dispatch({type: isLoaded, payload: false})
    }
    })  
    .catch((error) => {
      console.error(error);
    });

}
}