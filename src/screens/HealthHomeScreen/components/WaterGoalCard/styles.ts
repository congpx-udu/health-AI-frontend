import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    padding: s(18),
    borderRadius: Radius.xxl,
    gap: s(14),
  },
  body: {
    gap: s(2),
  },
  title: {
    fontSize: s(17),
    fontWeight: '700',
    color: Palette.onPrimary,
  },
  subtitle: {
    fontSize: s(11),
    color: Palette.onPrimaryMuted,
  },
  value: {
    marginTop: s(6),
    fontSize: s(30),
    fontWeight: '700',
    color: Palette.onPrimary,
  },
  track: {
    height: s(7),
    borderRadius: Radius.pill,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.28)',
  },
  fill: {
    width: '82%',
    height: '100%',
    borderRadius: Radius.pill,
    backgroundColor: Palette.onPrimary,
  },
});
