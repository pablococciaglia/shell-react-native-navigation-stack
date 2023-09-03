import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export const Tab2Screen = () => {
  const rocket = <Icon name="rocket" size={30} color="#900" />;
  const eyedrop = <Icon name="eyedrop-outline" size={30} color="#900" />;
  return (
    <View>
      <Text>{rocket}</Text>
      <Text>{eyedrop}</Text>
    </View>
  );
};
