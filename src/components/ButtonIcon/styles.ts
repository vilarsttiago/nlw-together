import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: theme.colors.line,
  },
  title: {
    flex: 1,
    fontSize: 15,
    color: theme.colors.heading,
    textAlign: 'center',
  },
  icon: {

  }
})