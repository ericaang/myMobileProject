import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    borderRadius: 14,
    width: '45%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
});
