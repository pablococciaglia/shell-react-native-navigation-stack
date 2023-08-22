import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {Url} from '../types/types';
import {RootStackParams} from '../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Page1Screen'> {}

export const Page1Screen = ({navigation}: Props) => {
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
