import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigation/StackNavigator';
// import {SideBarMenu} from './src/navigation/SideBarMenu';
import {CustomizedSideBarMenu} from './src/navigation/CustomizedSideBarMenu';
import {AppState} from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/*<StackNavigator />*/}
        {/* <SideBarMenu /> */}
        <CustomizedSideBarMenu />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
