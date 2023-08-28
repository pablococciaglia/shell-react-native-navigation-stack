import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {RootDrowerParams} from '../navigation/SideBarMenu';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props extends StackScreenProps<RootDrowerParams, 'SettingsScreen'> {}

export const SettingsScreen = ({route}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{...styles.globalMargin, marginTop: insets.top}}>
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};

const personStyles = StyleSheet.create({});
