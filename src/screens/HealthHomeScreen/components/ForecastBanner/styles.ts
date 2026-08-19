import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: s(12),
    paddingVertical: s(16),
    paddingHorizontal: s(18),
    borderRadius: Radius.xl,
  },
  title: {
    flex: 1,
    fontSize: s(15),
    fontWeight: '600',
    lineHeight: s(21),
    color: Palette.onPrimary,
  },
  iconWrap: {
    width: s(40),
    height: s(40),
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
  },
});
