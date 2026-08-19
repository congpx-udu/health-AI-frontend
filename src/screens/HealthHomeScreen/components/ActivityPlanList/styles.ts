import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    gap: s(4),
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(6),
    marginBottom: s(6),
  },
  sectionTitle: {
    fontSize: s(11),
    letterSpacing: s(0.8),
    fontWeight: '700',
    color: Palette.textMuted,
  },
  item: {
    paddingVertical: s(14),
    gap: s(3),
  },
  itemDivider: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Palette.divider,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: s(8),
  },
  tag: {
    paddingVertical: s(4),
    paddingHorizontal: s(10),
    borderRadius: Radius.pill,
  },
  tagLabel: {
    fontSize: s(10),
    fontWeight: '600',
  },
  title: {
    fontSize: s(15),
    fontWeight: '700',
    color: Palette.textPrimary,
  },
  subtitle: {
    fontSize: s(11),
    color: Palette.textSecondary,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(5),
    marginTop: s(8),
  },
  meta: {
    fontSize: s(11),
    color: Palette.textMuted,
  },
});
