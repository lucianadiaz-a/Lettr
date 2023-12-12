import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import SavedScreen from '../screens/SavedScreen'
import SwipeScreen from '../screens/SwipeScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="Swipe"
          component={TabNavigator}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="ListingDetails"
          component={ListingDetailsScreen}
          options={{
            headerShown:false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
