import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigation/StackNavigator';
// import {SideBarMenu} from './src/navigation/SideBarMenu';
import {CustomizedSideBarMenu} from './src/navigation/CustomizedSideBarMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/*<StackNavigator />*/}
      {/* <SideBarMenu /> */}
      <CustomizedSideBarMenu />
    </NavigationContainer>
  );
};

export default App;
