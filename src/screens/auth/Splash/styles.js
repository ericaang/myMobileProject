import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 9,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: '100%',
  },
  titleContaier: {
    marginVertical: 24,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
