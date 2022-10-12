import API from '../../Consts/apis';
import {setAccountInformation} from "../actionType";



export default function GetAccountInfo (TOKEN) {
  return dispatch => {
fetch( API.AccountApi, {
    method: 'GET',
    headers: {
      token: TOKEN,
    }
  })
    .then((response) => response.json())
    .then((json) => {
    if(json){
        dispatch({type: setAccountInformation, payload: json})
    }
    })  
    .catch((error) => {
      console.error(error);
    });

}
}