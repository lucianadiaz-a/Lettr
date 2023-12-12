import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SwipeScreen from '../screens/SwipeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import Icon from '../components/Icon';
import {colors, sizes} from '../constants/theme';
import {StyleSheet, Animated} from 'react-native';

const tabs = [
  {
    name: 'Chat',
    screen: ChatScreen,
  },
  {
    name: 'Swipe',
    screen: SwipeScreen,
  },
  {
    name: 'Profile',
    screen: ProfileScreen,
  },
];

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Swipe"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#ffa654', height: 100}
        }}>
        {tabs.map(({name, screen}, index) => {
            return (
                <Tab.Screen
                    key = {name}
                    name = {name}
                    component = {screen}
                    options = {{
                        tabBarIcon: () => {
                            return (
                                <Icon 
                                    icon = {name}
                                    size = {50}
                                />
                            );
                        },
                    }}
                    listeners={{
                        focus: () => {
                            Animated.spring(offsetAnimation, {
                                toValue: index * (sizes.width / tabs.length),
                                useNativeDriver: true,
                            }).start();
                        }
                    }}
                >
                </Tab.Screen>
            );
        })}
      </Tab.Navigator>
      <Animated.View style={[styles.indicator, {
        transform: [{
            translateX: offsetAnimation,
        }]
      }]} />
    </>
  );
};

const styles = StyleSheet.create({
    indicator : {
        position: 'absolute',
        width: 10,
        height: 2,
        left: sizes.width / 3 / 2 - 5,
        bottom: 30,
        backgroundColor: colors.primary,
        zIndex: 100,
    },
});

export default TabNavigator;
