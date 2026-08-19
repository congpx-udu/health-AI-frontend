import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    padding: s(18),
    borderRadius: Radius.xxl,
    gap: s(14),
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(16),
  },
  ringWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringCenter: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringValue: {
    fontSize: s(26),
    fontWeight: '700',
    color: Palette.onPrimary,
  },
  ringLabel: {
    fontSize: s(9),
    letterSpacing: s(0.6),
    fontWeight: '600',
    color: Palette.onPrimaryMuted,
  },
  metrics: {
    flex: 1,
    gap: s(12),
  },
  metric: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: s(8),
  },
  metricText: {
    gap: s(1),
  },
  metricLabel: {
    fontSize: s(9),
    letterSpacing: s(0.6),
    fontWeight: '600',
    color: Palette.onPrimaryMuted,
  },
  metricValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: s(4),
  },
  metricValue: {
    fontSize: s(18),
    fontWeight: '700',
    color: Palette.onPrimary,
  },
  metricUnit: {
    fontSize: s(10),
    color: Palette.onPrimaryMuted,
  },
  note: {
    fontSize: s(11),
    lineHeight: s(16),
    textAlign: 'center',
    color: Palette.onPrimaryMuted,
  },
});
