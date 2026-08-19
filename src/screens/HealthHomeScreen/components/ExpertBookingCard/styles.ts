import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(10),
    padding: s(16),
    borderRadius: Radius.xxl,
  },
  info: {
    flex: 1,
    gap: s(6),
  },
  title: {
    fontSize: s(16),
    fontWeight: '700',
    color: Palette.onPrimary,
  },
  description: {
    fontSize: s(9),
    lineHeight: s(13),
    color: Palette.onPrimaryMuted,
  },
  button: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(6),
    marginTop: s(4),
    paddingVertical: s(7),
    paddingHorizontal: s(12),
    borderRadius: Radius.pill,
    backgroundColor: Palette.card,
  },
  buttonLabel: {
    fontSize: s(11),
    fontWeight: '600',
    color: Palette.textPrimary,
  },
  avatar: {
    width: s(96),
    height: s(104),
    borderRadius: Radius.xl,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: s(4),
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
  },
  avatarBadge: {
    position: 'absolute',
    top: s(8),
    right: s(8),
    width: s(22),
    height: s(22),
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Palette.card,
  },
});
