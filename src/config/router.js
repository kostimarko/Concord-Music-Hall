import React from 'react';
import {  createStackNavigator,createSwitchNavigator,  createBottomTabNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home, Profile, EventDetails, BuyTickets,Loading, SignUp,Featured, GenreSelection, EditProfile, Contest } from '../scenes';

import { fromLeft } from './transitions';

const EventsStack = createStackNavigator({
  AllEvents:{ screen:Home }
});

const FeaturedStack = createStackNavigator({
  FeaturedEvents:{ screen:Featured }
});

const ProfileStack = createStackNavigator({
  Profile:{ screen:Profile },
  SignUp: { screen:SignUp },
  GenreSelection:{ screen:GenreSelection },
  EditProfile:{ screen:EditProfile }
},  {
  navigationOptions: {
    gesturesEnabled: true
  },
  transitionConfig: () => fromLeft(),
});

const Tabs =   createBottomTabNavigator({
  Events:EventsStack,
  Featured:FeaturedStack,
  ProfileScreen:ProfileStack
},{
  navigationOptions:({ navigation }) => ({
    tabBarIcon:({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Events') {
        iconName = 'music-circle';
      } else if (routeName === 'Featured') {
        iconName = 'star';
      } else if ( routeName === 'ProfileScreen') {
        iconName = 'account';
      }
      return (
        <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
      );
    },
  }),
  tabBarOptions: {
    activeTintColor: '#E43F6F',
    inactiveTintColor: '#8C8E8E',
    activeBackgroundColor: '#FBFCFC',
    showLabel: false,
    style: {
      backgroundColor: '#FBFCFC'
    }
  }
});


const HomeStack = createStackNavigator(
  {
    HomeScreen:{
      screen:Tabs,
      navigationOptions:{
        header:null
      }
    },
    Details:{ screen:EventDetails },
    Buy:{ screen:BuyTickets },
    Contest: { screen:Contest }
  },
  {
    navigationOptions: {
      gesturesEnabled: true
    },
    transitionConfig: () => fromLeft(),
  }
);

export const RootStack = createSwitchNavigator({
  Loading:{ screen:Loading },
  Home:HomeStack
});
