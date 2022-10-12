import React from 'react';
import { View, Dimensions, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Citizenship, DateBirth, Diploma, DirectionName, EduForm, FamilyStatus, Fullname, GroupObj, Nationality, NumberContract, Passport, PlaceBirth, PNFL, SaveAndSendObj, Sex, SpecialityObj, StreetHome, StreetHomeRegion, StreetStudy, TIN, VitaeScreen, YearFinish, YearStart } from '../LangComponents/LangComponents';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class ObjectiveScreen extends React.Component{

	state = {
		citizenship: '',
		date_birthday: '',
		diploma: '',
		direction: '',
		direction_name: '',
		family_status: '',
		form_study: '',
		inn: '',
		name: '',
		nationality: '',
		number_of_contract: '',
		passport: '',
		patronymic: '',
		photo: '',
		place_birthday: '',
		pnfl: '',
		sex: '',
		speciality: '',
		street_home: '',
		street_home_region: '',
		street_study: '',
		surname: '',
		year_finish: '',
		year_start: '',
		isloaded: false,
		display: 'flex'
	}

	componentDidMount = async() =>{

		this.setState({isloaded: true})
		this.setState({display: 'none'})

		const id = await AsyncStorage.getItem('id')
		const response = await fetch('https://connecttf.uz/st.php', {
		  method: 'post',
		  header:{
			'Accept': 'application/json',
			'Content-type': 'application/json'
		  },
		  body:JSON.stringify({
			command: 'studentInfo',
			id: id
	  
				  })
		  
		})
		const data = await response.json(); 

		this.setState({name: data.name});
		this.setState({surname: data.surname});
		this.setState({patronymic: data.patronymic});
		this.setState({citizenship: data.citizenship});
		this.setState({date_birthday: data.date_birthday});
		this.setState({diploma: data.diploma});
		this.setState({direction: data.direction});
		this.setState({direction_name: data.direction_name});
		this.setState({family_status: data.family_status});
		this.setState({form_study: data.form_study});
		this.setState({inn: data.inn});
		this.setState({nationality: data.nationality});
		this.setState({number_of_contract: data.number_of_contract});
		this.setState({passport: data.passport});
		this.setState({photo: data.photo});
		this.setState({place_birthday: data.place_birthday});
		this.setState({pnfl: data.pnfl});
		this.setState({sex: data.sex});
		this.setState({speciality: data.speciality});
		this.setState({street_home: data.street_home});
		this.setState({street_home_region: data.street_home_region});
		this.setState({street_study: data.street_study});
		this.setState({year_start: data.year_start});
		this.setState({year_finish: data.year_finish});

		this.setState({isloaded: false})
		this.setState({display: 'flex'})
	}


	_Refresh  = async() => {
		
		this.setState({isloaded: true})
		this.setState({display: 'none'})

		const id = await AsyncStorage.getItem('id')
		const response = await fetch('https://connecttf.uz/st.php', {
		  method: 'post',
		  header:{
			'Accept': 'application/json',
			'Content-type': 'application/json'
		  },
		  body:JSON.stringify({
			command: 'studentInfo',
			id: id
	  
				  })
		  
		})
		const data = await response.json(); 

		this.setState({name: data.name});
		this.setState({surname: data.surname});
		this.setState({patronymic: data.patronymic});
		this.setState({citizenship: data.citizenship});
		this.setState({date_birthday: data.date_birthday});
		this.setState({diploma: data.diploma});
		this.setState({direction: data.direction});
		this.setState({direction_name: data.direction_name});
		this.setState({family_status: data.family_status});
		this.setState({form_study: data.form_study});
		this.setState({inn: data.inn});
		this.setState({nationality: data.nationality});
		this.setState({number_of_contract: data.number_of_contract});
		this.setState({passport: data.passport});
		this.setState({photo: data.photo});
		this.setState({place_birthday: data.place_birthday});
		this.setState({pnfl: data.pnfl});
		this.setState({sex: data.sex});
		this.setState({speciality: data.speciality});
		this.setState({street_home: data.street_home});
		this.setState({street_home_region: data.street_home_region});
		this.setState({street_study: data.street_study});
		this.setState({year_start: data.year_start});
		this.setState({year_finish: data.year_finish});

		this.setState({isloaded: false})
		this.setState({display: 'flex'})
	}




render(){

	const SEND = async() => {
		const id = await AsyncStorage.getItem('id')
		const response1 = await fetch('https://connecttf.uz/st.php', {
		  method: 'post',
		  header:{
			'Accept': 'application/json',
			'Content-type': 'application/json'
		  },
		  body:JSON.stringify({
			command: 'addStudentInfo',
			id: id,
			citizenship: this.state.citizenship,
			date_birthday: this.state.date_birthday,
			diploma: this.state.diploma,
			direction: this.state.direction,
			direction_name: this.state.direction_name,
			family_status: this.state.family_status,
			form_study: this.state.form_study,
			inn: this.state.inn,
			nationality: this.state.nationality,
			number_of_contract: this.state.number_of_contract,
			passport: this.state.passport,
			photo: this.state.photo,
			place_birthday: this.state.place_birthday,
			pnfl: this.state.pnfl,
			sex: this.state.sex,
			speciality: this.state.speciality,
			street_home: this.state.street_home,
			street_home_region: this.state.street_home_region,
			street_study: this.state.street_study,
			year_finish: this.state.year_finish,
			year_start: this.state.year_start,
			
				  })
		  
		})
		const data1 = await response1.json(); 
		console.log(data1)
	}

    return(
<View style={{flex: 1, backgroundColor: 'white',}} >
  <ScrollView vertical showsVerticalScrollIndicator={false} style={{backgroundColor: 'white'}} >
 <VitaeScreen/>
  <View style={{backgroundColor: 'white'}} >

  <TouchableOpacity onPress={() => this._Refresh()}  style={{opacity: 0.5, height: height/35, width: height/35, position: 'absolute', zIndex: 1000, left: width/1.1, top: height/-55}} >
       <Image style={{height: height/30, width: height/30, position: 'absolute', display: this.state.display}}  source={require("../img/refresh.png")} />
{
  this.state.isloaded && <ActivityIndicator size={'large'} color={'black'} />
}
       </TouchableOpacity>

<Fullname/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}}  value={this.state.name + ' ' + this.state.surname + ' ' + this.state.patronymic} />


<Citizenship/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}}  onChangeText={citizenship => this.setState({citizenship})} defaultValue={this.state.citizenship} />



