import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  lines: {
    height: 1,
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
  text: {
    color: colors.blue,
    fontWeight: '500',
  },
});
