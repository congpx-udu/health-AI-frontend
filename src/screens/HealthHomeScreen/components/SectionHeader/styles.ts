import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: s(17),
    fontWeight: '700',
    color: Palette.textPrimary,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(4),
    paddingVertical: s(7),
    paddingHorizontal: s(12),
    borderRadius: Radius.pill,
    backgroundColor: Palette.card,
  },
  actionLabel: {
    fontSize: s(12),
    fontWeight: '600',
    color: Palette.textPrimary,
  },
});
