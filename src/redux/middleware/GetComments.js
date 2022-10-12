import API from '../../Consts/apis';
import {AddComment, isLoaded} from "../actionType";
import GetPosts from "./GetPosts"

export default function GetComments (id, TOKEN) {
  return dispatch => {
    let body = '?post='+id+'&page=1'
fetch( API.GetComments+body, {
    method: 'GET',
    headers: {
      token: TOKEN,
    }
  })
    .then((response) => response.json())
    .then((json) => {
    if(json){
        dispatch({type: AddComment, payload: json})
        dispatch({type: isLoaded, payload: false})
        dispatch(GetPosts(TOKEN));
    }
    })  
    .catch((error) => {
      dispatch({type: AddComment, payload: ''})
      dispatch({type: isLoaded, payload: false})
    });

}
}


