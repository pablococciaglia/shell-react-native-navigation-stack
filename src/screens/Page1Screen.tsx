import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles} from '../theme/appTheme';
import {Url} from '../types/types';
import {RootStackParams} from '../navigation/StackNavigator';

interface Props extends DrawerScreenProps<RootStackParams, 'Page1Screen'> {}

export const Page1Screen = ({navigation}: Props) => {
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
        <Text style={styles.textButton}>go to person</Text>
      </TouchableOpacity>
    </View>
  );
};

const page1Styles = StyleSheet.create({});
