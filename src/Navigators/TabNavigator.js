import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
import HomeScreen from '../Screens/HomeScreen';
import TimetableScreen from '../Screens/TimetableScreen';
import ComplaintMainScreen from '../Screens/ComplaintMainScreen';
import MainRatingScreen from '../Screens/MainRatingScreen';
import NewsDetailScreen from '../Screens/NewsDetailScreen';
import TeachersCheckScreen from '../Screens/TeachersCheckScreen';
import TeacherRatingScreen from '../Screens/TeacherRatingScreen';
import OtdelRatingScreen from '../Screens/OtdelRatingScreen';
import CreateComplaintScreen from '../Screens/CreateComplaintScreen';
import ViewCreatedComplaintScreen from '../Screens/ViewCreatedComplaintScreen';
import ViewConsideredComplaintScreen from '../Screens/ViewConsideredComplaint';
import ViewComplaintScreen from '../Screens/ViewComplaintScreen';
import MainSettingsScreen from "../Screens/MainSettingsScreen"
import ConfidentialityScreen from "../Screens/ConfidentialityScreen";
import MainStatementScreen from "../Screens/MainStatementScreen";
import ProfileSettingsScreen from "../Screens/ProfileSettingsScreen";
import ChangePIN2Screen from "../Screens/ChangePIN2Screen"



class MyRating extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://lk.gubkin.ru/new/login' }}
      />
    );
  }
}


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (

    <HomeStack.Navigator initialRouteName="MajorHome" >
      <HomeStack.Screen name="MajorHome"  component={HomeScreen} options={{headerShown: false}} />
      <HomeStack.Screen name="Details" component={NewsDetailScreen} options={{headerShown: false}} />
    </HomeStack.Navigator>
  );
}


const ComplaintStack = createNativeStackNavigator();

function ComplaintStackScreen() {
  return (

    <ComplaintStack.Navigator initialRouteName="MajorHome" >
      <ComplaintStack.Screen name="MajorComplaint"  component={ComplaintMainScreen} options={{headerShown: false}} />
      <ComplaintStack.Screen name="Create" component={CreateComplaintScreen} options={{headerShown: false}} />
      <ComplaintStack.Screen name="ViewCreated" component={ViewCreatedComplaintScreen} options={{headerShown: false}} />
      <ComplaintStack.Screen name="ViewConsidered" component={ViewConsideredComplaintScreen} options={{headerShown: false}} />
      <ComplaintStack.Screen name="ViewComplaint" component={ViewComplaintScreen} options={{headerShown: false}} />
    </ComplaintStack.Navigator>
  );
}



const RatingStack = createNativeStackNavigator();

function RatingtackScreen() {
  return (

    <RatingStack.Navigator initialRouteName="MajorRating" >
      <RatingStack.Screen name="MajorRating"  component={MainRatingScreen} options={{headerShown: false}} />
      <RatingStack.Screen name="Otdel" component={OtdelRatingScreen} options={{headerShown: false}} />
      <RatingStack.Screen name="Teachers" component={TeachersCheckScreen} options={{headerShown: false}} />
      <RatingStack.Screen name="DetailsTeacher" component={TeacherRatingScreen} options={{headerShown: false}} />
      <RatingStack.Screen name="lk" component={MyRating} options={{headerShown: false}} />
    </RatingStack.Navigator>
  );
}


const ProfilStack = createNativeStackNavigator();

function ProfilStackScreen() {
  return (

    <ProfilStack.Navigator initialRouteName="Main" >
      <ProfilStack.Screen name="Main"  component={MainSettingsScreen} options={{headerShown: false}} />
      <ProfilStack.Screen name="ConfidentialityScreen" component={ConfidentialityScreen} options={{headerShown: false}} />
      <ProfilStack.Screen name="MainStatementScreen" component={MainStatementScreen} options={{headerShown: false}} />
      <ProfilStack.Screen name="ProfileSettingsScreen" component={ProfileSettingsScreen} options={{headerShown: false}} />
      <ProfilStack.Screen name="ChangePIN1" component={ChangePIN2Screen} options={{headerShown: false}} />
    </ProfilStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function Tpage() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarStyle: { backgroundColor: 'white', height: 50, paddingBottom: 4},
      tabBarActiveTintColor: '#0277FA',
      tabBarIcon: ({ focused}) => {
        if (route.name === "Главная") {
          return (
<Image source={
  focused
  ?require('../img/home.png')
  :require('../img/home-outline.png')
}
              style={{ width:
                focused
                ?'30%'
                : '25%',
              height: 
              focused
              ?'70%'
              : '55%'
               }}
              />
          );}
         else if (route.name === "Расписание") {
          return (
<Image source={
  focused
  ?require('../img/file-table.png')
  :require('../img/file-table-outline.png')
}
              style={{ width:
                focused
                ?'30%'
                : '20%',
              height: 
              focused
              ?'70%'
              : '50%'
               }}
              />
          );} 
          else if (route.name === "Предложения") {
          return (
<Image source={
  focused
  ?require('../img/lightbulb-on.png')
  :require('../img/lightbulb-on-outline.png')
}
              style={{ width:
                focused
                ?'25%'
                : '20%',
              height: 
              focused
              ?'75%'
              : '50%'
               }}
              />
          );}         
            else if (route.name === "Профиль") {
            return (
  <Image source={
    focused
    ?require('../img/person.png')
    :require('../img/person-outline.png')
  }
                style={{ width:
                  focused
                  ?'30%'
                  : '18%',
                height: 
                focused
                ?'80%'
                : '50%'
                 }}
                />
            );}
          else if (route.name === "Рейтинг") {
          return (
<Image source={
  focused
  ?require('../img/star.png')
  :require('../img/star-outline.png')
}
              style={{ width:
                focused
                ?'30%'
                : '20%',
              height: 
              focused
              ?'70%'
              : '50%'
               }}
              />
          );}
        
      }
     
    })}  >
      
      
      <Tab.Screen name="Главная" component={HomeStackScreen} options={{headerShown: false}} />
      <Tab.Screen name="Расписание" component={TimetableScreen} options={{headerShown: false}} />
      <Tab.Screen name="Предложения" component={ComplaintStackScreen} options={{headerShown: false}} />
      <Tab.Screen name="Рейтинг" component={RatingtackScreen} options={{headerShown: false}} />
      <Tab.Screen name="Профиль" component={ProfilStackScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

export default Tpage;