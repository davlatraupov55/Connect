import React from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class Statement2CheckScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          switchOneValue: false,
        };
      }
    render(){
        return(

            <View style={{flex: 1, alignItems: 'center',}} >
<Text style={{left: width/6.3, fontSize: width/30, color: 'black',  marginTop: height/55, opacity: 0.8, width: width/1.51, marginBottom: height/30,}} >        Заместителю декана  факультета
по работе с молодёжью Муратовой  Н. Н. 
от студента (ки) группы УТС 19-01
 Раупова Давлата Баходир угли</Text>

 <Text style={{fontSize: width/25, color: 'black',fontWeight: '600', marginTop: height/-105, opacity: 0.8, marginBottom: height/30,}} >Заявление</Text>

 <Text style={{left: width/80, fontSize: width/30, color: 'black',  marginTop: height/55, opacity: 0.8, width: width/1.07, marginBottom: height/30,}} >Прошу вас разрешить мне выехать из ДПС с  19.09.2022 по 20.09.2022 в связи с началом зимних (летних) каникул. Буду добираться домой поездом. Буду находиться по адресу:  Дурмон йули 12, улица 5, дом 17</Text>


 <Text style={{left: width/80, fontSize: width/30, color: 'black',  marginTop: height/55, opacity: 0.8, width: width/1.07, marginBottom: height/30,}} >Номер комнаты: 60</Text>
 <Text style={{left: width/80, fontSize: width/30, color: 'black',  marginTop: height/-100, opacity: 0.8, width: width/1.07, marginBottom: height/30,}} >Номер личного телефона 99 6642493</Text>
 <Text style={{left: width/80, fontSize: width/30, color: 'black',  marginTop: height/-100, opacity: 0.8, width: width/1.07, marginBottom: height/30,}} >Номер телефона родителей 99 6642493</Text>

<View style={{flexDirection: 'row', marginTop: height/40}} >
<Text style={{fontSize: width/30, color: 'black',fontWeight: '600', marginTop: height/-105, opacity: 0.8, marginBottom: height/30, borderBottomColor: 'grey', borderBottomWidth: 1}} >19.09.2022г</Text>
<Text style={{fontSize: width/30, color: 'black',fontWeight: '600', marginTop: height/-105, opacity: 0.8, marginBottom: height/30, marginLeft: width/13, borderBottomColor: 'grey', borderBottomWidth: 1}} >Раупов Давлат Баходир угли</Text>
<Text style={{fontSize: width/30, color: 'black',fontWeight: '600', marginTop: height/-105, opacity: 0.8, marginBottom: height/30, marginLeft: width/13, borderBottomColor: 'grey', borderBottomWidth: 1}} >RDB25</Text>
</View>


<View style={{flexDirection: 'row', marginTop: height/-40}} >
<Text style={{fontSize: width/30, color: 'black', marginTop: height/-105, opacity: 0.8, marginBottom: height/30, left: width/-4}} >дата</Text>
<Text style={{fontSize: width/30, color: 'black', marginTop: height/-105, opacity: 0.8, marginBottom: height/30, left: width/12}} >ФИО</Text>
<Text style={{fontSize: width/30, color: 'black', marginTop: height/-105, opacity: 0.8, marginBottom: height/30, left: width/3.1}} >подпись</Text>
</View>

<View style={{width: width, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: height/150}} >
<TouchableOpacity>
<View style={{height: height/18, justifyContent: 'center', alignItems:'center', width: width/1.4, borderRadius: height/60, backgroundColor: '#0277FA',}} >
<Text style={{color: 'white', opacity: 0.8, fontWeight: '500', fontSize: width/28}} >Отправить</Text>
</View>
</TouchableOpacity>
</View>


</View>
        )
    }
}

export default Statement2CheckScreen;