<Passport/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} value={this.state.passport} />




<PNFL/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}}  onChangeText={pnfl => this.setState({pnfl})} defaultValue={this.state.pnfl} />




<TIN/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={inn => this.setState({inn})} defaultValue={this.state.inn} />



<DateBirth/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={date_birthday => this.setState({date_birthday})} defaultValue={this.state.date_birthday} />



<PlaceBirth/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={place_birthday => this.setState({place_birthday})} defaultValue={this.state.place_birthday} />



<DirectionName/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={direction_name => this.setState({direction_name})} defaultValue={this.state.direction_name} />



<GroupObj/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={direction => this.setState({direction})} defaultValue={this.state.direction} />




<YearStart/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={year_start => this.setState({year_start})} defaultValue={this.state.year_start} />

<YearFinish/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={year_finish => this.setState({year_finish})}  defaultValue={this.state.year_finish} />


<SpecialityObj/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={speciality => this.setState({speciality})} defaultValue={this.state.speciality} />


<EduForm/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={form_study => this.setState({form_study})} defaultValue={this.state.form_study} />


<NumberContract/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={number_of_contract => this.setState({number_of_contract})} defaultValue={this.state.number_of_contract} />


<StreetHomeRegion/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={street_home_region => this.setState({street_home_region})} defaultValue={this.state.street_home_region} />


<StreetHome/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}}  onChangeText={street_home => this.setState({street_home})} defaultValue={this.state.street_home} />


<StreetStudy/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}}  onChangeText={street_study => this.setState({street_study})} defaultValue={this.state.street_study} />


<Nationality/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={nationality => this.setState({nationality})}  defaultValue={this.state.nationality} />


<FamilyStatus/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={family_status => this.setState({family_status})}  defaultValue={this.state.family_status} />


<Sex/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}} onChangeText={sex => this.setState({sex})}  defaultValue={this.state.sex} />


<Diploma/>
<TextInput style={{height: height/22, zIndex: 1, backgroundColor: 'white', width: width/1.08, marginLeft: width/30, marginTop: height/120, borderRadius: 15, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.007,
shadowRadius: 4.65,

elevation: 25, paddingLeft: width/50}}  onChangeText={diploma => this.setState({diploma})}  defaultValue={this.state.diploma} />


  </View>
          
  <TouchableOpacity onPress={() => SEND()}  style={{height: height/20, left: width/12, width: width/1.2, backgroundColor: '#0099cc', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: height/40, marginBottom: height/50}} >

<SaveAndSendObj/>

  </TouchableOpacity> 
  </ScrollView>
  </View>
    )
}
}