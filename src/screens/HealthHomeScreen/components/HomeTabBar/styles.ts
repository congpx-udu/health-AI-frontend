import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: s(10),
    paddingHorizontal: s(12),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Palette.divider,
    backgroundColor: Palette.card,
  },
  tab: {
    width: s(40),
    height: s(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    width: s(42),
    height: s(42),
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Palette.primary,
  },
});
