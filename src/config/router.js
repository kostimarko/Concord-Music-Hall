import React from 'react';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Home, Profile, EventDetails, BuyTickets,Loading, SignUp , Featured } from '../scenes';

import { fromLeft } from './transitions';

const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },

  },
  {
    navigationOptions: {
      gesturesEnabled: true
    },
    transitionConfig: () => fromLeft()
  }
);

const ProfileStack = createStackNavigator({
  ProfileScreen:Profile,
  SignUp
});

const Tabs = createBottomTabNavigator(
  {
    Events:Home,
    Featured,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Events') {
          iconName = 'music-circle';
        } else if (routeName === 'Featured') {
          iconName = 'star';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
        );
      }
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
  }
);

export const RootStack = createStackNavigator(
  {
    Home: Tabs,
    Details: { screen: EventDetails },
    Buy: { screen: BuyTickets },
    Loading,

  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
    cardStyle:{
      backgroundColor:'#ffffff'
    },

    navigationOptions: {
      gesturesEnabled: true
    },
    transitionConfig: () => fromLeft()

  }
);
