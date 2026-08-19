import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(20),
    paddingTop: s(10),
    paddingBottom: s(8),
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Palette.divider,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: s(46),
    paddingHorizontal: s(12),
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: '#E8E8EF',
    backgroundColor: '#FFFFFF',
    gap: s(8),
  },
  addButton: {
    width: s(28),
    height: s(28),
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: s(13),
    lineHeight: s(18),
    color: Palette.textPrimary,
    paddingVertical: s(8),
  },
  sendButton: {
    width: s(30),
    height: s(30),
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',
    opacity: 0.35,
  },
});
