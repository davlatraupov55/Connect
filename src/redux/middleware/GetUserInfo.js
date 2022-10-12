import API from '../../Consts/apis';
import {setUserInformation, isLoaded} from "../actionType";


 export default function GetUserInformaton (TOKEN) {
return dispatch => {
  dispatch({type: isLoaded, payload: true})
   fetch( API.UserInformation, {
    method: 'POST',
    headers: {
      token: TOKEN,
    }
  })
    .then((response) => response.json())
    .then((json) => {
    if(json){
        dispatch({type: setUserInformation, payload: json})
    }
    })  
    .catch((error) => {
      console.error(error);
    });

}
 }