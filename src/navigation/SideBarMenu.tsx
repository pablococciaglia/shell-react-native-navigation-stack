import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';
import {Tabs} from './Tabs';

export type RootDrowerParams = {
  StackNavigator: undefined;
  SettingsScreen: undefined;
  Tabs: undefined;
};
const Drawer = createDrawerNavigator<RootDrowerParams>();

export const SideBarMenu = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name={'StackNavigator'}
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen name={'Tabs'} options={{title: 'Tabs'}} component={Tabs} />
      <Drawer.Screen
        name={'SettingsScreen'}
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
