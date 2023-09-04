import {Text, TouchableOpacity} from 'react-native';
import React, {FC, useContext} from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {AuthContext} from '../context/AuthContext';

interface TouchableIconProps {
  iconName: string;
  size?: number;
}
export const TouchableIcon: FC<TouchableIconProps> = ({
  iconName,
  size = 50,
}) => {
  const {setFavoriteIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => setFavoriteIcon(iconName)}>
      <Text>
        <Icon name={iconName} size={size} color="#900" />
      </Text>
    </TouchableOpacity>
  );
};
