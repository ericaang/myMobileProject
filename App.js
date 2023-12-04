import React, {useEffect} from 'react';
import {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
// import Chair from './Chair';
// import Table from './Table';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignIn from './src/screens/auth/SignIn';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);
  const [theme, setTheme] = useState('light');

  return (
    <SafeAreaView>
      {/* <Text
        style={style.themeHeader}
        onPress={() => {
          setTheme('dark');
        }}>
        Make Theme dark
      </Text> */}
      {/* <View>
        <Chair theme={theme} />
        <Table />
      </View> */}
      {/* <Splash /> */}
      {/* <Signup /> */}
      <SignIn />
    </SafeAreaView>
  );
}

// const style = StyleSheet.create({
//   themeHeader: {margin: 16, fontSize: 16, backgroundColor: 'yellow'},
// });

export default App;
