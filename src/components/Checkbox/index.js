import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {styles} from './styles';

const Checkbox = ({checked, onCheck}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onCheck(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            source={require('../../assets/Check.png')}
            style={styles.checkedIcon}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Checkbox;
