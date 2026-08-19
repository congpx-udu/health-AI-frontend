import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    gap: s(12),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: s(10),
  },
  bubble: {
    flex: 1,
    paddingVertical: s(12),
    paddingHorizontal: s(14),
    borderRadius: Radius.lg,
    backgroundColor: Palette.card,
  },
  bubbleText: {
    fontSize: s(11),
    lineHeight: s(16),
    color: Palette.textSecondary,
  },
  fab: {
    width: s(44),
    height: s(44),
    borderRadius: Radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Palette.primary,
  },
  caption: {
    fontSize: s(11),
    lineHeight: s(16),
    color: Palette.textSecondary,
  },
});
