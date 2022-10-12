import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

const a  =  storage.getNumber('user');


let RoutName

if (a === undefined){
    RoutName = 'HelloScreen';
}else if (a === 1){
     RoutName = 'PinScreen';
} else if (a === 0) {
     RoutName = 'HomeScreen';
}

export default RoutName;