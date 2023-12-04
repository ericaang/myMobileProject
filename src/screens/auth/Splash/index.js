import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';
const Splash = () => {
  const onSignUp = () => {
    console.log('clicked');
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/splash.png')}
        resizeMode="contain"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button title="Sign up" onPress={onSignUp} />
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign up</Text>
      </Pressable>
    </View>
  );
};
export default Splash;
