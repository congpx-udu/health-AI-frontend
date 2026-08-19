import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(20),
    paddingTop: s(6),
    gap: s(6),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(8),
  },
  title: {
    fontSize: s(20),
    fontWeight: '700',
    color: Palette.textPrimary,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(8),
  },
  actionButton: {
    width: s(32),
    height: s(32),
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Palette.card,
  },
  subtitle: {
    fontSize: s(10),
    letterSpacing: s(0.8),
    fontWeight: '600',
    color: Palette.textMuted,
  },
});
