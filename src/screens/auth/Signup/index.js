import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
const Signup = () => {
  const onBackPress = () => {
    console.log('go Back');
  };
  const onSignIn = () => {
    console.log('Sign In');
  };
  const [checked, setChecked] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={onBackPress} />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="Example.gmail.com" />
      <Input isPassword label="Password" placeholder="*****" />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
          <Text style={styles.agreeTextBold}>Privacy</Text>
        </Text>
      </View>
      <Button style={styles.button} title="Sign Up" />
      <Separator text="Or sign up with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Already have an account?
        <Text style={styles.footerLink} onPress={onSignIn}>
          {' '}
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};
export default Signup;
