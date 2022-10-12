import API from "../../Consts/apis"
import { MMKV } from 'react-native-mmkv';
import { setToken } from '../actionType';

export const storage = new MMKV()

export default function (Login, Password, navigation) {
console.log(Login + ' ' + Password)
let formdata = new FormData();

formdata.append("login", Login)
formdata.append("password", Password)

return dispatch => {
 fetch( API.AuthApi, {
  method: 'POST',
  header:{
    'Accept': 'application/json',
    'Content-type': 'application/json'
  },
      body: formdata     
})
.then((response) => response.json())
.then((json) => {
console.log(json)
if(json.message === 'Вы успешео зашли на свой аккаунт'){
    storage.set('token', json.token_api)
    storage.set('user', 0)
    storage.set('login', Login)
    storage.set('password', Password)
    dispatch({type: setToken, payload: json.token_api})
    navigation.navigate('HomeScreen')

} else if (json.message === 'Неверно указан логин или пароль'){
    alert(json.message)
}else{
    console.log(json)
}
}
)
}
}