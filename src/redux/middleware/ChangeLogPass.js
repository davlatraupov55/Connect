import API from '../../Consts/apis';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV()

export default function ADDRating(Login, Password, TOKEN) {
console.log(Login)
console.log(Password)
console.log(TOKEN)
  return dispatch => {
    let formdata = new FormData();
    formdata.append("login", Login)
    formdata.append("password", Password)

fetch( API.ChangeLogPass, {
    method: 'POST',
    headers: {
      token: TOKEN,
    },
    body: formdata,
  })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
if(json){
    console.log(json)
    storage.set('login', Login)
    storage.set('password', Password)
}
    })  
    .catch((error) => {
      console.error(error);
    });

}
}
