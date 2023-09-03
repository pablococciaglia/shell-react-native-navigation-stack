import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {Tab3Screen} from '../screens/Tab3Screen';
import {colors} from '../theme/appTheme';

const BottomTabIOS = createBottomTabNavigator();
const BottomTabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'blue',
        tabBarStyle: {
          borderTopColor: 'red',
          borderTopWidth: 2,
          elevation: 3,
        },
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarIcon: ({color}) => {
          let iconName: string | React.JSX.Element = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'ellipse-outline';
              break;

            case 'Tab2Screen':
              iconName = 'square-outline';
              break;

            case 'Tab3Screen':
              iconName = 'triangle-outline';
              break;
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'tab1'}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'tab2'}}
        component={Tab2Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab3Screen"
        options={{title: 'tab3'}}
        component={Tab3Screen}
      />
    </BottomTabAndroid.Navigator>
  );
};

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={colors.backgroundGreen}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'blue',
        tabBarStyle: {
          borderTopColor: 'red',
          borderTopWidth: 2,
          elevation: 3,
        },
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'Tab2Screen':
              iconName = 'T2';
              break;

            case 'Tab3Screen':
              iconName = 'T3';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'tab1',
          // this way you can change the icon of the tab, returning a JSX component.
          // tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'tab2'}}
        component={Tab2Screen}
      />
      <BottomTabIOS.Screen
        name="Tab3Screen"
        options={{title: 'tab3'}}
        component={Tab3Screen}
      />
    </BottomTabIOS.Navigator>
  );
};
