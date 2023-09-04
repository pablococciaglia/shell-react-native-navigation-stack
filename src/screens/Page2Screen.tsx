import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {Url} from '../types/types';
import {AuthContext} from '../context/AuthContext';
import {TouchableIcon} from '../components/TouchableIcon';

export const Page2Screen = () => {
  const {authState} = useContext(AuthContext);
  const navigation = useNavigation<StackNavigationProp<ParamListBase, Url>>();

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'back',
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>page2</Text>
      <Button
        title="go to page 1"
        onPress={() => navigation.navigate('Page1Screen')}
      />
      <Button
        title="go to page 3"
        onPress={() => navigation.navigate('Page3Screen')}
      />

      {authState.favoriteIcon && (
        <>
          <Text style={styles.title}>Favorite Icon</Text>
          <TouchableIcon iconName={authState.favoriteIcon} size={100} />
        </>
      )}
    </View>
  );
};

const page2Styles = StyleSheet.create({});
