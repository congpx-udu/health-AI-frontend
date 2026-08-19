import { StyleSheet } from 'react-native';

import { Spacing } from '@/constants/theme';

export const styles = StyleSheet.create({
  base: {
    paddingVertical: Spacing.two + Spacing.one,
    paddingHorizontal: Spacing.four,
    borderRadius: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#3c87f7',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3c87f7',
  },
  dimmed: {
    opacity: 0.6,
  },
  primaryText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  secondaryText: {
    color: '#3c87f7',
    fontWeight: '600',
  },
});
