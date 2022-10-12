import API from '../../Consts/apis';
import {getTeachers} from "../actionType";



export default function GetTeacher (TOKEN, id) {
  return dispatch => {
fetch( API.GetTeachers+'?id='+id, {
    method: 'GET',
    headers: {
      token: TOKEN,
    }
  })
    .then((response) => response.json())
    .then((json) => {
    if(json){
        dispatch({type: getTeachers, payload: json})
    
    }
    })  
    .catch((error) => {
      console.error(error);
    });

}
}