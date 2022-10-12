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


class Statement2Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          switchOneValue: false,
        };
      }
    render(){
        return(

            <View style={{flex: 1, alignItems: 'center',}} >
<Text style={{left: width/-30, fontSize: width/25, color: 'black',fontWeight: '600', marginTop: height/55, opacity: 0.8, width: width/1.2, marginBottom: height/30}} >Заявление на выезда из общежития на каникулы</Text>



<View style={{marginTop: height/10}} >
    <View style={{flexDirection: 'row', left: width/1.2}} >
<Text style={{fontSize: width/27, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1, marginBottom: height/50}} >Дата выезда с</Text>
<TextInput style={{height: height/20, width: width/3.5, left: width/-1.4, marginRight: width/70, borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: height/550, fontSize: width/23, paddingBottom: height/-50}} placeholder={'дд.мм.гг'}  />
<Text style={{fontSize: width/27, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1, marginBottom: height/50, left: width/-1.4}} >по</Text>
<TextInput style={{height: height/20, width: width/3.5, left: width/-0.61, borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: height/550, fontSize: width/23, paddingBottom: height/-50}} placeholder={'дд.мм.гг'} />
</View>


<View style={{flexDirection: 'row', left: width/1.2}} >
<Text style={{fontSize: width/27, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1, marginBottom: height/50}} >Буду добираться домой</Text>
<TextInput style={{height: height/20, width: width/2.2, left: width/-1.8, borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: height/250, fontSize: width/23, paddingBottom: height/-50}} placeholder={'вид транспорта'}  />
</View>


<View style={{flexDirection: 'row', left: width/1.2}} >
<Text style={{fontSize: width/27, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1, marginBottom: height/50}} >Обязуюсь прибыть в ДПС до</Text>
<TextInput style={{height: height/20, width: width/3.5, left: width/-2.2, borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: height/550, fontSize: width/23, paddingBottom: height/-50}} placeholder={'чч.мм'}  />
</View>


<View style={{flexDirection: 'row', left: width/1.2}} >
<Text style={{fontSize: width/27, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1, marginBottom: height/50}} >Буду находиться по адресу</Text>
<TextInput style={{height: height/20, width: width/2.5, left: width/-2, borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: height/550, fontSize: width/23, paddingBottom: height/-50}} placeholder={'введите адресс'}  />
</View>


<View style={{flexDirection: 'row', left: width/1.2}} >
<Text style={{fontSize: width/27, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1, marginBottom: height/50}} >Номер комнаты в ДПС</Text>
<TextInput style={{height: height/20, width: width/2.7, left: width/-1.8, borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: height/550, fontSize: width/23, paddingBottom: height/-50}} placeholder={'номер комнаты'}  />
</View>


<View style={{flexDirection: 'row', left: width/1.2}} >
<Text style={{fontSize: width/27, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1, marginBottom: height/50}} >Номер личного телефона</Text>
<TextInput style={{height: height/20, width: width/2.5, left: width/-2, borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: height/550, fontSize: width/23, paddingBottom: height/-50}} placeholder={'998 хх ххх хх хх'}  />
</View>


<View style={{flexDirection: 'row', left: width/1.2}} >
<Text style={{fontSize: width/27, color: '#606060', fontWeight: '600', marginTop: height/35, opacity: 0.8, width: width/1, marginBottom: height/50}} >Номер телефона родителей</Text>
<TextInput style={{height: height/20, width: width/2.5, left: width/-2, borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: height/550, fontSize: width/23, paddingBottom: height/-50}}  placeholder={'998 хх ххх хх хх'}  />
</View>

</View>
<View style={{width: width, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: height/150}} >
<TouchableOpacity>
<View style={{height: height/18, justifyContent: 'center', alignItems:'center', width: width/1.4, borderRadius: height/60, backgroundColor: '#0277FA',}} >
<Text style={{color: 'white', opacity: 0.8, fontWeight: '500', fontSize: width/28}} >Подписать</Text>
</View>
</TouchableOpacity>
</View>
            </View>

        )
    }
}
export default Statement2Screen;