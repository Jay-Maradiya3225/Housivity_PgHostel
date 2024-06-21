import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import CityExpertScreen from '../screens/CityExperts/CityExpertScreen';
import SavedScreen from '../screens/Saved/SavedScreen';
import InvestorScreen from '../screens/Investor/InvestorScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { FilledHeartIcon, EmptyHeartIcon, HomeIcon, CityExpertIcon, InvestorIcon, ProfileIcon } from '../../assets/Icons/appIcons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Saved') {
              return focused ? <FilledHeartIcon /> : <EmptyHeartIcon />;
            }
            if (route.name === 'Home') {
              return <HomeIcon />;
            }
            if (route.name === 'City Expert') {
              return <CityExpertIcon />;
            }
            if (route.name === 'Investor') {
              return <InvestorIcon />;
            }
            if (route.name === 'Profile') {
              return <ProfileIcon />;
            }
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="City Expert"
          component={CityExpertScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Saved" options={{headerTitle: 'Saved PG/Hostel'}}>
          {() => <SavedScreen />}
        </Tab.Screen>
        <Tab.Screen
          name="Investor"
          component={InvestorScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
