import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({route}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Persona!!!</Text>
      <Text style={styles.title}>{route.params.name}</Text>
      <Text style={styles.title}>{route.params.id}</Text>
    </View>
  );
};

const personStyles = StyleSheet.create({});
