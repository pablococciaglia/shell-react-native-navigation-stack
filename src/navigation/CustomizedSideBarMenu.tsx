import React, {useContext} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {Image, useWindowDimensions, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../context/AuthContext';
import {SettingsScreen} from '../screens/SettingsScreen';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';
import {StackNavigator} from './StackNavigator';

export type RootDrowerParams = {
  StackNavigator: undefined;
  SettingsScreen: undefined;
  Tabs: undefined;
};
const Drawer = createDrawerNavigator<RootDrowerParams>();

export const CustomizedSideBarMenu = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <InternalMenu {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name={'StackNavigator'}
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name={'SettingsScreen'}
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
      <Drawer.Screen name={'Tabs'} options={{title: 'Tabs'}} component={Tabs} />
    </Drawer.Navigator>
  );
};

const InternalMenu = ({navigation}: DrawerContentComponentProps) => {
  const {signIn, signOut, authState} = useContext(AuthContext);
  return (
    <DrawerContentScrollView>
      <View>
        <Image
          source={{
            uri: 'https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder-1.jpeg',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
          style={styles.menuButton}>
          <Text style={styles.menuText}>Navigate to Stack</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuButton}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={styles.menuButton}>
          <Text style={styles.menuText}>Tabs</Text>
        </TouchableOpacity>

        {authState.isLoggedIn ? (
          <TouchableOpacity onPress={signOut} style={styles.menuButton}>
            <Text style={styles.menuText}>Log out</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={signIn} style={styles.menuButton}>
            <Text style={styles.menuText}>Log in</Text>
          </TouchableOpacity>
        )}
      </View>
    </DrawerContentScrollView>
  );
};
