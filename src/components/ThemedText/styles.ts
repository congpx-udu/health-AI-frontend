import { Platform, StyleSheet } from 'react-native';

import { Fonts } from '@/constants/theme';

export const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
  },
  small: {
    fontSize: 14,
    lineHeight: 20,
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    color: '#3c87f7',
  },
  code: {
    fontFamily: Fonts.mono,
    fontSize: 13,
    fontWeight: Platform.select({ android: '700' }) ?? '500',
  },
});
