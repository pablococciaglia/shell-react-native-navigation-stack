import React, {FC} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigation/StackNavigator';
import {TopTabNavigator} from '../navigation/TopTabNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Page3Screen'> {}

export const Page3Screen: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>page3</Text>

      <Button title="go to previous page" onPress={() => navigation.pop()} />
      <Button
        title="go to the first page of the stack"
        onPress={() => navigation.popToTop()}
      />
      <TopTabNavigator />
    </View>
  );
};

const page3Styles = StyleSheet.create({});
