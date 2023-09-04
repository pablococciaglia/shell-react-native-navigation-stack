import React, {useEffect, useContext} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles} from '../theme/appTheme';
import {Url} from '../types/types';
import {RootStackParams} from '../navigation/StackNavigator';
import {AuthContext} from '../context/AuthContext';

interface Props extends DrawerScreenProps<RootStackParams, 'Page1Screen'> {}

export const Page1Screen = ({navigation}: Props) => {
  const {authState} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>page1</Text>
      <Button
        title="go to page 2"
        onPress={() => navigation.navigate(Url.Page2Screen)}
      />

      <Text>Navigate with arguments</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('PersonScreen', {
            id: 1,
            name: 'Pablo',
          })
        }>
        <Text style={styles.textButton}>go to person 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('PersonScreen', {
            id: 2,
            name: 'Maria',
          })
        }>
        <Text style={styles.textButton}>go to person 2</Text>
      </TouchableOpacity>
      <Text>Current user: {authState.username}</Text>
    </View>
  );
};

const page1Styles = StyleSheet.create({});
