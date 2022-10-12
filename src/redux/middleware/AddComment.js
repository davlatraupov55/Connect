import API from '../../Consts/apis';
import GetComments from './GetComments';
import { isLoaded } from '../actionType';
import { CommentCounter } from '../../Consts/values';
import {commentCounter} from "../actionType";

export default function ADDComment (id, comment, TOKEN) {
  const a =  CommentCounter(5)
  return dispatch => {
    dispatch({type: isLoaded, payload: true})
    let formdata = new FormData();
    formdata.append("post", id)
    formdata.append("comment", comment)

fetch( API.AddComments, {
    method: 'POST',
    headers: {
      token: TOKEN,
    },
    body: formdata,
  })
    .then((response) => response.json())
    .then((json) => {
    if(json){
      dispatch(GetComments(id, TOKEN))
      dispatch({type: commentCounter, payload: a})
    }
    })  
    .catch((error) => {
      console.error(error);
    });

}
}
