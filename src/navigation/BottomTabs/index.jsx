/**
 *  @author: Razvan Rauta
 *  Date: Apr 07 2021
 *  Time: 21:49
 */

import { Ionicons } from '@expo/vector-icons';
import RestaurantsScreen from '@/features/restaurants/screens/RestaurantsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import SettingsScreen from '@/features/restaurants/screens/SettingsScreen';
import MapScreen from '@/features/restaurants/screens/MapScreen';

const TabBarIcon = (props) => {
  return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Restaurants"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <BottomTab.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-restaurant" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-map" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
