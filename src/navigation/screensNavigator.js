import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from "../screens/mainPage";
import ListScreen from '../components/list';
import NewsScreen from '../screens/NewsScreen';
import RatingScreen from "../screens/RatingScreen";
import TeacherRating from "../screens/TeacherRating";
import TeacherRatingScreen from '../screens/TeacherRatingScreen';
import TeacherScreen1 from "../screens/TeacherScreen1";
import OtdelScreen from "../screens/OtdelScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TodayListScreen from "../screens/TodayListScreen";
import Complaint from "../screens/ComplaintScreen";
import { useSelector} from "react-redux";



class EduScreen extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://edu.gubkin.ru/login/index.php' }}
      />
    );
  }
}



class MyRating extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://lk.gubkin.ru/new/login' }}
      />
    );
  }
}




const RatingStackT1 = createNativeStackNavigator();


function RatingStackT1Screen() {
  return (

    <RatingStackT1.Navigator initialRouteName="RatingT1" >
      <RatingStackT1.Screen name="Рейтинг преподователей"  component={TeacherRatingScreen} options={{headerShown: false}} />
      <RatingStackT1.Screen name="Подробно" component={TeacherScreen1} options={{headerShown: false}} />
    </RatingStackT1.Navigator>
  );
}



const RatingStackT = createNativeStackNavigator();


function RatingStackTScreen() {

  return (

    <RatingStackT.Navigator initialRouteName="RatingT" >

    <RatingStackT.Screen name="Отделение" component={TeacherRating} options={{headerShown: false}} />

   <RatingStackT.Screen name="Рейтинг преподователя" component={RatingStackT1Screen} options={{headerShown: false}} />
    </RatingStackT.Navigator>
  );
}


const RatingStack = createNativeStackNavigator();


function RatingStackScreen() {
  return (

    <RatingStack.Navigator initialRouteName="Rating" >
      <RatingStack.Screen name="Рейтинг1" component={RatingScreen} options={{headerShown: false}} />
      <RatingStack.Screen name="Отделения1" component={RatingStackTScreen} options={{headerShown: false}} />
      <RatingStack.Screen name="Рейтинг студента" component={MyRating} options={{headerShown: true}} />
    </RatingStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (

    <HomeStack.Navigator initialRouteName="Главная1" >
      <HomeStack.Screen name="Главная1"  component={MainPage} options={{headerShown: false}} />
      <HomeStack.Screen name="Комментарии" component={NewsScreen} options={{headerShown: true}} />
      <HomeStack.Screen name="otdelScreen" component={OtdelScreen} options={{headerShown: false}} />
      <HomeStack.Screen name="Расписание" component={TodayListScreen} options={{headerShown: true}} />
      <HomeStack.Screen name="settings" component={SettingsScreen} options={{headerShown: false}} />
    </HomeStack.Navigator>
  );
} 

const Tab = createBottomTabNavigator();

export default function Tpage() {
let state = {
  Mainpage: 'Главная',
  Timetable: 'Расписание',
  Offers: 'Жалобы',
  Platform: 'edu.gubkin',
  Rating: 'Рейтинг'
}

const lang = useSelector((state) => state.lang);
if(lang === 'ru'){
state.Mainpage = "Главная";
state.Offers = "Жалобы";
state.Platform = "edu.gubkin";
state.Rating = "Рейтинг";
state.Timetable = "Расписание"
}else if(lang === 'uzb'){
  state.Mainpage = "Bosh sahifa";
  state.Offers = "Takliflar";
  state.Platform = "edu.gubkin";
  state.Rating = "Reyting";
  state.Timetable = "Dars jadvali"
}else if(lang === 'eng'){
  state.Mainpage = "Main page";
  state.Offers = "Offers";
  state.Platform = "edu.gubkin";
  state.Rating = "Rating";
  state.Timetable = "Timetable"
}
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: 'white', height: 50, paddingBottom: 5},
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({ focused}) => {
            if (route.name === state.Mainpage) {
              return (
<Icon name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  
                  size={
                    focused
                    ? 24
                    : 18
                  }
                  color={'black'}
                  type='ionicon'
                  
                  />
              );
            } else if (route.name === state.Timetable) {
              return (
<Icon name={
                    focused
                      ? 'newspaper'
                      : 'newspaper-outline'
                  }
                  size={
                    focused
                    ? 24
                    : 18
                  }
                  color={'black'}
                  type='ionicon'
                  
                  />
              );
            } else if (route.name === state.Offers) {
              return (
<Icon name={
                    focused
                      ? 'chatbox'
                      : 'chatbox-outline'
                  }
                  size={
                    focused
                    ? 24
                    : 18
                  }
                  color={'black'}
                  type='ionicon'
                  
                  />
              );
            } else if (route.name === state.Rating) {
              return (
<Icon name={
                    focused
                      ? 'star'
                      : 'star-outline'
                  }
                  size={
                    focused
                    ? 24
                    : 18
                  }
                  color={'black'}
                  type='ionicon'
                  
                  
                  />
              );
            } else if (route.name === 'edu.gubkin') {
              return (
<Icon name={
                    focused
                      ? 'school'
                      : 'school-outline'
                  }
                  size={
                    focused
                    ? 24
                    : 18
                  }

                  color={'black'}
                  type='ionicon'
                  
                  />
              );
            }
            
          }
         
        })}
      >
        <Tab.Screen name={state.Mainpage}  component={HomeStackScreen} options={{headerShown: false}}/>

        <Tab.Screen name={state.Timetable} component={ListScreen} options={{ headerShown: false}} />


<Tab.Screen name="edu.gubkin" component={EduScreen} options={{headerShown: false}} />

        <Tab.Screen name={state.Rating} component={RatingStackScreen} options={{headerShown: false}} />

        <Tab.Screen name={state.Offers} component={Complaint} options={{headerShown: false}} />








      </Tab.Navigator>
    </NavigationContainer>
  );
}
