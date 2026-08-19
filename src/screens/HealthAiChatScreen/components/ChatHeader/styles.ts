import { StyleSheet } from 'react-native';

import { Palette } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(24),
    paddingTop: s(8),
    paddingBottom: s(12),
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    width: s(32),
    height: s(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: s(16),
    fontWeight: '600',
    color: Palette.textPrimary,
    letterSpacing: -0.2,
  },
  scanButton: {
    width: s(47),
    height: s(51),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
