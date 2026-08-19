import { StyleSheet } from 'react-native';

import { Palette } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: s(4),
    paddingBottom: s(20),
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: s(56),
    marginTop: s(6),
  },
  stat: {
    alignItems: 'center',
    gap: s(2),
  },
  statValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  statValue: {
    fontSize: s(28),
    fontWeight: '700',
    color: Palette.primary,
  },
  statSuffix: {
    fontSize: s(13),
    fontWeight: '600',
    color: Palette.textSecondary,
  },
  statLabel: {
    fontSize: s(12),
    color: Palette.textSecondary,
  },
});
