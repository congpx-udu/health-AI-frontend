import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    padding: s(18),
    borderRadius: Radius.xxl,
    backgroundColor: Palette.card,
    gap: s(14),
  },
  title: {
    fontSize: s(14),
    fontWeight: '700',
    color: Palette.textPrimary,
  },
  row: {
    gap: s(6),
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: s(12),
    color: Palette.textSecondary,
  },
  value: {
    fontSize: s(12),
    fontWeight: '600',
    color: Palette.textPrimary,
  },
  track: {
    height: s(6),
    borderRadius: Radius.pill,
    overflow: 'hidden',
    backgroundColor: Palette.track,
  },
  fill: {
    height: '100%',
    borderRadius: Radius.pill,
    backgroundColor: Palette.primary,
  },
});
