import API from '../../Consts/apis';
import {setStickyTable} from "../actionType";
import { year, month, day} from '../../Consts/values';


export default function GetStickyTable (TOKEN) {
return dispatch => {
let formdata = new FormData();
formdata.append("day", day)
formdata.append("month", month)
formdata.append("year", year)
fetch(API.GetTimeTable, {
    method: 'POST',
    headers: {
      token: TOKEN,
    },
    body: formdata
  })
    .then((response) => response.json())
    .then((json) => {
    if(json){
        dispatch({type: setStickyTable, payload: json})
    }
    })  
    .catch((error) => {
      console.error(error);
    });

}
}
