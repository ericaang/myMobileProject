import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
const SignIn = () => {
  const onBackPress = () => {
    console.log('go Back');
  };
  const onSignUp = () => {
    console.log('Sign In');
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In" onBackPress={onBackPress} />
      <Input label="Email" placeholder="Example.gmail.com" />
      <Input isPassword label="Password" placeholder="*****" />

      <Button style={styles.button} title="Sign In" />
      <Separator text="Or sign up with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Don't have an account?
        <Text style={styles.footerLink} onPress={onSignUp}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};
export default SignIn;
