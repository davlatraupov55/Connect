 import API from '../../Consts/apis';
import {setPost, isLoaded} from "../actionType";


export default function GetPosts (TOKEN) {
return dispatch => {
fetch( API.PostApi+'?page=1', {
    method: 'GET',
    headers: {
      token: TOKEN,
    }
  })
    .then((response) => response.json())
    .then((json) => {
    if(json){
        dispatch({type: setPost, payload: json})
        dispatch({type: isLoaded, payload: false})
    }
    })  
    .catch((error) => {
      console.error(error);
    });

}
}