import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({title, onPress, style}) => {
  return (
    // <Pressable style={styles.container} onPress={handlePress}>
    //   <Text style={styles.name}>{title}</Text>
    // </Pressable>
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button); // only re-render when there is any changes in this component
