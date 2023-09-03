import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactScreen} from '../screens/ContactScreen';

const TopTab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="AlbumsScreen" component={AlbumsScreen} />
      <TopTab.Screen name="ChatScreen" component={ChatScreen} />
      <TopTab.Screen name="ContactScreen" component={ContactScreen} />
    </TopTab.Navigator>
  );
};
